import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Cabeçalho de seção — antes duplicado literalmente em três arquivos e
 * reescrito, diferente, num quarto.
 *
 * - C1: o eyebrow sai de dentro do `<h2>`. O título de seção volta a ser só
 *   o título, para leitor de tela e para buscador.
 * - C2: eyebrow em `text-label` (11,5px caixa alta com tracking), no lugar
 *   dos 18px que competiam com o próprio título.
 */
const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) => {
  const isCentered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(isCentered ? "text-center" : "text-left", className)}
    >
      <p className="font-mono text-label uppercase text-subtle">{eyebrow}</p>
      <h2 className="mt-3 text-h2 font-bold text-foreground">{title}</h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lead text-muted-foreground max-w-3xl",
            isCentered && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
