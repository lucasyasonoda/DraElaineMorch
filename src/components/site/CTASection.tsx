import { SITE } from "@/content/site";

export function CTASection({ title, text }: { title: string; text?: string }) {
  return (
    <section className="text-background" style={{ backgroundColor: "#24222F" }}>
      <div className="container-edit py-16 md:py-20 text-center">
        <h2 className="section-title max-w-2xl mx-auto" style={{ color: "var(--cream-soft)" }}>
          {title}
        </h2>
        {text && (
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "rgba(241,239,234,.85)" }}>
            {text}
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-7 py-4 text-xs tracking-widest uppercase transition"
            style={{ background: "var(--cream)", color: "var(--ink)" }}
          >
            Agendar minha consulta
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-7 py-4 border text-xs tracking-widest uppercase transition"
            style={{ borderColor: "rgba(221,217,206,.8)", color: "var(--cream-soft)" }}
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
