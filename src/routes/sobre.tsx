import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Stethoscope, BookOpen, Star } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { useReveal } from "@/hooks/use-reveal";
import sobreImg from "@/assets/sobre-dra-elaine.jpg";
import heroImg from "@/assets/hero-home.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Dra. Elaine Morch | Ginecologista em Sorocaba" },
      {
        name: "description",
        content:
          "Conheça a Dra. Elaine Morch: ginecologista especializada em estética íntima e saúde hormonal em Sorocaba. CRM-SP 155360 | RQE 69808.",
      },
      {
        property: "og:title",
        content: "Sobre a Dra. Elaine Morch | Ginecologista em Sorocaba",
      },
      {
        property: "og:description",
        content:
          "Medicina com escuta. Tratamento com propósito. Conheça a formação e trajetória da Dra. Elaine Morch.",
      },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

const FORMACAO = [
  {
    titulo: "Graduação em Medicina",
    detalhe: "Universidade de Passo Fundo (UPF) — Passo Fundo, RS",
  },
  {
    titulo: "Residência Médica em Ginecologia e Obstetrícia",
    detalhe: "Hospital Materno Infantil Presidente Vargas (HMIPV) — Porto Alegre, RS",
  },
  {
    titulo: "Pós-Graduação em Endocrinologia",
    detalhe: "Faculdade de Ciências Médicas de Minas Gerais",
  },
  {
    titulo: "Especialista em Estética Íntima",
    detalhe: "",
  },
  {
    titulo: "Especialista em Menopausa e Climatério",
    detalhe: "",
  },
  {
    titulo: "Pós-Graduação em Nutrição Esportiva",
    detalhe: "",
  },
  {
    titulo: "Especialização em Biopuntura e Tratamento de Dor Crônica",
    detalhe: "",
  },
];

const MEMBROS = [
  "Membro da Associação Médica Brasileira de Ortomolecular",
  "Membro da Federação Brasileira de Ginecologia e Obstetrícia (FEBRASGO)",
];

function SobrePage() {
  const bioRef = useReveal<HTMLDivElement>();
  const formacaoRef = useReveal<HTMLDivElement>();
  const membrosRef = useReveal<HTMLDivElement>();

  return (
    <div className="bg-background">
      {/* HERO EDITORIAL COM FOTO INTEIRA (SEM CORTES) */}
      <section className="container-edit pt-4 md:pt-8">
        <div
          className="grid lg:grid-cols-[minmax(300px,0.85fr)_minmax(460px,1.35fr)] overflow-hidden border border-border"
          style={{ background: "var(--ink)" }}
        >
          {/* Coluna da Imagem: Exibe a foto inteira sem cortar */}
          <div className="flex items-center justify-center bg-[var(--ink)] p-6 md:p-10 order-1">
            <div className="relative w-full max-w-[380px] mx-auto flex items-center justify-center">
              <img
                src={sobreImg}
                alt="Dra. Elaine Morch — Médica Ginecologista"
                className="w-full h-auto max-h-[520px] object-contain shadow-2xl"
              />
            </div>
          </div>

          {/* Coluna de Texto Hero */}
          <div className="relative flex items-center overflow-hidden order-2 px-8 md:px-14 py-12 md:py-16">
            <span
              className="hidden md:block absolute right-[-5%] top-[-18%] font-serif italic leading-none pointer-events-none select-none"
              style={{ color: "rgba(221,217,206,.06)", fontSize: "min(40vw, 36rem)" }}
              aria-hidden="true"
            >
              e
            </span>
            <div className="relative z-10 max-w-[40rem]">
              <p className="eyebrow" style={{ color: "var(--gold-light, #d4b483)" }}>
                Sobre a Dra. Elaine
              </p>
              <h1
                className="mt-4"
                style={{
                  color: "var(--cream-soft)",
                  fontSize: "clamp(2.1rem, 3.8vw, 3.4rem)",
                  lineHeight: 1.1,
                }}
              >
                Medicina com escuta.{" "}
                <em
                  className="block gold-italic"
                  style={{ fontStyle: "italic", color: "var(--cream-soft)" }}
                >
                  Tratamento com propósito.
                </em>
              </h1>
              <p
                className="mt-6"
                style={{ color: "rgba(241,239,234,.88)", fontSize: "1.05rem", lineHeight: 1.6 }}
              >
                A Dra. Elaine Morch dedica sua atuação a um campo onde ciência e
                sensibilidade precisam caminhar juntas. Com formação especializada
                em ginecologia estética e medicina hormonal, ela atende mulheres
                que buscam qualidade de vida, autoestima e bem-estar — não apenas
                tratamento de sintomas.
              </p>

              {/* Credenciais em destaque no Hero */}
              <div
                className="mt-8 pt-6 border-t flex flex-wrap items-center gap-6"
                style={{ borderColor: "rgba(221,217,206,.2)" }}
              >
                <div className="flex items-center gap-2.5">
                  <Stethoscope size={18} style={{ color: "var(--gold-light, #d4b483)" }} />
                  <span
                    className="text-xs uppercase tracking-widest font-semibold"
                    style={{ color: "var(--cream-soft)" }}
                  >
                    Médica Ginecologista · Membro da FEBRASGO
                  </span>
                </div>
                <div className="flex items-center gap-5 text-xs tracking-widest uppercase">
                  <span style={{ color: "var(--cream)" }}>
                    <strong style={{ color: "var(--gold-light, #d4b483)" }}>CRM-SP:</strong> 155360
                  </span>
                  <span style={{ color: "var(--cream)" }}>
                    <strong style={{ color: "var(--gold-light, #d4b483)" }}>RQE:</strong> 69808
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CITAÇÃO E SEGUNDA FOTO COMPLETA */}
      <section className="container-edit py-16 md:py-24">
        <div ref={bioRef.ref} className={`${bioRef.className} grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-center`}>
          <div>
            <div className="eyebrow hairline">Propósito e Atendimento</div>
            <blockquote
              className="mt-6 border-l-4 pl-6 md:pl-8 py-2"
              style={{ borderColor: "var(--gold)" }}
            >
              <p
                className="font-serif italic text-2xl md:text-3xl leading-relaxed"
                style={{ color: "var(--ink)" }}
              >
                "Cada paciente tem uma história diferente. Meu trabalho é entender
                a sua e construir o cuidado certo para você."
              </p>
              <footer
                className="mt-4 text-xs uppercase tracking-widest font-semibold"
                style={{ color: "var(--gold-dark)" }}
              >
                — Dra. Elaine Morch
              </footer>
            </blockquote>

            <p className="mt-8 body-copy text-muted-foreground leading-relaxed">
              O atendimento é focado em compreender as particularidades de cada fase da vida da mulher,
              oferecendo suporte individualizado em saúde íntima, equilíbrio hormonal e tratamentos modernos
              com total discrição, segurança e respeito.
            </p>
          </div>

          {/* Segunda foto também inteira (object-contain) sem cortes */}
          <div className="flex justify-center">
            <div
              className="p-4 border border-border bg-card shadow-sm w-full max-w-[340px] flex items-center justify-center"
              style={{ background: "var(--cream-soft)" }}
            >
              <img
                src={heroImg}
                alt="Dra. Elaine Morch no consultório"
                className="w-full h-auto max-h-[440px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FORMAÇÃO E ESPECIALIZAÇÕES COMPLETA (SEM CORTES) */}
      <section
        className="border-y border-border"
        style={{ background: "var(--cream-soft)" }}
      >
        <div className="container-edit py-20 md:py-24">
          <div ref={formacaoRef.ref} className={formacaoRef.className}>
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap size={24} style={{ color: "var(--gold)" }} />
              <div className="eyebrow hairline">Formação e Especializações</div>
            </div>

            <ol className="relative border-l-2 ml-2 md:ml-3" style={{ borderColor: "var(--gold)" }}>
              {FORMACAO.map((item, i) => (
                <li
                  key={i}
                  className={`pl-6 md:pl-8 relative ${i < FORMACAO.length - 1 ? "pb-8" : "pb-2"}`}
                >
                  <span
                    className="absolute -left-[9px] top-1.5 block w-4 h-4 rounded-full"
                    style={{ background: "var(--gold)" }}
                  />
                  <h3 className="card-title text-base md:text-lg" style={{ color: "var(--ink)" }}>
                    {item.titulo}
                  </h3>
                  {item.detalhe ? (
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {item.detalhe}
                    </p>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ENTIDADES E SOCIEDADES */}
      <section className="container-edit py-16 md:py-20">
        <div ref={membrosRef.ref} className={membrosRef.className}>
          <div className="flex items-center gap-3 mb-10">
            <BookOpen size={20} style={{ color: "var(--gold)" }} />
            <div className="eyebrow hairline">Entidades e Sociedades</div>
          </div>
          <ul className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {MEMBROS.map((membro, i) => (
              <li
                key={i}
                className="flex items-start gap-3 border border-border bg-card p-6"
              >
                <Star
                  size={16}
                  className="mt-1 shrink-0"
                  style={{ color: "var(--gold)" }}
                />
                <span className="text-sm leading-relaxed font-medium">{membro}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA FINAL */}
      <CTASection
        title="Agende sua consulta com a Dra. Elaine."
        text="Presencial em Sorocaba ou online. Cada atendimento é personalizado, com tempo e escuta dedicados a você."
      />
    </div>
  );
}
