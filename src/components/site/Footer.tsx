import { Link } from "@tanstack/react-router";
import { CATEGORIES, getTreatmentsByCategory, SITE } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32 bg-secondary/40" id="contato-footer">
      <div className="container-edit py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="font-serif text-xl">Dra. Elaine Morch</div>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
            Estética íntima, menopausa e reposição hormonal em {SITE.city}. Ciência, acolhimento e
            escuta ativa em cada etapa do seu cuidado.
          </p>
        </div>

        {CATEGORIES.map((cat) => (
          <div key={cat.slug}>
            <div className="eyebrow mb-4">{cat.navLabel}</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {getTreatmentsByCategory(cat.slug).map((t) => (
                <li key={t.slug}>
                  <Link
                    to="/tratamentos/$categoria/$slug"
                    params={{ categoria: cat.slug, slug: t.slug }}
                    className="hover:text-foreground"
                  >
                    {t.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <div className="eyebrow mb-4">Contato</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>{SITE.city}</li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-foreground">
                {SITE.email}
              </a>
            </li>
            <li>
              <a href="/#contato" className="hover:text-foreground">
                Agendar consulta
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-edit py-6 text-xs text-muted-foreground flex flex-wrap justify-between gap-4">
          <span>
            © {new Date().getFullYear()} Dra. Elaine Morch — {SITE.city}. Todos os direitos
            reservados.
          </span>
          <span>Conteúdo informativo; não substitui consulta médica.</span>
        </div>
      </div>
    </footer>
  );
}
