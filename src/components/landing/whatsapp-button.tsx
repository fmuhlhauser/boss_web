import { WhatsappIcon } from '@/components/icons/whatsapp-icon';

type WhatsappButtonProps = {
  phoneNumber: string;
  message?: string;
};

export default function WhatsappButton({
  phoneNumber,
  message = 'Hola, me gustaría solicitar más información.',
}: WhatsappButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
    >
      <WhatsappIcon className="h-8 w-8" />
    </a>
  );
}
