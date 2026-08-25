import { useEffect, useRef, useState } from "react";

/**
 * Hook equivalente ao antigo `data-reveal` + IntersectionObserver do script.js.
 * Retorna um ref para anexar ao elemento e uma classe CSS a aplicar.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, className: `reveal${visible ? " is-visible" : ""}` };
}
