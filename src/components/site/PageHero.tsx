import type { ReactNode } from "react";

export function PageHero({
  overline,
  title,
  lead,
  image,
  breadcrumb,
}: {
  overline: string;
  title: ReactNode;
  lead?: string;
  image?: string;
  breadcrumb?: ReactNode;
}) {
  return (
    <section className="relative">
      <div
        className="relative min-h-[52vh] flex items-end md:items-center bg-cover bg-center"
        style={image ? { backgroundImage: `url(${image})` } : undefined}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(36,34,47,.2) 0%, rgba(36,34,47,.55) 45%, rgba(36,34,47,.94) 100%)",
          }}
        />
        <div className="container-edit relative z-10 py-16 md:py-20">
          <div className="max-w-2xl ml-auto text-right md:text-right">
            <div className="eyebrow" style={{ color: "var(--cream)" }}>
              {overline}
            </div>
            <h1
              className="page-title mt-5"
              style={{ color: "var(--cream-soft)", letterSpacing: "-0.03em" }}
            >
              {title}
            </h1>
            {lead && (
              <p className="lead-copy mt-5" style={{ color: "rgba(241,239,234,.9)" }}>
                {lead}
              </p>
            )}
          </div>
        </div>
      </div>
      {breadcrumb && (
        <div className="container-edit pt-5 text-xs uppercase tracking-widest text-muted-foreground">
          {breadcrumb}
        </div>
      )}
    </section>
  );
}
