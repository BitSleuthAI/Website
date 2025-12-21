'use server';

import { z } from 'zod';

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
    
    // Simulate sending email without logging sensitive user data
    return { message: "Your message has been sent successfully!" };
}
