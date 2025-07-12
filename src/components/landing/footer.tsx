
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

function Logo() {
  return (
     <a href="#inicio" className="flex items-center gap-2 text-white transition-colors hover:text-accent">
      <div className="flex items-center gap-2 text-2xl tracking-tight">
        <span className="font-bold">BOSS</span>
        <span className="h-6 w-px bg-accent" aria-hidden="true" />
        <span className="font-normal tracking-widest">ASESORÍAS</span>
      </div>
    </a>
  );
}

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Alcances', href: '#alcances' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Noticias', href: '#noticias' },
  { name: 'Contacto', href: '#contacto' },
];

const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin className="size-5" />, href: 'https://www.linkedin.com/in/boss-asesorias-8b9786118/', hoverColor: 'hover:text-[#0077B5]' },
    { name: 'Facebook', icon: <Facebook className="size-5" />, href: 'https://www.facebook.com/BossAsesorias', hoverColor: 'hover:text-[#1877F2]' },
    { name: 'Instagram', icon: <Instagram className="size-5" />, href: 'https://www.instagram.com/boss_asesorias/', hoverColor: 'hover:text-[#E4405F]' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-400">
              Comprometidos con el bienestar y la seguridad en tu organización.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navegación</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 transition-colors hover:text-accent">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                <span>13 Norte 853, Oficina 803 – Viña del Mar, Chile</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-blue-500" />
                <a href="mailto:contacto@bossasesorias.cl" className="transition-colors hover:text-blue-400">
                  contacto@bossasesorias.cl
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-green-500" />
                <a href="tel:+56992895726" className="transition-colors hover:text-green-400">
                  +56 9 9289 5726
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Síguenos</h4>
             <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className={`text-gray-400 transition-colors ${social.hoverColor}`}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} BOSS ASESORÍAS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
    
