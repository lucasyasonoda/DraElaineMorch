import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { getAllBlogPosts, getBlogPostsByCategory } from '@/content/site'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PageHero } from '@/components/site/PageHero'
import { CTASection } from '@/components/site/CTASection'
import { BackToTop } from '@/components/site/BackToTop'
import blogHeroImg from '@/assets/hero-home.jpg'

export const Route = createFileRoute('/blog/')({
  meta: () => [
    { title: 'Blog - Dra. Elaine Morch' },
    {
      name: 'description',
      content: 'Artigos sobre saúde íntima, hormonal e bem-estar feminino. Leia dicas e informações da Dra. Elaine Morch.',
    },
  ],
  component: RouteComponent,
})

type Category = 'todos' | 'educacional' | 'novidades' | 'bem-estar'

function RouteComponent() {
  const [activeCategory, setActiveCategory] = useState<Category>('todos')

  const allPosts = getAllBlogPosts()
  const filteredPosts =
    activeCategory === 'todos'
      ? allPosts
      : getBlogPostsByCategory(activeCategory as 'educacional' | 'novidades' | 'bem-estar')

  const categories: { id: Category; label: string }[] = [
    { id: 'todos', label: 'Todos os artigos' },
    { id: 'educacional', label: 'Educacional' },
    { id: 'novidades', label: 'Novidades' },
    { id: 'bem-estar', label: 'Bem-estar' },
  ]

  // Get featured post (first post if sorting by date)
  const featuredPost = allPosts.length > 0 ? allPosts[0] : null

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="Blog"
        title="Conhecimento e Bem-estar"
        subtitle="Artigos, dicas e informações sobre saúde íntima, hormonal e qualidade de vida"
        image={blogHeroImg}
      />

      {/* Featured Post Section */}
      {featuredPost && (
        <section className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Destaque</h2>
            <p className="text-muted-foreground">Confira nosso artigo mais recente</p>
          </div>
          
          <Link to={`/blog/${featuredPost.slug}`} className="group">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="relative overflow-hidden bg-secondary h-64 md:h-full">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary">{featuredPost.categoryLabel}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {new Date(featuredPost.date).toLocaleDateString('pt-BR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-3">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground text-lg line-clamp-2">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <span className="text-base font-semibold text-primary group-hover:underline">
                      Ler artigo completo →
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </section>
      )}

      {/* Filter Section */}
      <section className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Todos os artigos</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(cat.id)}
                className={activeCategory === cat.id ? 'bg-foreground text-background' : ''}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group"
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                  {/* Image */}
                  <div className="relative overflow-hidden bg-secondary h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-40">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {post.categoryLabel}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                        })}
                      </span>
                    </div>

                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-2 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="mt-4 pt-4 border-t border-border">
                      <span className="text-sm font-semibold text-primary hover:underline">
                        Ler artigo →
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              Nenhum artigo encontrado nesta categoria.
            </p>
            <Button onClick={() => setActiveCategory('todos')} variant="outline">
              Ver todos os artigos
            </Button>
          </div>
        )}
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto bg-secondary/30 rounded-lg mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Dúvidas ou sugestões?</h2>
          <p className="text-muted-foreground mb-8">
            Tem um tema específico que gostaria de ver abordado no blog? Agende uma consulta com a Dra. Elaine Morch e aproveite para discutir seus questionamentos.
          </p>
          <Button size="lg" asChild>
            <a href="/#contato">Agendar Consulta</a>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <BackToTop />
    </div>
  )
}
