import { useLayoutEffect, useRef, useState } from "react";

/**
 * Hook equivalente ao antigo `data-reveal` + IntersectionObserver do script.js.
 * Retorna um ref para anexar ao elemento e uma classe CSS a aplicar.
 *
 * Estratégia "fail-safe": o conteúdo nasce visível (sem depender de JS) e só é
 * ocultado se, no momento do mount, estiver de fato fora da tela. Assim
 * capturas de página inteira, crawlers e qualquer falha do observer nunca
 * deixam as seções em branco.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  // "visible" por padrão; vira "pending" no layout effect apenas se estiver
  // fora do viewport (antes da pintura, para não haver flash).
  const [visible, setVisible] = useState(true);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") return;

    const rect = el.getBoundingClientRect();
    const offscreen = rect.top >= window.innerHeight || rect.bottom <= 0;
    if (!offscreen) return;

    setVisible(false);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      // Threshold baixo + rootMargin: revela assim que qualquer parte entrar
      // na tela, mesmo em seções muito altas (grids de artigos, por exemplo).
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, className: `reveal${visible ? " is-visible" : ""}` };
}
