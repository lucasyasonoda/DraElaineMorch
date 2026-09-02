import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { getCategory, getTreatment, getTreatmentsByCategory } from "@/content/site";
import { PageHero } from "@/components/site/PageHero";
import { FaqSection } from "@/components/site/FaqSection";
import { CTASection } from "@/components/site/CTASection";
import { ShortVideoPlayer } from "@/components/site/ShortVideoPlayer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/tratamentos/$categoria/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.categoria);
    const treatment = getTreatment(params.categoria, params.slug);
    if (!category || !treatment) throw notFound();
    return { category, treatment };
  },
  head: ({ loaderData }) => {
    const t = loaderData?.treatment;
    if (!t) return { meta: [{ title: "Tratamento não encontrado" }] };
    return {
      meta: [
        { title: t.metaTitle },
        { name: "description", content: t.metaDescription },
        { property: "og:title", content: t.metaTitle },
        { property: "og:description", content: t.metaDescription },
        { property: "og:url", content: `/tratamentos/${t.categorySlug}/${t.slug}` },
      ],
      links: [{ rel: "canonical", href: `/tratamentos/${t.categorySlug}/${t.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="container-edit py-32 text-center">
      <h1 className="page-title">Tratamento não encontrado</h1>
      <Link
        to="/tratamentos"
        className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-widest"
      >
        <ArrowLeft size={14} /> Ver tratamentos
      </Link>
    </div>
  ),
  component: TreatmentPage,
});

function TreatmentPage() {
  const { category, treatment } = Route.useLoaderData();
  const related = getTreatmentsByCategory(category.slug).filter((t) => t.slug !== treatment.slug);
  const videoHead = useReveal<HTMLDivElement>();

  return (
    <>
      <PageHero
        overline={treatment.eyebrow}
        title={treatment.title}
        lead={treatment.lead}
        image={treatment.image}
        breadcrumb={
          <>
            <Link to="/" className="hover:text-foreground">
              Início
            </Link>{" "}
            /{" "}
            <Link
              to="/tratamentos/$categoria"
              params={{ categoria: category.slug }}
              className="hover:text-foreground"
            >
              {category.title}
            </Link>{" "}
            / <span className="text-foreground">{treatment.navLabel}</span>
          </>
        }
      />

      {treatment.indicatedFor && (
        <section className="container-edit py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="eyebrow hairline">Para quem é indicado</div>
            <h2 className="section-title mt-6">Esse tratamento pode ser para você se…</h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 mt-10">
            {treatment.indicatedFor.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check size={18} className="mt-0.5 flex-none" style={{ color: "var(--gold)" }} />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {treatment.aboutIntro && (
        <section className="bg-secondary/30 border-y border-border">
          <div className="container-edit py-16 md:py-24">
            <div className="max-w-2xl">
              <div className="eyebrow hairline">Como funciona</div>
              <h2 className="section-title mt-6">O que você precisa saber</h2>
            </div>
            <div className="max-w-2xl mt-8 space-y-5">
              {treatment.aboutIntro.map((p, i) => (
                <p key={i} className="lead-copy text-foreground/90">
                  {p}
                </p>
              ))}
            </div>

            {treatment.steps && (
              <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
                {treatment.steps.map((step, i) => (
                  <li key={i}>
                    <div
                      className="font-serif text-2xl font-semibold"
                      style={{ color: "var(--gold)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="card-title mt-3 text-lg">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {step.body}
                    </p>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </section>
      )}

      {treatment.symptomGroups && (
        <section className="container-edit py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="eyebrow hairline">Sintomas mais comuns</div>
            <h2 className="section-title mt-6">Reconheça os sinais do climatério e da menopausa</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-border border border-border mt-10">
            {treatment.symptomGroups.map((group) => (
              <div key={group.title} className="bg-background p-8">
                <h3 className="card-title text-lg">{group.title}</h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check
                        size={15}
                        className="mt-0.5 flex-none"
                        style={{ color: "var(--gold)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {treatment.approach && (
        <section className="bg-secondary/30 border-y border-border">
          <div className="container-edit py-16 md:py-24">
            <div className="max-w-2xl">
              <div className="eyebrow hairline">Como a Dra. Elaine pode ajudar</div>
              <h2 className="section-title mt-6">Um cuidado que começa com escuta</h2>
            </div>
            <ul className="grid md:grid-cols-2 gap-4 mt-10 max-w-3xl">
              {treatment.approach.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={18} className="mt-0.5 flex-none" style={{ color: "var(--gold)" }} />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {treatment.results && (
        <section className="container-edit py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="eyebrow hairline">Resultados esperados</div>
            <h2 className="section-title mt-6">O que você pode esperar</h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 mt-10">
            {treatment.results.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check size={18} className="mt-0.5 flex-none" style={{ color: "var(--gold)" }} />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {treatment.videoUrl && (
        <section className="border-y border-border bg-secondary/25" id="video">
          <div className="container-edit py-20 md:py-24 grid md:grid-cols-[1fr_auto] gap-10 items-center">
            <div ref={videoHead.ref} className={videoHead.className}>
              <div className="eyebrow hairline">Conteúdo em vídeo</div>
              <h2 className="section-title mt-6">
                Informação clara, em <span className="gold-italic">poucos minutos.</span>
              </h2>
              <p className="editorial-lead italic text-muted-foreground mt-5">
                {treatment.videoDescription || `Um espaço para conteúdos curtos da Dra. Elaine sobre ${treatment.navLabel.toLowerCase()}.`}
              </p>
              <span className="text-xs uppercase tracking-widest text-muted-foreground mt-4 inline-block">
                Clique no play para assistir
              </span>
            </div>
            <ShortVideoPlayer url={treatment.videoUrl} title={treatment.navLabel} />
          </div>
        </section>
      )}

      <FaqSection items={treatment.faq} />

      <CTASection
        title="Tem dúvidas se esse procedimento é para você?"
        text="Agende uma consulta com a Dra. Elaine em Sorocaba e receba uma avaliação personalizada."
      />

      {related.length > 0 && (
        <section className="container-edit py-16 md:py-24">
          <div className="eyebrow">Outros tratamentos em {category.title}</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {related.map((t) => (
              <Link
                key={t.slug}
                to="/tratamentos/$categoria/$slug"
                params={{ categoria: category.slug, slug: t.slug }}
                className="border border-border p-6 hover:border-foreground transition"
              >
                <div className="font-serif text-lg">{t.navLabel}</div>
                <div className="text-xs text-muted-foreground mt-2 line-clamp-2">
                  {t.cardDescription}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
