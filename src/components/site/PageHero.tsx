import type { ReactNode } from "react";

export function PageHero({
  overline,
  title,
  lead,
  image,
  imageFit = "cover",
  breadcrumb,
}: {
  overline: string;
  title: ReactNode;
  lead?: string;
  image?: string;
  imageFit?: "cover" | "fill";
  breadcrumb?: ReactNode;
}) {
  const showFullImage = imageFit === "fill";

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[440px] md:h-[520px] overflow-hidden bg-[var(--ink)]">
        {image && (
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full"
            style={
              showFullImage
                ? { objectFit: "fill" }
                : { objectFit: "cover", objectPosition: "18% 22%" }
            }
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background: showFullImage
              ? "linear-gradient(90deg, rgba(36,34,47,.08) 0%, rgba(36,34,47,.35) 42%, rgba(36,34,47,.94) 76%, rgba(36,34,47,.98) 100%)"
              : "linear-gradient(90deg, rgba(36,34,47,.2) 0%, rgba(36,34,47,.55) 45%, rgba(36,34,47,.94) 100%)",
          }}
        />
        <div className="container-edit relative z-10 flex h-full items-center py-16 md:py-20">
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
