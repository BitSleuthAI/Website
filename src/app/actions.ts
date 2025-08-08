'use server';

import { z } from 'zod';
import { generateLandingPageCopy } from '@/ai/flows/generate-landing-page-copy';
import type { GenerateLandingPageCopyOutput } from '@/ai/flows/generate-landing-page-copy';

// Schema for AI Copy Generator
const CopyGeneratorSchema = z.object({
  productName: z.string().min(2, { message: 'Product name is required.' }),
  targetAudience: z.string().min(5, { message: 'Target audience is required.' }),
  valueProposition: z.string().min(10, { message: 'Value proposition is required.' }),
  tone: z.string().default('professional'),
});

interface GenerateCopyState {
  error?: string;
  data?: GenerateLandingPageCopyOutput;
}

export async function handleGenerateCopy(
  prevState: GenerateCopyState,
  formData: FormData,
): Promise<GenerateCopyState> {
  const validatedFields = CopyGeneratorSchema.safeParse({
    productName: formData.get('productName'),
    targetAudience: formData.get('targetAudience'),
    valueProposition: formData.get('valueProposition'),
    tone: formData.get('tone'),
  });

  if (!validatedFields.success) {
    const errors = validatedFields.error.flatten().fieldErrors;
    const errorMessages = Object.values(errors).flat().join(' ');
    return {
      error: errorMessages,
    };
  }

  try {
    const result = await generateLandingPageCopy({...validatedFields.data, numberOfVariants: 3});
    return { data: result };
  } catch (e: any) {
    return {
      error: 'Failed to generate copy. ' + e.message,
    };
  }
}


// Schema for Contact Form
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

interface ContactFormState {
  message: string;
  error?: string;
}

export async function handleContactSubmit(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
    const validatedFields = ContactFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        const errors = validatedFields.error.flatten().fieldErrors;
        const errorMessages = Object.values(errors).flat().join(' ');
        return {
            message: "Validation failed",
            error: errorMessages,
        };
    }
    
    // Simulate sending email
    console.log("Contact Form Submitted:");
    console.log(validatedFields.data);

    return { message: "Your message has been sent successfully!" };
}
