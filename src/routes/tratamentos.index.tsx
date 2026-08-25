import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/content/site";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/tratamentos/")({
  head: () => ({
    meta: [
      { title: "Tratamentos — Dra. Elaine Morch" },
      {
        name: "description",
        content:
          "Estética íntima e saúde hormonal: conheça as áreas de atuação da Dra. Elaine Morch em Sorocaba.",
      },
      { property: "og:title", content: "Tratamentos — Dra. Elaine Morch" },
      {
        property: "og:description",
        content: "Estética íntima e saúde hormonal em Sorocaba.",
      },
      { property: "og:url", content: "/tratamentos" },
    ],
    links: [{ rel: "canonical", href: "/tratamentos" }],
  }),
  component: TratamentosHub,
});

function TratamentosHub() {
  return (
    <>
      <PageHero
        overline="Tratamentos"
        title={
          <>
            Duas frentes de cuidado em <span className="gold-italic">estética íntima</span> e{" "}
            <span className="gold-italic">saúde hormonal</span>.
          </>
        }
        lead="Cada área reúne um conjunto de tratamentos pensados para diferentes fases e necessidades. Explore o que está incluído em cada uma e entenda quando faz sentido agendar uma consulta."
      />

      <section className="container-edit py-16 md:py-24 space-y-6">
        {CATEGORIES.map((cat, i) => (
          <Link
            key={cat.slug}
            to="/tratamentos/$categoria"
            params={{ categoria: cat.slug }}
            className="group block border border-border hover:border-foreground transition p-8 md:p-12"
          >
            <div className="grid md:grid-cols-[100px_1fr_auto] gap-6 md:gap-12 items-start">
              <div className="font-serif text-4xl font-semibold" style={{ color: "var(--gold)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h2 className="card-title group-hover:text-[color:var(--gold)] transition">
                  {cat.title}
                </h2>
                <p className="text-muted-foreground mt-4 leading-relaxed max-w-2xl">{cat.lead}</p>
              </div>
              <ArrowRight className="hidden md:block group-hover:translate-x-2 transition mt-3" />
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
