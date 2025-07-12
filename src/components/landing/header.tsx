
"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Alcances', href: '#alcances' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Noticias', href: '#noticias' },
  { name: 'Contacto', href: '#contacto' },
];

function Logo() {
  return (
    <div className="flex items-center gap-2 text-xl text-white">
      <span className="font-bold tracking-tight">BOSS</span>
      <span className="h-5 w-px bg-accent" aria-hidden="true" />
      <span className="font-normal tracking-widest">ASESORÍAS</span>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-gray-800/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Logo />
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-medium text-white transition-colors hover:text-accent"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menú">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-gray-900 text-white border-l-gray-800 p-0">
               <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
               <div className="flex items-center p-4 border-b border-gray-800 h-20">
                <SheetClose asChild>
                  <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)}>
                    <Logo />
                  </a>
                </SheetClose>
               </div>
              <nav className="mt-8 px-4">
                <ul className="flex flex-col items-center space-y-6">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                       <SheetClose asChild>
                        <a
                          href={link.href}
                          className="text-2xl font-medium transition-colors hover:text-accent"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.name}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
    
