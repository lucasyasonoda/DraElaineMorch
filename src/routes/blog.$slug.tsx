import { createFileRoute, Link } from "@tanstack/react-router";
import { getBlogPost, getAllBlogPosts } from "@/content/site";
import { CTASection } from "@/components/site/CTASection";
import { BackToTop } from "@/components/site/BackToTop";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  component: RouteComponent,
  notFoundComponent: NotFoundComponent,
});

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="eyebrow">Erro</div>
        <h1 className="page-title mt-4">Artigo não encontrado</h1>
        <p className="text-muted-foreground mt-4">
          O artigo que você procura não existe ou foi movido.
        </p>
        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-xs tracking-widest uppercase"
        >
          Voltar ao blog
        </Link>
      </div>
    </div>
  );
}

function RouteComponent() {
  const { slug } = Route.useParams();
  const post = getBlogPost(slug);
  const allPosts = getAllBlogPosts();

  if (!post) {
    return <NotFoundComponent />;
  }

  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <div className="bg-background">
      {/* Voltar */}
      <div className="border-b border-border">
        <div className="container-edit py-5">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft size={14} />
            Voltar ao blog
          </Link>
        </div>
      </div>

      <article className="container-edit">
        {/* Cabeçalho do artigo */}
        <header className="max-w-3xl mx-auto pt-14 md:pt-20">
          <p className="service-label">{post.categoryLabel}</p>
          <h1
            className="mt-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 500,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              textWrap: "balance",
            }}
          >
            {post.title}
          </h1>
          <p className="editorial-lead italic text-muted-foreground mt-6">{post.excerpt}</p>
          <p className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">
            {post.author} ·{" "}
            {new Date(`${post.date}T12:00:00`).toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </header>

        {/* Imagem de abertura */}
        {post.image && (
          <div className="relative overflow-hidden bg-secondary mt-10 md:mt-14 h-72 md:h-[480px]">
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        )}

        {/* Corpo do artigo */}
        <div
          className="max-w-2xl mx-auto py-14 md:py-20 [&_h3]:font-serif [&_h3]:text-2xl [&_h3]:md:text-[1.75rem] [&_h3]:font-medium [&_h3]:leading-snug [&_h3]:mt-12 [&_h3]:mb-4 [&_p]:text-[1.0625rem] [&_p]:leading-[1.8] [&_p]:mb-5 [&_p]:text-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:marker:text-[color:var(--gold)] [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:marker:text-[color:var(--gold)] [&_strong]:font-semibold [&_a]:underline [&_a]:underline-offset-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Assinatura */}
        <div className="max-w-2xl mx-auto border-t py-10" style={{ borderColor: "var(--gold)" }}>
          <p className="eyebrow">Escrito por</p>
          <p className="card-title mt-3">{post.author}</p>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Ginecologista em Sorocaba, com atendimento presencial e online em estética íntima e
            saúde hormonal.
          </p>
        </div>

        {/* Navegação entre artigos */}
        <nav className="max-w-2xl mx-auto grid gap-4 md:grid-cols-2 pb-20">
          {prevPost ? (
            <Link
              to="/blog/$slug"
              params={{ slug: prevPost.slug }}
              className="group border border-border p-6 transition hover:border-foreground"
            >
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <ArrowLeft size={13} /> Artigo anterior
              </p>
              <h3 className="font-serif text-lg font-medium mt-3 leading-snug group-hover:text-[color:var(--gold)] transition line-clamp-2">
                {prevPost.title}
              </h3>
            </Link>
          ) : null}

          {nextPost ? (
            <Link
              to="/blog/$slug"
              params={{ slug: nextPost.slug }}
              className={`group border border-border p-6 transition hover:border-foreground ${
                prevPost ? "md:text-right" : ""
              }`}
            >
              <p
                className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground ${
                  prevPost ? "md:justify-end" : ""
                }`}
              >
                Próximo artigo <ArrowRight size={13} />
              </p>
              <h3 className="font-serif text-lg font-medium mt-3 leading-snug group-hover:text-[color:var(--gold)] transition line-clamp-2">
                {nextPost.title}
              </h3>
            </Link>
          ) : null}
        </nav>
      </article>

      {/* CTA Section */}
      <CTASection
        title="Pronta para cuidar de você?"
        text="Agende uma consulta com a Dra. Elaine Morch e converse sobre o que você está sentindo — com calma, privacidade e sem julgamentos."
      />

      <BackToTop />
    </div>
  );
}
