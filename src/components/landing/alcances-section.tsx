
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Briefcase, Building, BookOpen, ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const alcances = {
  industrial: {
    tabName: 'Área Industrial',
    icon: Briefcase,
    image: {
      src: '/industria.jpg',
      alt: 'Trabajador industrial con equipo de seguridad en una fábrica.',
    },
    accentColor: 'hsl(211 100% 50%)', // Blue
    divisions: [
      {
        title: 'División de Bienestar en Salud y Seguridad Laboral',
        items: [
          'Asesoría en Prevención de Riesgos',
          'Evaluaciones de Puestos de Trabajo',
          'Protocolos de Salud Mental',
          'Bienestar Organizacional, Mediaciones, Procesos de Negociación',
          'Implementación de protocolos en salud y seguridad laboral',
          'Evaluación de ambientes de trabajo (Ruido, Sílice, Gases y Solventes)',
          'Muestreo de Asbestos',
          'Pruebas de hermeticidad de carros',
          'Auditorías en salud y seguridad ocupacional',
          'Preparación y actualización en sistemas de gestión',
          'Confección de RIFs',
          'Vigilancia de la Salud (Examen de sangre y orina, Scanner, mamografía)',
          'Toma de muestras clínicas en terreno',
        ],
      },
      {
        title: 'División de Organización Informática',
        items: [
          'Asesoría de Redes informáticas',
          'Mantención de Hardware',
          'Instalación de cámaras de control perimetral',
        ],
      },
      {
        title: 'División de Bienestar Medio Ambiental',
        items: [
          'Pruebas de hermeticidad',
          'Implementación ISO 14001',
          'Gestión ISO 14001',
          'Acompañamiento control de impacto ambiental',
        ],
      },
    ],
  },
  administrativa: {
    tabName: 'Área Administrativa',
    icon: Building,
    image: {
      src: '/area-administrativa.jpg',
      alt: 'Oficina moderna con personas trabajando en computadoras.',
    },
    accentColor: 'hsl(173 58% 39%)', // Teal
    divisions: [
      {
        title: 'Asesoría y Acompañamiento Laboral',
        items: [
          'Análisis de puestos de trabajo',
          'Redacción, revisión y control de contratos de trabajo, anexos y otros',
          'Cálculo de Remuneraciones',
          'Cálculo y proceso de pago de Cotizaciones Previsionales',
          'Cálculo y confección de finiquitos de trabajo',
          'Control documental',
          'Análisis de Remuneraciones',
        ],
      },
      {
        title: 'Acompañamiento Contable',
        items: ['Impuestos mensuales', 'Impuestos anuales', 'Emisión de Informes'],
      },
      {
        title: 'Administración de Edificios y Condominios',
        items: [
          'Gestión Gastos comunes, Remuneraciones, Contratación Personal, etc.',
          'Gestión Certificaciones, Mantenimiento, Planes de Emergencia, etc.',
        ],
      },
    ],
  },
  formativo: {
    tabName: 'Bienestar Formativo',
    icon: BookOpen,
    image: {
      src: '/curso.jpg',
      alt: 'Grupo de personas en un evento de formación corporativa.',
    },
    accentColor: 'hsl(262 84% 59%)', // Purple
    divisions: [
      {
        title: 'Cursos y Talleres',
        items: [
          'Optimización de tiempos de trabajo',
          'Espacios confinados',
          'Ruido, Temperatura, Gases, Sílice, Asbesto, etc.',
          'Comités Bipartitos',
          'Buenas prácticas de laboratorio - BPL',
          'Buenas prácticas de manufactura y agrícolas - BPM BPA',
          'Talleres de cuidado de extremidades',
          'Legislación laboral',
        ],
      },
    ],
  },
};

type AlcancesKeys = keyof typeof alcances;

export default function AlcancesSection() {
  const [activeTab, setActiveTab] = useState<AlcancesKeys>('industrial');

  return (
    <section id="alcances" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Nuestros Alcances</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Un universo de soluciones a tu disposición. Explora nuestras áreas de especialización.
          </p>
        </div>

        {/* Mobile Select */}
        <div className="md:hidden">
          <Select value={activeTab} onValueChange={(value) => setActiveTab(value as AlcancesKeys)}>
            <SelectTrigger className="w-full text-base py-6 border-2">
              <SelectValue placeholder="Selecciona un área" />
            </SelectTrigger>
            <SelectContent>
              {(Object.keys(alcances) as AlcancesKeys[]).map((key) => {
                const { tabName, icon: IconComponent } = alcances[key];
                return (
                  <SelectItem key={key} value={key} className="py-2">
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-5 w-5" />
                      <span>{tabName}</span>
                    </div>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:block">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as AlcancesKeys)} className="w-full">
            <TabsList className="w-full grid-cols-1 rounded-lg bg-muted p-1 md:grid md:grid-cols-3">
              {(Object.keys(alcances) as AlcancesKeys[]).map((key) => {
                const { tabName, icon: Icon, accentColor } = alcances[key];
                return (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="group flex items-center justify-center gap-2 rounded-md py-2.5 text-base data-[state=active]:font-bold data-[state=active]:shadow-md"
                    style={{ '--accent-color': accentColor } as React.CSSProperties}
                  >
                    <Icon className="h-5 w-5 transition-colors group-data-[state=active]:text-[--accent-color]" />
                    <span className="transition-colors group-data-[state=active]:text-[--accent-color]">{tabName}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </div>

        {(Object.keys(alcances) as AlcancesKeys[]).map((key) => {
          const { divisions, accentColor, image } = alcances[key];
          return (
            <div key={key} className={activeTab === key ? 'block' : 'hidden'}>
              <div className="pt-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                  <div className="space-y-4">
                    <Accordion key={activeTab} type="single" collapsible className="w-full">
                      {divisions.map((division, index) => (
                        <AccordionItem key={index} value={`item-${key}-${index}`}>
                          <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline leading-normal">
                            {division.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-inside list-none space-y-2 pl-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
                              {division.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <ChevronRight
                                    className="mt-1 h-4 w-4 flex-shrink-0"
                                    style={{ color: accentColor }}
                                  />
                                  <span className="text-muted-foreground">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                  <div className="relative h-80 w-full self-center lg:h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={600}
                      className="rounded-lg object-cover shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
