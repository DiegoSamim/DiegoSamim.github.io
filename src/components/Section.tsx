import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Casca única de seção da landing page.
 *
 * - B2: um só ritmo vertical (`py-24`) para as cinco seções, no lugar dos
 *   quatro paddings diferentes que existiam.
 * - E3: uma só largura de conteúdo (`max-w-content`, 1152px), para que as
 *   margens coincidam descendo a página.
 * - E4: `tone="raised"` aplica um tint quase imperceptível com bordas em
 *   fade, marcando a fronteira entre capítulos sem usar cor nem régua.
 */
const Section = ({
  id,
  tone = "flat",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  tone?: "flat" | "raised";
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}) => {
  return (
    <section id={id} className={cn("relative py-24 px-4", className)}>
      {tone === "raised" && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-foreground/[0.022] [mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_86%,transparent_100%)]"
        />
      )}
      <div className={cn("relative container mx-auto max-w-content", containerClassName)}>
        {children}
      </div>
    </section>
  );
};

export default Section;
