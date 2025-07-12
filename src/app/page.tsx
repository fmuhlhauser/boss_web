
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import {
  ClipboardCheck,
  Users,
  ShieldCheck,
  BrainCircuit,
  Gavel,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import React from 'react';
import NewsSection from '@/components/landing/news-section';
import AlcancesSection from '@/components/landing/alcances-section';
import ContactForm from '@/components/landing/contact-form';

const services = [
  {
    iconName: 'ClipboardCheck',
    title: 'Evaluación de Puestos de Trabajo',
    description:
      'Analizamos y adaptamos los puestos de trabajo para optimizar el rendimiento y bienestar del equipo.',
  },
  {
    iconName: 'Users',
    title: 'Inclusión Laboral',
    description:
      'Fomentamos la diversidad y la inclusión, creando entornos laborales equitativos y respetuosos para todos.',
  },
  {
    iconName: 'ShieldCheck',
    title: 'Capacitación en Salud y Seguridad',
    description:
      'Ofrecemos programas de formación para prevenir riesgos y cumplir con la normativa vigente.',
  },
  {
    iconName: 'BrainCircuit',
    title: 'Apoyo en Salud Mental',
    description:
      'Brindamos herramientas y estrategias para gestionar el estrés y promover la salud mental en el trabajo.',
  },
  {
    iconName: 'Gavel',
    title: 'Asesoría Normativa y Legal',
    description:
      'Acompañamos en el cumplimiento de las leyes y normativas de seguridad laboral en Chile.',
  },
];

const features = [
  'Gestión del bienestar',
  'Evaluación de puestos',
  'Inclusión laboral',
  'Entornos sanos y seguros',
];

const iconsMap: { [key: string]: React.FC<LucideProps> } = {
  ClipboardCheck,
  Users,
  ShieldCheck,
  BrainCircuit,
  Gavel,
};

const Icon = ({ name }: { name: string }) => {
  const LucideIcon = iconsMap[name];
  if (!LucideIcon) return null;
  return <LucideIcon className="size-12 text-primary" />;
};

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AlcancesSection />
        <AboutSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex h-[calc(100dvh-80px)] min-h-[600px] w-full items-center justify-center pt-[80px]"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/slide1.jpg"
          alt="Equipo de trabajo colaborando en una oficina moderna."
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Porque nuestro compromiso es tu bienestar.
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
          Activemos la tranquilidad y la energía en tu equipo.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <a href="#contacto">Contáctanos Ahora</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
            asChild
          >
            <a href="#servicios">Nuestros Servicios</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Soluciones Integrales para tu Empresa
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Ofrecemos asesoría y acompañamiento técnico en cada paso.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="transform-gpu transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <CardHeader className="items-center text-center">
                <Icon name={service.iconName} />
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="nosotros" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold md:text-4xl">
              Tu Aliado Estratégico en Bienestar Laboral
            </h2>
            <p className="text-lg text-muted-foreground">
              Acompañamos a organizaciones en la gestión del bienestar dentro y
              fuera del trabajo. Nuestro equipo multidisciplinario está
              comprometido con el bienestar de las personas en sus entornos
              laborales, impulsando una cultura de prevención y cuidado.
            </p>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" asChild className="mt-4">
              <a href="#contacto">Conversemos</a>
            </Button>
          </div>
          <div>
            <Image
              src="/manos-de-negocios-unieron-trabajo-en-equipo.jpg"
              alt="Manos de un equipo unidas en señal de compromiso."
              width={600}
              height={600}
              className="rounded-lg object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contacto" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Ponte en Contacto</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ¿Listo para transformar tu ambiente laboral? Déjanos tu mensaje y
            te contactaremos a la brevedad.
          </p>
        </div>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-lg bg-muted/10 p-6 shadow-md">
              <h3 className="mb-4 text-2xl font-semibold">
                Información Directa
              </h3>
              <div className="space-y-4 text-lg">
                <a
                  href="tel:+56992895726"
                  className="flex items-center gap-4 transition-colors hover:text-primary"
                >
                  <Phone className="h-6 w-6" />
                  <span>+56 9 9289 5726</span>
                </a>
                <a
                  href="mailto:contacto@bossasesorias.cl"
                  className="flex items-center gap-4 transition-colors hover:text-primary"
                >
                  <Mail className="h-6 w-6" />
                  <span>contacto@bossasesorias.cl</span>
                </a>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-6 w-6 flex-shrink-0" />
                  <span>13 Norte 853, Of. 803 – Viña del Mar</span>
                </div>
              </div>
            </div>
            <div className="aspect-video h-auto w-full overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.821102660041!2d-71.5471410243405!3d-33.03450097355154!2m3!1f0!2f0!3f0!3m2!i1024!2i768!4f13.1!3m3!1m2!1s0x9662d59451a5c661%3A0x6291a5e18579434!2s13%20Nte%20853%2C%20Vi%C3%B1a%20del%20Mar%2C%20Valpara%C3%ADso!5e0!3m2!1ses!2scl!4v1722368936997!5m2!1ses!2scl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de BOSS Asesorías en Google Maps"
              ></iframe>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
