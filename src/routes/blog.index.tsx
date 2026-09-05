import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { getAllBlogPosts, getBlogPostsByCategory } from "@/content/site";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { BackToTop } from "@/components/site/BackToTop";
import { useReveal } from "@/hooks/use-reveal";
import { ArrowRight } from "lucide-react";
import blogHeroImg from "@/assets/hero-home.jpg";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Dra. Elaine Morch" },
      {
        name: "description",
        content:
          "Artigos sobre saúde íntima, hormonal e bem-estar feminino. Leia dicas e informações da Dra. Elaine Morch.",
      },
      { property: "og:title", content: "Blog — Dra. Elaine Morch" },
      {
        property: "og:description",
        content:
          "Artigos sobre saúde íntima, hormonal e bem-estar feminino, escritos pela Dra. Elaine Morch.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: RouteComponent,
});

type Category = "todos" | "educacional" | "novidades" | "bem-estar";

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "educacional", label: "Educacional" },
  { id: "novidades", label: "Novidades" },
  { id: "bem-estar", label: "Bem-estar" },
];

function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function RouteComponent() {
  const [activeCategory, setActiveCategory] = useState<Category>("todos");
  const featuredRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  const allPosts = getAllBlogPosts();
  const filteredPosts =
    activeCategory === "todos"
      ? allPosts
      : getBlogPostsByCategory(activeCategory as "educacional" | "novidades" | "bem-estar");

  const featuredPost = allPosts.length > 0 ? allPosts[0] : null;

  return (
    <div className="bg-background">
      <PageHero
        overline="Blog"
        title={
          <>
            Informação que cuida. <span className="gold-italic">Leitura que acolhe.</span>
          </>
        }
        lead="Artigos escritos pela Dra. Elaine sobre saúde íntima, hormonal e qualidade de vida — com linguagem clara e sem tabu."
        image={blogHeroImg}
      />

      {/* Artigo em destaque */}
      {featuredPost && (
        <section className="container-edit pt-16 md:pt-24" ref={featuredRef.ref}>
          <div className={featuredRef.className}>
            <div className="eyebrow hairline">Leitura recomendada</div>
            <Link
              to="/blog/$slug"
              params={{ slug: featuredPost.slug }}
              className="group block mt-10"
            >
              <div className="grid lg:grid-cols-2 border border-border bg-card">
                <div className="relative overflow-hidden bg-secondary min-h-[280px] lg:min-h-[440px]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-14">
                  <p className="service-label">{featuredPost.categoryLabel}</p>
                  <h2 className="card-title mt-5 group-hover:text-[color:var(--gold)] transition">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mt-5 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
                    {formatDate(featuredPost.date)} · {featuredPost.author}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest">
                    Ler artigo completo
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Lista de artigos */}
      <section className="container-edit py-20 md:py-28" ref={gridRef.ref}>
        <div className={gridRef.className}>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
            <div>
              <div className="eyebrow hairline">Todos os artigos</div>
              <p className="text-sm text-muted-foreground mt-4">
                {filteredPosts.length}{" "}
                {filteredPosts.length === 1 ? "artigo publicado" : "artigos publicados"}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const active = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-widest border transition"
                    style={
                      active
                        ? {
                            background: "var(--ink)",
                            color: "var(--cream-soft)",
                            borderColor: "var(--ink)",
                          }
                        : { borderColor: "var(--border)", color: "var(--muted-foreground)" }
                    }
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <ul className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, i) => (
                <li key={post.slug}>
                  <Link to="/blog/$slug" params={{ slug: post.slug }} className="group block">
                    <div className="relative overflow-hidden bg-secondary aspect-[4/3]">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading={i < 3 ? "eager" : "lazy"}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                    <p className="service-label mt-6">{post.categoryLabel}</p>
                    <h3 className="card-title mt-3 group-hover:text-[color:var(--gold)] transition">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                      {formatDate(post.date)}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="py-16 text-center">
              <p className="editorial-lead italic text-muted-foreground">
                Nenhum artigo publicado neste tema, por enquanto.
              </p>
              <button
                onClick={() => setActiveCategory("todos")}
                className="mt-6 inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-widest border border-border transition hover:border-foreground"
              >
                Ver todos os artigos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Convite */}
      <section className="border-y border-border" style={{ background: "var(--cream-soft)" }}>
        <div className="container-edit py-16 md:py-20 text-center max-w-2xl mx-auto">
          <div className="eyebrow">Ficou com alguma dúvida?</div>
          <h2 className="section-title mt-5">
            Cada história merece uma <span className="gold-italic">conversa própria.</span>
          </h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            Se um tema despertou alguma questão sobre a sua saúde, agende uma consulta e converse
            com a Dra. Elaine com calma e privacidade.
          </p>
          <a
            href="/#contato"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-widest transition"
            style={{ background: "var(--ink)", color: "var(--cream-soft)" }}
          >
            Agendar consulta <ArrowRight size={14} />
          </a>
        </div>
      </section>

      <CTASection
        title="Cuidar de você também é informação."
        text="Se algum tema despertou questões sobre a sua saúde, agende uma consulta e converse com a Dra. Elaine com calma e privacidade."
      />
      <BackToTop />
    </div>
  );
}
