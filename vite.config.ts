import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const base = isGitHubPages ? "/DraElaineMorch/" : "/";

const categorias = ["estetica-intima", "saude-hormonal"];
const tratamentosPorCategoria: Record<string, string[]> = {
  "estetica-intima": [
    "laser-intimo",
    "ninfoplastia",
    "radiofrequencia-intima",
    "clareamento-intimo",
    "preenchimento-intimo",
  ],
  "saude-hormonal": [
    "menopausa",
    "reposicao-hormonal",
    "hormonios-bioidenticos",
    "implantes-hormonais",
    "incontinencia-urinaria",
  ],
};

const treatmentPages = categorias.flatMap((categoria) =>
  tratamentosPorCategoria[categoria].map((slug) => ({
    path: `/tratamentos/${categoria}/${slug}`,
  })),
);

export default defineConfig({
  base,
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      router: { basepath: base },
      server: { entry: "server" },
      pages: [
        { path: "/" },
        { path: "/tratamentos" },
        ...categorias.map((c) => ({ path: `/tratamentos/${c}` })),
        ...treatmentPages,
      ],
      prerender: {
        enabled: true,
        crawlLinks: true,
        failOnError: true,
      },
    }),
    viteReact(),
  ],
});
