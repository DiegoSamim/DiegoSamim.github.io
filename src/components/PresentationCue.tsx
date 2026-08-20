import type { MouseEvent } from "react";
import { Clapperboard } from "lucide-react";
import { playSound } from "@/lib/sfx";

const GOLD = "hsl(var(--glow-gold))";

/**
 * Marca um projeto que possui apresentação em vídeo.
 * - `podium`: selo compacto exibido sobre o pódio em destaque.
 * - `panel`: botão completo exibido dentro do modal do projeto.
 */
const PresentationCue = ({
  variant,
  label = "Apresentação",
  subtitle,
  onOpen,
}: {
  variant: "podium" | "panel";
  label?: string;
  subtitle?: string;
  onOpen: () => void;
}) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onOpen();
  };

  const handleHover = () => playSound("badgeHover", { volume: 0.2, debounceMs: 160 });

  if (variant === "podium") {
    return (
      <button
        type="button"
        onClick={handleClick}
        onMouseEnter={handleHover}
        aria-label={`Assistir apresentação${subtitle ? ` — ${subtitle}` : ""}`}
        title={label}
        className="relative flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-md transition-colors duration-300"
        style={{
          borderColor: "hsl(var(--glow-gold) / 0.45)",
          background: "linear-gradient(140deg, hsl(var(--glow-gold) / 0.14), hsl(var(--card) / 0.9))",
          boxShadow: "0 0 18px hsl(var(--glow-gold) / 0.22), inset 0 1px 0 hsl(var(--glow-gold) / 0.18)",
        }}
      >
        {/* Halo pulsante */}
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-2 rounded-full animate-cue-halo"
          style={{ background: "radial-gradient(circle, hsl(var(--glow-gold) / 0.3), transparent 70%)" }}
        />
        {/* Anel que se expande, como um sinal de gravação */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full border animate-cue-ring"
          style={{ borderColor: "hsl(var(--glow-gold) / 0.55)" }}
        />

        <Clapperboard className="relative h-4 w-4 shrink-0" style={{ color: GOLD }} />

        {/* Brilho que percorre o selo */}
        <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <span
            className="absolute inset-y-0 w-1/3 animate-cue-shimmer"
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--glow-gold) / 0.4), transparent)" }}
          />
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseEnter={handleHover}
      className="group relative flex w-full items-center gap-3 overflow-hidden rounded-xl border px-4 py-3 text-left transition-transform duration-300 hover:-translate-y-0.5"
      style={{
        borderColor: "hsl(var(--glow-gold) / 0.4)",
        background: "linear-gradient(120deg, hsl(var(--glow-gold) / 0.12), hsl(var(--card) / 0.9) 55%)",
        boxShadow: "0 0 20px hsl(var(--glow-gold) / 0.14)",
      }}
    >
      <span
        className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border"
        style={{
          borderColor: "hsl(var(--glow-gold) / 0.4)",
          background: "hsl(var(--glow-gold) / 0.14)",
        }}
      >
        <Clapperboard className="h-4 w-4" style={{ color: GOLD }} />
      </span>

      <span className="relative flex flex-col">
        <span className="text-sm font-semibold text-foreground/90">Assistir {label.toLowerCase()}</span>
      </span>

      <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
        <span
          className="absolute inset-y-0 w-1/4 animate-cue-shimmer"
          style={{ background: "linear-gradient(90deg, transparent, hsl(var(--glow-gold) / 0.28), transparent)" }}
        />
      </span>
    </button>
  );
};

export default PresentationCue;
