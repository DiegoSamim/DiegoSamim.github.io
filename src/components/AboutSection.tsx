import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Briefcase,
  Calendar,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { aboutContent, AboutCardIcon, AboutCardType } from "@/lib/content";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { playSound } from "@/lib/sfx";

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const [certificationIndex, setCertificationIndex] = useState(0);

  const activeCard = useMemo(
    () => aboutContent.cards.find((card) => card.id === activeCardId) ?? null,
    [activeCardId],
  );

  const iconMap: Record<AboutCardIcon, LucideIcon> = {
    [AboutCardIcon.CERTIFICATE]: Award,
    [AboutCardIcon.COLLEGE]: GraduationCap,
    [AboutCardIcon.EXPERIENCE]: Briefcase,
  };

  const certificationItem = aboutContent.certifications[certificationIndex];

  const handleOpenCard = (cardId: number) => {
    playSound("openModal", { volume: 0.36, debounceMs: 120 });
    setActiveCardId(cardId);
    setIsModalOpen(true);
  };

  const handleOpenChange = (open: boolean) => {
    setIsModalOpen(open);
  };

  const goToPreviousCertification = () => {
    playSound("clickSwitch", { volume: 0.28, debounceMs: 80 });
    setCertificationIndex((prev) => (prev - 1 + aboutContent.certifications.length) % aboutContent.certifications.length);
  };

  const goToNextCertification = () => {
    playSound("clickSwitch", { volume: 0.28, debounceMs: 80 });
    setCertificationIndex((prev) => (prev + 1) % aboutContent.certifications.length);
  };

  return (
    <Section id="about" tone="raised">
      <SectionHeading
        eyebrow={aboutContent.tag}
        title={aboutContent.title}
        subtitle={aboutContent.description}
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aboutContent.cards.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Award;

            return (
              <motion.button
                type="button"
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.55 }}
                onMouseEnter={() => playSound("buttonHover", { volume: 0.17, debounceMs: 90 })}
                onClick={() => handleOpenCard(item.id)}
                className="surface flex flex-col rounded-2xl p-6 text-left group transition-all duration-500 hover:-translate-y-1 hover:border-strong hover:shadow-[0_22px_55px_-20px_hsl(225_20%_3%/0.9)]"
              >
                <div className="mb-4 w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center transition-colors group-hover:bg-accent">
                  <Icon className="w-6 h-6 text-foreground/90" />
                </div>

                <h3 className="text-h3 font-semibold mb-2">{item.title}</h3>
                <p className="text-caption text-muted-foreground">{item.description}</p>

                {/* D3: o rótulo era o único aviso de que o card abre um modal,
                    e era invisível. Vira uma affordance de verdade. */}
                <span className="mt-auto pt-5 flex items-center gap-2 font-mono text-label uppercase text-subtle transition-colors group-hover:text-foreground">
                  Detalhes
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </motion.button>
            );
          })}
        </div>

      <Dialog open={isModalOpen} onOpenChange={handleOpenChange}>
          <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto border-border bg-card p-7 sm:p-8">
            <DialogHeader className="space-y-3 border-b border-border pb-5">
              <DialogTitle className="text-2xl">{activeCard?.title}</DialogTitle>
              <DialogDescription className="text-sm leading-relaxed max-w-2xl">
                {activeCard?.description}
              </DialogDescription>
            </DialogHeader>

            {activeCard?.type === AboutCardType.CERTIFICATIONS && certificationItem && (
              <div className="space-y-6 pt-2">
                <div className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-3">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                    Certificado {certificationIndex + 1}/{aboutContent.certifications.length}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={goToPreviousCertification}
                      aria-label="Certificação anterior"
                      className="h-9 w-9 rounded-full border border-border bg-secondary hover:bg-secondary transition-colors flex items-center justify-center"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={goToNextCertification}
                      aria-label="Próxima certificação"
                      className="h-9 w-9 rounded-full border border-border bg-secondary hover:bg-secondary transition-colors flex items-center justify-center"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-background/40 p-5 space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold">{certificationItem.name}</h4>
                    <p className="text-sm text-muted-foreground">{certificationItem.issuer}</p>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {certificationItem.date}
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">{certificationItem.details}</p>

                  {certificationItem.logo && (
                    <div className="rounded-xl border border-border bg-secondary/20 p-4 flex items-center justify-center min-h-40">
                      <img
                        src={certificationItem.logo}
                        alt={`Logo ${certificationItem.issuer}`}
                        loading="lazy"
                        className="max-h-40 w-auto max-w-full object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeCard?.type === AboutCardType.EDUCATION && (
              <div className="pt-2 space-y-5">
                {aboutContent.educationTimeline.map((item, index) => (
                  <div key={`${item.title}-${item.date}`} className="relative pl-8">
                    <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-primary/80 ring-4 ring-primary/15" />
                    {index < aboutContent.educationTimeline.length - 1 && (
                      <span className="absolute left-[5px] top-5 h-[calc(100%+8px)] w-px bg-border/80" />
                    )}

                    <article className="rounded-xl border border-border bg-background/40 p-4">
                      <div className="flex items-start gap-3">
                        {item.logo && (
                          <img
                            src={item.logo}
                            alt={`Logo ${item.institution}`}
                            className="h-14 w-14 shrink-0 rounded-lg border border-border bg-background/60 object-contain p-1.5"
                          />
                        )}
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{item.institution}</p>
                        </div>
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground font-mono">
                        <span className="rounded-full border border-border bg-secondary px-2.5 py-1">{item.period}</span>
                        <span>{item.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.details}</p>
                    </article>
                  </div>
                ))}
              </div>
            )}

            {activeCard?.type === AboutCardType.EXPERIENCE && (
              <div className="space-y-4 pt-2">
                {aboutContent.experiences.map((experience) => (
                  <article
                    key={`${experience.title}-${experience.date}`}
                    className="rounded-xl border border-border bg-background/40 p-4"
                  >
                    <div className="flex items-start gap-3">
                      {experience.logo && (
                        <img
                          src={experience.logo}
                          alt={`Logo ${experience.context}`}
                          className="h-14 w-14 shrink-0 rounded-lg border border-border bg-background/60 object-contain p-1.5"
                        />
                      )}
                      <div>
                        <h4 className="font-semibold">{experience.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{experience.context}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground font-mono mt-2">{experience.date}</p>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{experience.details}</p>
                  </article>
                ))}
              </div>
            )}
          </DialogContent>
      </Dialog>
    </Section>
  );
};

export default AboutSection;
