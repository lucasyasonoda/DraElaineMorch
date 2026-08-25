import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getCategory, getTreatmentsByCategory, HOME_IMAGES } from "@/content/site";
import { PageHero } from "@/components/site/PageHero";
import { FaqSection } from "@/components/site/FaqSection";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/tratamentos/$categoria/")({
  loader: ({ params }) => {
    const category = getCategory(params.categoria);
    if (!category) throw notFound();
    return { category, treatments: getTreatmentsByCategory(params.categoria) };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.category;
    if (!c) return { meta: [{ title: "Categoria não encontrada" }] };
    return {
      meta: [
        { title: c.metaTitle },
        { name: "description", content: c.metaDescription },
        { property: "og:title", content: c.metaTitle },
        { property: "og:description", content: c.metaDescription },
        { property: "og:url", content: `/tratamentos/${c.slug}` },
      ],
      links: [{ rel: "canonical", href: `/tratamentos/${c.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="container-edit py-32 text-center">
      <h1 className="page-title">Categoria não encontrada</h1>
      <Link
        to="/tratamentos"
        className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-widest"
      >
        <ArrowLeft size={14} /> Ver tratamentos
      </Link>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category, treatments } = Route.useLoaderData();

  return (
    <>
      <PageHero
        overline={category.eyebrow}
        title={category.heroTitle}
        lead={category.lead}
        image={category.image}
        breadcrumb={
          <>
            <Link to="/" className="hover:text-foreground">
              Início
            </Link>{" "}
            / <span className="text-foreground">{category.title}</span>
          </>
        }
      />

      <section className="container-edit py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow hairline">Nossos tratamentos</div>
          <h2 className="section-title mt-6">Escolha o cuidado ideal para o seu momento</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border mt-14">
          {treatments.map((t) => (
            <Link
              key={t.slug}
              to="/tratamentos/$categoria/$slug"
              params={{ categoria: category.slug, slug: t.slug }}
              className="group bg-background flex flex-col"
            >
              <div
                className="h-44 bg-cover bg-center"
                style={{ backgroundImage: `url(${t.image})` }}
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="card-title group-hover:text-[color:var(--gold)] transition">
                  {t.navLabel}
                </h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">
                  {t.cardDescription}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-widest">
                  Saiba mais →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary/30 border-y border-border">
        <div className="container-edit py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div
            className="h-72 md:h-96 bg-cover bg-center order-2 md:order-1"
            style={{ backgroundImage: `url(${HOME_IMAGES.sobre})` }}
          />
          <div className="order-1 md:order-2">
            <div className="eyebrow hairline">Por que escolher a Dra. Elaine</div>
            <h2 className="section-title mt-6">Um cuidado que une técnica e escuta</h2>
            <p className="lead-copy text-muted-foreground mt-5">
              Cada mulher chega ao consultório com uma história e uma necessidade diferente. A
              avaliação é sempre individual, sem protocolos genéricos — e sem julgamentos sobre suas
              escolhas.
            </p>
            <blockquote
              className="font-serif italic text-lg mt-6 border-l-2 pl-5"
              style={{ borderColor: "var(--gold)" }}
            >
              "Meu compromisso é que você se sinta ouvida antes de qualquer indicação de
              tratamento."
            </blockquote>
          </div>
        </div>
      </section>

      <FaqSection items={category.faq} />

      <CTASection
        title="Pronta para cuidar de você com quem entende do assunto?"
        text={`Agende uma consulta com a Dra. Elaine em Sorocaba e converse abertamente sobre suas necessidades.`}
      />
    </>
  );
}
