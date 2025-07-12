import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import WhatsappButton from '@/components/landing/whatsapp-button';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'BOSS ASESORÍAS | Consultoría en Salud y Seguridad Ocupacional',
  description:
    'Acompañamos a organizaciones en la gestión del bienestar dentro y fuera del trabajo. Evaluamos puestos de trabajo, fomentamos la inclusión laboral y promovemos entornos sanos y seguros.',
  openGraph: {
    title: 'BOSS ASESORÍAS | Consultoría en Salud y Seguridad Ocupacional',
    description: 'Expertos en bienestar laboral, seguridad e inclusión. Activemos la tranquilidad y la energía en tu equipo.',
    url: 'https://boss-asesorias.cl', // Replace with actual domain
    siteName: 'BOSS ASESORÍAS',
    images: [
      {
        url: '/slide1.jpg',
        width: 1200,
        height: 630,
        alt: 'Oficina moderna con equipo colaborando',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BOSS ASESORÍAS | Consultoría en Salud y Seguridad Ocupacional',
    description: 'Expertos en bienestar laboral, seguridad e inclusión. Activemos la tranquilidad y la energía en tu equipo.',
    images: ['/slide1.jpg'], 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} !scroll-smooth`}>
      <head>
        <link rel="preload" href="/slide1.jpg" as="image" />
        <meta
          name="description"
          content="Acompañamos a organizaciones en la gestión del bienestar. Evaluamos puestos de trabajo, fomentamos la inclusión y promovemos entornos seguros."
        />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        {children}
        <Toaster />
        <WhatsappButton phoneNumber="+56992895726" />
      </body>
    </html>
  );
}
