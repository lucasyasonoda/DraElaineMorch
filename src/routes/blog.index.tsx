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

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="Blog"
        title="Conhecimento e Bem-estar"
        subtitle="Artigos, dicas e informações sobre saúde íntima, hormonal e qualidade de vida"
        image={blogHeroImg}
      />

      {/* Filter Section */}
      <section className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center">
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

      {/* CTA Section */}
      <CTASection />

      <BackToTop />
    </div>
  )
}
