import { MessageCircle } from "lucide-react";
import { SITE } from "@/content/site";
import { trackWhatsappClick } from "@/lib/analytics";

// ⏳ Enquanto SITE.whatsapp estiver vazio, o botão leva até a seção de contato —
// exatamente como no site anterior. Assim que houver um número definitivo, basta
// preencher SITE.whatsapp em src/content/site.ts que o link passa a abrir o WhatsApp direto.
export function WhatsappFloatButton() {
  const href = SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}` : "/#contato";

  return (
    <a
      href={href}
      target={SITE.whatsapp ? "_blank" : undefined}
      rel={SITE.whatsapp ? "noreferrer" : undefined}
      aria-label="Fale pelo WhatsApp"
      onClick={() => trackWhatsappClick("float_button")}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105 hover:bg-[#20bd5a]"
    >
      <MessageCircle size={26} fill="currentColor" className="text-white" />
    </a>
  );
}
