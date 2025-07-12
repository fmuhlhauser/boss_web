
'use server';
/**
 * @fileOverview A flow for generating weekly news articles.
 *
 * - getNews - A function that returns 4 news articles.
 * - NewsRequest - The input type for the news flow.
 * - NewsResponse - The return type for the news flow.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const NewsRequestSchema = z.object({}).describe('No input needed, news will be random on each request.');
export type NewsRequest = z.infer<typeof NewsRequestSchema>;

const NewsArticleSchema = z.object({
    title: z.string().describe('Un titular de noticia conciso y atractivo.'),
    summary: z.string().describe('Un resumen de la noticia de 2 o 3 frases.'),
    category: z.string().describe('La categoría de la noticia, por ejemplo: "Salud Ocupacional", "Normativa Legal", "Bienestar Laboral".'),
});
export type NewsArticle = z.infer<typeof NewsArticleSchema>;

const NewsResponseSchema = z.object({
  articles: z.array(NewsArticleSchema).length(4).describe('Una lista de exactamente 4 artículos de noticias.'),
});
export type NewsResponse = z.infer<typeof NewsResponseSchema>;

export async function getNews(input: NewsRequest): Promise<NewsResponse> {
  return newsFlow(input);
}

const newsPrompt = ai.definePrompt({
  name: 'newsPrompt',
  input: { schema: NewsRequestSchema },
  output: { schema: NewsResponseSchema },
  prompt: `Eres un experto en comunicación para una consultora chilena llamada "BOSS ASESORÍAS", especializada en salud, seguridad y bienestar laboral.

Tu tarea es generar 4 resúmenes de noticias breves, relevantes y profesionales para la página web de la empresa. Las noticias deben ser ficticias pero plausibles y estar relacionadas con las áreas de especialización de la empresa en Chile:
- Salud y Seguridad Ocupacional (Prevención de Riesgos, Protocolos, etc.)
- Legislación Laboral Chilena (Nuevas leyes, normativas)
- Bienestar y Salud Mental en el Trabajo
- Gestión Medioambiental en la industria
- Administración de Recursos Humanos y Contabilidad

IMPORTANTE: Las noticias deben ser informativas y generales del sector. NO deben mencionar a "BOSS ASESORÍAS" ni a ninguna otra empresa asesora en el título o en el resumen. No deben ser casos de éxito ni testimonios.

Genera exactamente 4 artículos y formatea la salida en JSON.`,
});

const newsFlow = ai.defineFlow(
  {
    name: 'newsFlow',
    inputSchema: NewsRequestSchema,
    outputSchema: NewsResponseSchema,
  },
  async (input) => {
    const { output } = await newsPrompt(input);
    return output!;
  }
);
