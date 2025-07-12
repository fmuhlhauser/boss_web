import { z } from 'zod';

export const ContactFormInputSchema = z.object({
  name: z.string().min(1, { message: 'El nombre es requerido.' }).max(100, {message: 'El nombre no puede exceder los 100 caracteres.'}),
  email: z.string().min(1, { message: 'El correo electrónico es requerido.' }).email({ message: 'Por favor, introduce un correo válido.' }),
  subject: z.string().min(1, { message: 'El asunto es requerido.' }).max(150, {message: 'El asunto no puede exceder los 150 caracteres.'}),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }).max(2000, {message: 'El mensaje no puede exceder los 2000 caracteres.'}),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

export const ContactFormResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});
export type ContactFormResponse = z.infer<typeof ContactFormResponseSchema>;
