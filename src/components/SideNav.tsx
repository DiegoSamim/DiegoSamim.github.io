import { useEffect, useState } from "react";
import { playSound } from "@/lib/sfx";
import { cn } from "@/lib/utils";

/**
 * E1 — trilha de navegação vertical.
 *
 * A página tinha quatro telas de conteúdo e um único link interno em todo o
 * site. Esta é a opção discreta: fixa à direita, rótulos revelados no hover,
 * item ativo rastreado por IntersectionObserver. Some no mobile, onde a barra
 * roubaria largura de leitura.
 *
 * Depende de E2 — todas as seções precisam de `id`.
 */
const SECTIONS = [
  { id: "home", label: "início" },
  { id: "about", label: "sobre" },
  { id: "trophies", label: "projetos" },
  { id: "skills", label: "habilidades" },
  { id: "contact", label: "contato" },
] as const;

const SideNav = () => {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const elements = SECTIONS.map(({ id }) => document.getElementById(id)).filter(
      (element): element is HTMLElement => element !== null,
    );

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // A seção ativa é a que ocupa a maior fatia da faixa central da tela.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Navegação da página"
      className="group fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col items-end gap-4">
        {SECTIONS.map(({ id, label }) => {
          const isActive = id === activeId;

          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? "true" : undefined}
                onMouseEnter={() => playSound("buttonHover", { volume: 0.14, debounceMs: 120 })}
                onClick={() => playSound("clickSwitch", { volume: 0.22, debounceMs: 90 })}
                className="flex items-center justify-end gap-3 py-1 outline-offset-4"
              >
                <span
                  className={cn(
                    "font-mono text-label uppercase transition-all duration-300",
                    isActive
                      ? "text-foreground/85 opacity-100"
                      : "text-faint opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-focus-within:opacity-100 group-focus-within:translate-x-0",
                  )}
                >
                  {label}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "h-px rounded-full transition-all duration-300",
                    isActive ? "w-8 bg-foreground/80" : "w-4 bg-foreground/25",
                  )}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideNav;
