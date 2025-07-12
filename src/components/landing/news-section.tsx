
'use client';

import React, { useState, useEffect } from 'react';
import { getNews, type NewsArticle } from '@/ai/flows/news-flow';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export default function NewsSection() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        const newsData = await getNews({});
        setNews(newsData.articles);
        setError(null);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('No se pudieron cargar las noticias. Intente más tarde.');
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  return (
    <section id="noticias" className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Noticias de Interés</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Mantente al día con las últimas novedades en salud, seguridad y bienestar laboral.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2 mt-2" />
                </CardHeader>
                <CardContent className="flex-grow">
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-5 w-1/3" />
                </CardFooter>
              </Card>
            ))
          ) : error ? (
            <div className="col-span-full text-center text-destructive">
              <p>{error}</p>
            </div>
          ) : (
            news.map((article, index) => (
              <Card key={index} className="flex flex-col transform-gpu transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
                  <CardDescription className="pt-2">
                    <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">{article.category}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{article.summary}</p>
                </CardContent>
                <CardFooter>
                  <a href="#contacto" className="flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80">
                    <span>Podemos ayudarte</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
