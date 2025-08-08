// src/ai/flows/generate-landing-page-copy.ts
'use server';
/**
 * @fileOverview Generates personalized marketing copy variants for a landing page using AI.
 *
 * - generateLandingPageCopy - A function that generates landing page copy variants.
 * - GenerateLandingPageCopyInput - The input type for the generateLandingPageCopy function.
 * - GenerateLandingPageCopyOutput - The return type for the generateLandingPageCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLandingPageCopyInputSchema = z.object({
  productName: z.string().describe('The name of the product or service.'),
  targetAudience: z.string().describe('The target audience for the landing page.'),
  valueProposition: z.string().describe('The core value proposition to highlight.'),
  numberOfVariants: z
    .number()
    .default(3)
    .describe('The number of copy variants to generate.'),
  tone: z
    .string()
    .default('professional')
    .describe('The tone of the landing page copy (e.g., professional, friendly, humorous).'),
});
export type GenerateLandingPageCopyInput = z.infer<typeof GenerateLandingPageCopyInputSchema>;

const GenerateLandingPageCopyOutputSchema = z.object({
  copyVariants: z.array(z.string()).describe('An array of generated landing page copy variants.'),
});
export type GenerateLandingPageCopyOutput = z.infer<typeof GenerateLandingPageCopyOutputSchema>;

export async function generateLandingPageCopy(
  input: GenerateLandingPageCopyInput
): Promise<GenerateLandingPageCopyOutput> {
  return generateLandingPageCopyFlow(input);
}

const generateLandingPageCopyPrompt = ai.definePrompt({
  name: 'generateLandingPageCopyPrompt',
  input: {schema: GenerateLandingPageCopyInputSchema},
  output: {schema: GenerateLandingPageCopyOutputSchema},
  prompt: `You are a marketing expert specializing in creating high-converting landing page copy.

  Generate {{numberOfVariants}} different versions of landing page copy for the following product, target audience and value proposition. The tone of the copy should be {{tone}}.

  Product: {{{productName}}}
  Target Audience: {{{targetAudience}}}
  Value Proposition: {{{valueProposition}}}

  Each copy variant should be concise, persuasive, and highlight the key benefits for the target audience. Focus on clear and compelling language that encourages user sign-ups.

  The generated copy variants should be returned in an array.`,
});

const generateLandingPageCopyFlow = ai.defineFlow(
  {
    name: 'generateLandingPageCopyFlow',
    inputSchema: GenerateLandingPageCopyInputSchema,
    outputSchema: GenerateLandingPageCopyOutputSchema,
  },
  async input => {
    const {output} = await generateLandingPageCopyPrompt(input);
    return output!;
  }
);
