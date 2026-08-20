import { motion } from "framer-motion";
import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { contactContent, ContactLinkIcon } from "@/lib/content";
import { playSound } from "@/lib/sfx";

const iconMap: Record<ContactLinkIcon, LucideIcon> = {
  [ContactLinkIcon.EMAIL]: Mail,
  [ContactLinkIcon.GITHUB]: Github,
  [ContactLinkIcon.LINKEDIN]: Linkedin,
};

const ContactSection = () => {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow={contactContent.tag}
        title={contactContent.title}
        subtitle={contactContent.description}
      />

      <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
        {contactContent.links.map((link, i) => {
          const Icon = iconMap[link.icon];

          return (
            <motion.a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              onMouseEnter={() => playSound("buttonHover", { volume: 0.2, debounceMs: 90 })}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="surface rounded-xl px-6 py-4 flex items-center gap-3 hover:border-strong transition-colors duration-300"
            >
              <Icon className="w-5 h-5 text-subtle" />
              <div className="text-left">
                <p className="text-xs text-subtle font-mono">{link.label}</p>
                <p className="text-caption text-foreground">{link.value}</p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </Section>
  );
};

export default ContactSection;
