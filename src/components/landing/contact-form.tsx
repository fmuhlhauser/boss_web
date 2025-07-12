
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { sendContactMessage } from '@/ai/flows/contact-flow';
import { ContactFormInputSchema } from '@/lib/schemas';
import { Loader2 } from 'lucide-react';


type ContactFormValues = z.infer<typeof ContactFormInputSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormInputSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    try {
      const result = await sendContactMessage(values);

      if (result.success) {
        toast({
          title: 'Mensaje Enviado',
          description: result.message,
          variant: 'default',
        });
        form.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
       const errorMessage = error instanceof Error 
        ? error.message 
        : 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo nuevamente en unos minutos o escríbenos directamente a contacto@bossasesorias.cl.';
      
      toast({
        title: 'Error al enviar',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="p-6 sm:p-8">
      <CardHeader className="p-0">
        <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
      </CardHeader>
      <CardContent className="p-0 pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre Completo</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej: Juan Pérez" {...field} disabled={isSubmitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Ej: juan.perez@email.com" {...field} disabled={isSubmitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Asunto</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej: Cotización de servicios" {...field} disabled={isSubmitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tu mensaje</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Escribe aquí los detalles de tu consulta..." rows={5} {...field} disabled={isSubmitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                'Enviar Mensaje'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
