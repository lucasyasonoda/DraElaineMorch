import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsappFloatButton } from "@/components/site/WhatsappFloatButton";
import { BackToTop } from "@/components/site/BackToTop";
import { Analytics } from "@/components/site/Analytics";
import { GA_MEASUREMENT_ID, META_PIXEL_ID } from "@/content/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow">404</div>
        <h1 className="page-title mt-4">Página não encontrada</h1>
        <p className="mt-4 text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center px-6 py-3 bg-foreground text-background text-xs tracking-widest uppercase"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    console.error("Application error boundary", error);
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="card-title">Algo deu errado</h1>
        <p className="mt-3 text-sm text-muted-foreground">Tente novamente ou volte ao início.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="px-5 py-2.5 bg-foreground text-background text-xs uppercase tracking-widest"
          >
            Tentar de novo
          </button>
          <a
            href="/"
            className="px-5 py-2.5 border border-border text-xs uppercase tracking-widest"
          >
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dra. Elaine Morch | Ginecologista em Sorocaba" },
      {
        name: "description",
        content:
          "Dra. Elaine Morch: cuidado individualizado em estética íntima e saúde hormonal, em Sorocaba.",
      },
      { name: "author", content: "Dra. Elaine Morch" },
      { property: "og:site_name", content: "Dra. Elaine Morch" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/logo.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500&family=Poppins:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      // Google Analytics (GA4) — só injeta se VITE_GA_MEASUREMENT_ID estiver configurado.
      ...(GA_MEASUREMENT_ID
        ? [
            {
              src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
              async: true,
            },
            {
              children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`,
            },
          ]
        : []),
      // Meta Pixel — só injeta se VITE_META_PIXEL_ID estiver configurado.
      ...(META_PIXEL_ID
        ? [
            {
              children: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`,
            },
          ]
        : []),
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {META_PIXEL_ID && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Analytics />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsappFloatButton />
      <BackToTop />
    </QueryClientProvider>
  );
}
