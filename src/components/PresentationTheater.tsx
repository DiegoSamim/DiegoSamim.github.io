import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, X } from "lucide-react";
import type { ProjectPresentation } from "@/lib/content";
import { playSound } from "@/lib/sfx";

/**
 * Player em tela cheia para a apresentação (motion design) de um projeto.
 * Fecha com ESC, com o botão X ou clicando fora do vídeo.
 */
const PresentationTheater = ({
  presentation,
  onClose,
}: {
  presentation: ProjectPresentation | null;
  onClose: () => void;
}) => {
  const [isReady, setIsReady] = useState(false);
  const isOpen = Boolean(presentation);

  useEffect(() => {
    if (!isOpen) return;

    setIsReady(false);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleClose = () => {
    playSound("closeCase", { volume: 0.3, debounceMs: 120 });
    onClose();
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {presentation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          role="dialog"
          aria-modal="true"
          aria-label={`Apresentação de ${presentation.title}`}
          onClick={handleClose}
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-black/90 backdrop-blur-2xl px-4 py-6 sm:px-8"
        >
          {/* Vinheta dourada de cinema */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 50% 50%, hsl(var(--glow-gold) / 0.09), transparent 70%)",
            }}
          />

          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={(event) => {
              event.stopPropagation();
              handleClose();
            }}
            onMouseEnter={() => playSound("buttonHover", { volume: 0.2, debounceMs: 90 })}
            aria-label="Fechar apresentação"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-muted-foreground backdrop-blur-md transition-colors hover:border-[hsl(var(--glow-gold)/0.5)] hover:text-foreground sm:right-8 sm:top-8"
          >
            <X className="h-5 w-5" />
          </motion.button>

          {/* Cabeçalho */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="relative mb-4 text-center"
            onClick={(event) => event.stopPropagation()}
          >
            {presentation.subtitle && (
              <p
                className="font-mono text-[10px] uppercase tracking-[0.42em]"
                style={{ color: "hsl(var(--glow-gold) / 0.8)" }}
              >
                {presentation.subtitle}
              </p>
            )}
            <h3 className="mt-1 text-xl font-bold text-foreground/95 sm:text-2xl">{presentation.title}</h3>
          </motion.div>

          {/* Palco */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-[78vh] max-w-[94vw] items-center justify-center overflow-hidden rounded-2xl border bg-black"
            style={{
              borderColor: "hsl(var(--glow-gold) / 0.28)",
              boxShadow:
                "0 0 60px hsl(var(--glow-gold) / 0.14), 0 30px 80px hsl(0 0% 0% / 0.7), inset 0 0 0 1px hsl(0 0% 100% / 0.04)",
            }}
          >
            <video
              src={presentation.src}
              poster={presentation.poster}
              controls
              autoPlay
              playsInline
              preload="auto"
              onCanPlay={() => setIsReady(true)}
              className="max-h-[78vh] max-w-[94vw] object-contain"
            />

            <AnimatePresence>
              {!isReady && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/85"
                >
                  <Loader2 className="h-6 w-6 animate-spin" style={{ color: "hsl(var(--glow-gold) / 0.8)" }} />
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Carregando apresentação
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70"
          >
            ESC ou clique fora para fechar
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default PresentationTheater;
