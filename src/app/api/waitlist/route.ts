// src/app/api/waitlist/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { z } from 'zod';
import { checkRateLimit, getClientIdentifier, RateLimitPresets } from '@/lib/rate-limit';

// Email validation schema
const emailSchema = z.string().email();

export async function POST(request: NextRequest) {
  try {
    // Rate limiting: 5 requests per minute per IP
    const clientId = getClientIdentifier(request);
    const rateLimitResult = checkRateLimit(clientId, RateLimitPresets.STRICT);

    if (!rateLimitResult.success) {
      const retryAfter = Math.max(0, Math.ceil((rateLimitResult.reset - Date.now()) / 1000));
      
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
          retryAfter,
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': rateLimitResult.reset.toString(),
            'Retry-After': retryAfter.toString(),
          },
        }
      );
    }

    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Enhanced email validation using Zod
    const emailValidation = emailSchema.safeParse(email);
    if (!emailValidation.success) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Initialize Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID_FEEDBACK;

    // Add email to sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'A:B',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[email, new Date().toISOString()]],
      },
    });

    return NextResponse.json(
      { success: true },
      {
        headers: {
          'X-RateLimit-Limit': rateLimitResult.limit.toString(),
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': rateLimitResult.reset.toString(),
        },
      }
    );
  } catch (error) {
    // Log error details only in development
    if (process.env.NODE_ENV !== 'production') {
      console.error('Waitlist error:', error);
    } else {
      // In production, log without sensitive details
      console.error('Waitlist submission failed');
    }
    return NextResponse.json({ error: 'Failed to add to waitlist' }, { status: 500 });
  }
}
