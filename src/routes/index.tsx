import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CATEGORIES, HOME_IMAGES, SITE } from "@/content/site";
import { ShortVideoPlayer } from "@/components/site/ShortVideoPlayer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Elaine Morch | Ginecologista em Sorocaba" },
      {
        name: "description",
        content:
          "Dra. Elaine Morch: cuidado individualizado em estética íntima e saúde hormonal, em Sorocaba.",
      },
      { property: "og:title", content: "Dra. Elaine Morch | Ginecologista em Sorocaba" },
      {
        property: "og:description",
        content: "Cuidado especializado em estética íntima e saúde hormonal, em Sorocaba.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const stats = useReveal();
  const areasHead = useReveal<HTMLDivElement>();
  const videoHead = useReveal<HTMLDivElement>();
  const sobreHead = useReveal<HTMLDivElement>();
  const ctaSection = useReveal<HTMLDivElement>();

  return (
    <>
      {/* HERO EDITORIAL */}
      <section className="container-edit pt-0">
        <div
          className="grid lg:grid-cols-[minmax(280px,0.83fr)_minmax(480px,1.42fr)] lg:aspect-[2/1] overflow-hidden"
          style={{ background: "var(--ink)" }}
        >
          <div
            className="min-h-[340px] lg:min-h-0 bg-cover bg-[center_24%] order-1"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(36,34,47,.38), transparent 36%), url(${HOME_IMAGES.hero})`,
            }}
            role="img"
            aria-label="Retrato da Dra. Elaine Morch"
          />
          <div className="relative flex items-center overflow-hidden order-2 px-8 md:px-16 py-16 md:py-20">
            <span
              className="hidden md:block absolute right-[-8%] top-[-24%] font-serif italic leading-none pointer-events-none select-none"
              style={{ color: "rgba(221,217,206,.08)", fontSize: "min(52vw, 50rem)" }}
              aria-hidden="true"
            >
              e
            </span>
            <div className="relative z-10 max-w-[42rem]">
              <p className="eyebrow" style={{ color: "var(--cream-soft)" }}>
                Ginecologista em Sorocaba
              </p>
              <h1
                className="mt-6"
                style={{
                  color: "var(--cream-soft)",
                  fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                  lineHeight: 1,
                }}
              >
                Cuidado especializado em{" "}
                <em
                  className="block gold-italic"
                  style={{ fontStyle: "italic", color: "var(--cream-soft)" }}
                >
                  estética íntima
                </em>{" "}
                e saúde hormonal
              </h1>
              <p
                className="mt-6 max-w-[34rem]"
                style={{ color: "rgba(241,239,234,.87)", fontSize: "1.1rem", lineHeight: 1.5 }}
              >
                A Dra. Elaine Morch une ciência, escuta e delicadeza para acompanhar você em cada
                fase da vida — com tratamentos personalizados e sem julgamentos.
              </p>
              <p
                className="mt-8 text-[.72rem] font-bold uppercase"
                style={{ color: "var(--cream)", letterSpacing: ".18em" }}
              >
                Atendimento presencial e online
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-5 py-3.5 text-[.68rem] font-bold uppercase tracking-widest transition"
                  style={{ background: "var(--cream)", color: "var(--ink)" }}
                >
                  Agendar consulta
                </a>
                <Link
                  to="/tratamentos"
                  className="inline-flex items-center gap-2 px-5 py-3.5 border text-[.68rem] font-bold uppercase tracking-widest transition"
                  style={{ borderColor: "rgba(221,217,206,.8)", color: "var(--cream-soft)" }}
                >
                  Conhecer tratamentos <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container-edit -mt-16 relative z-10 pt-8 md:pt-12" ref={stats.ref}>
        <div className={`${stats.className} max-w-[74%] mx-auto`}>
          <ul
            className="grid grid-cols-3 gap-2 md:gap-6 py-4 md:py-5 px-4 md:px-8"
            style={{ background: "var(--cream)" }}
          >
            {[
              { n: "+10", l: "tratamentos especializados" },
              { n: "2", l: "áreas de atuação dedicadas" },
              { n: "100%", l: "cuidado individualizado" },
            ].map((s) => (
              <li
                key={s.l}
                className="text-center border-r last:border-r-0"
                style={{ borderColor: "rgba(55,61,83,.25)" }}
              >
                <strong
                  className="block font-serif font-normal leading-none"
                  style={{ color: "var(--navy)", fontSize: "clamp(1.8rem, 3.2vw, 3.1rem)" }}
                >
                  {s.n}
                </strong>
                <span
                  className="block max-w-[150px] mx-auto mt-2 text-[.72rem] font-semibold leading-tight"
                  style={{ color: "var(--navy)" }}
                >
                  {s.l}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}
      <section className="container-edit py-24 md:py-32" id="tratamentos">
        <div ref={areasHead.ref} className={areasHead.className}>
          <div className="eyebrow hairline">Áreas de atuação</div>
          <h2 className="section-title mt-6 max-w-xl">
            Um cuidado completo, <span className="gold-italic">pensado para você.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat.slug}
              to="/tratamentos/$categoria"
              params={{ categoria: cat.slug }}
              className="group block border border-border hover:border-foreground transition p-8 md:p-10"
            >
              <p className="font-serif text-3xl font-semibold" style={{ color: "var(--gold)" }}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="card-title mt-4 group-hover:text-[color:var(--gold)] transition">
                {cat.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                {cat.homeCardDescription}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest">
                {cat.homeCardCta}{" "}
                <ArrowRight size={12} className="group-hover:translate-x-1 transition" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* VÍDEO EM DESTAQUE */}
      <section className="border-y border-border bg-secondary/25" id="video">
        <div className="container-edit py-20 md:py-24 grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div ref={videoHead.ref} className={videoHead.className}>
            <div className="eyebrow hairline">Conteúdo em vídeo</div>
            <h2 className="section-title mt-6">
              Informação clara, em <span className="gold-italic">poucos minutos.</span>
            </h2>
            <p className="editorial-lead italic text-muted-foreground mt-5">
              Um espaço para conteúdos curtos da Dra. Elaine sobre saúde íntima, menopausa e
              bem-estar.
            </p>
            <span className="text-xs uppercase tracking-widest text-muted-foreground mt-4 inline-block">
              Clique no play para assistir
            </span>
          </div>
          {/* Para publicar um vídeo, troque a URL abaixo por um link de Short do YouTube. */}
          <ShortVideoPlayer
            url="https://www.youtube.com/shorts/LmyqNjPR66Y"
            title="Vídeo da Dra. Elaine"
          />
        </div>
      </section>

      {/* A CONSULTA */}
      <section className="container-edit py-24 md:py-32" id="sobre">
        <div ref={sobreHead.ref} className={sobreHead.className}>
          <div className="eyebrow hairline">A consulta</div>
          <h2 className="section-title mt-6 max-w-xl">
            Escuta atenta. Informação clara. <span className="gold-italic">Um plano só seu.</span>
          </h2>
        </div>

        <ol className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              n: "01",
              t: "Entendemos sua história, sintomas e objetivos com tempo e acolhimento.",
            },
            {
              n: "02",
              t: "Conversamos sobre as possibilidades de cuidado com clareza e segurança.",
            },
            { n: "03", t: "Definimos um plano personalizado, respeitando o seu momento." },
          ].map((step) => (
            <li key={step.n} className="border-t pt-6" style={{ borderColor: "var(--gold)" }}>
              <span
                className="font-serif text-3xl font-semibold block"
                style={{ color: "var(--gold)" }}
              >
                {step.n}
              </span>
              <p className="text-muted-foreground mt-4 leading-relaxed">{step.t}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA FINAL */}
      <section
        className="py-24 md:py-32 text-center"
        style={{ background: "var(--ink)" }}
        id="contato"
        ref={ctaSection.ref}
      >
        <div className={`container-edit ${ctaSection.className}`}>
          <div className="eyebrow" style={{ color: "var(--gold-light, #d4b483)" }}>
            Vamos conversar
          </div>
          <h2
            className="section-title mt-6 max-w-2xl mx-auto"
            style={{ color: "var(--cream-soft)" }}
          >
            Seu bem-estar começa com uma conversa.
          </h2>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center px-8 py-4 text-xs tracking-widest uppercase"
            style={{ background: "var(--cream)", color: "var(--ink)" }}
          >
            Agendar minha consulta
          </a>
        </div>
      </section>
    </>
  );
}
