import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { CATEGORIES, getTreatmentsByCategory, SITE } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="container-edit flex h-20 items-center justify-between">
        <Link
          to="/"
          className="text-sm tracking-[0.15em] uppercase font-semibold"
          style={{ color: "#24222F" }}
        >
          Dra. Elaine Morch
        </Link>

        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-8 text-[.7rem] xl:text-xs uppercase tracking-[0.12em] font-semibold"
          style={{ color: "#24222F" }}
        >
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ style: { color: "#24222F" } }}
            inactiveProps={{ style: { color: "#24222F" } }}
            className="hover:opacity-100 transition"
          >
            Início
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setMenu(true)}
            onMouseLeave={() => setMenu(false)}
          >
            <Link
              to="/tratamentos"
              className="flex items-center gap-1 transition hover:opacity-100"
              style={{ color: "#24222F" }}
            >
              Tratamentos <ChevronDown size={14} />
            </Link>
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[560px] transition-all duration-200 ease-out ${
                menu
                  ? "opacity-100 translate-y-0 visible pointer-events-auto"
                  : "opacity-0 -translate-y-2 invisible pointer-events-none"
              }`}
            >
              <div className="bg-card border border-border shadow-xl rounded-md p-4 grid grid-cols-2 gap-4">
                {CATEGORIES.map((cat) => (
                  <div key={cat.slug}>
                    <Link
                      to="/tratamentos/$categoria"
                      params={{ categoria: cat.slug }}
                      className="block px-2 py-1.5 text-base font-semibold uppercase tracking-[0.12em] transition"
                      style={{ color: "#24222F", fontFamily: "var(--font-sans)" }}
                    >
                      {cat.navLabel}
                    </Link>
                    <ul className="mt-1">
                      {getTreatmentsByCategory(cat.slug).map((t) => (
                        <li key={t.slug}>
                          <Link
                            to="/tratamentos/$categoria/$slug"
                            params={{ categoria: cat.slug, slug: t.slug }}
                            className="block px-2 py-1.5 rounded text-sm uppercase tracking-[0.08em] transition"
                            style={{
                              color: "#24222F",
                              fontFamily: "var(--font-sans)",
                              fontWeight: 400,
                            }}
                          >
                            {t.navLabel}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a href="/#sobre" className="hover:opacity-100 transition" style={{ color: "#24222F" }}>
            A consulta
          </a>
          <a href="/#contato" className="hover:opacity-100 transition" style={{ color: "#24222F" }}>
            Contato
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-5 py-2.5 text-xs tracking-widest uppercase transition"
            style={{ backgroundColor: "#24222F", color: "#FFFFFF" }}
          >
            Agendar consulta
          </a>
        </nav>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background max-h-[80vh] overflow-y-auto">
          <div
            className="container-edit py-4 flex flex-col gap-4 text-sm"
            style={{ color: "#24222F" }}
          >
            <Link to="/" onClick={() => setOpen(false)} style={{ color: "#24222F" }}>
              Início
            </Link>

            {CATEGORIES.map((cat) => (
              <div key={cat.slug}>
                <Link
                  to="/tratamentos/$categoria"
                  params={{ categoria: cat.slug }}
                  onClick={() => setOpen(false)}
                  className="font-serif text-base"
                  style={{ color: "#24222F" }}
                >
                  {cat.navLabel}
                </Link>
                <div className="mt-2 flex flex-col gap-2 pl-4">
                  {getTreatmentsByCategory(cat.slug).map((t) => (
                    <Link
                      key={t.slug}
                      to="/tratamentos/$categoria/$slug"
                      params={{ categoria: cat.slug, slug: t.slug }}
                      onClick={() => setOpen(false)}
                      className="text-muted-foreground"
                      style={{ color: "#24222F" }}
                    >
                      {t.navLabel}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <a href="/#sobre" onClick={() => setOpen(false)} style={{ color: "#24222F" }}>
              A consulta
            </a>
            <a href="/#contato" onClick={() => setOpen(false)} style={{ color: "#24222F" }}>
              Contato
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex justify-center px-5 py-3 uppercase tracking-widest text-xs"
              style={{ backgroundColor: "#24222F", color: "#FFFFFF" }}
            >
              Agendar consulta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
