import { createFileRoute, Link } from '@tanstack/react-router'
import { getBlogPost, getAllBlogPosts } from '@/content/site'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CTASection } from '@/components/site/CTASection'
import { BackToTop } from '@/components/site/BackToTop'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/blog/$slug')({
  component: RouteComponent,
  notFoundComponent: NotFoundComponent,
})

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
        <p className="text-muted-foreground mb-8">
          Desculpe, o artigo que você está procurando não existe.
        </p>
        <Link to="/blog" className="inline-block">
          <Button>Voltar ao Blog</Button>
        </Link>
      </div>
    </div>
  )
}

function RouteComponent() {
  const { slug } = Route.useParams()
  const post = getBlogPost(slug)
  const allPosts = getAllBlogPosts()

  if (!post) {
    return <NotFoundComponent />
  }

  const currentIndex = allPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Link */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 py-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-4">
            <ArrowLeft size={16} />
            Voltar ao Blog
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        {/* Meta Information */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary">{post.categoryLabel}</Badge>
            <span className="text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString('pt-BR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-lg text-muted-foreground">{post.excerpt}</p>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="relative overflow-hidden rounded-lg mb-12 bg-secondary h-96">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-neutral max-w-none mb-12 text-foreground">
          <div
            className="[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-base [&_p]:leading-7 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:ml-6 [&_ol]:list-decimal [&_ol]:ml-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Author Info */}
        <div className="border-t border-b border-border py-8 mb-12 bg-secondary/30 px-6 rounded-lg">
          <p className="text-sm font-semibold text-muted-foreground mb-2">Escrito por</p>
          <p className="text-lg font-semibold">{post.author}</p>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {prevPost ? (
            <Link to={`/blog/${prevPost.slug}`} className="group">
              <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <p className="text-xs font-semibold text-muted-foreground mb-2">← Artigo anterior</p>
                <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                  {prevPost.title}
                </h3>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextPost ? (
            <Link to={`/blog/${nextPost.slug}`} className="group">
              <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors md:text-right">
                <p className="text-xs font-semibold text-muted-foreground mb-2">Próximo artigo →</p>
                <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                  {nextPost.title}
                </h3>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </article>

      {/* CTA Section */}
      <CTASection />

      <BackToTop />
    </div>
  )
}
