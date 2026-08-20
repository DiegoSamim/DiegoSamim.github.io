export enum ContactLinkIcon {
  EMAIL = "email",
  GITHUB = "github",
  LINKEDIN = "linkedin",
}

export interface ContactLink {
  icon: ContactLinkIcon;
  label: string;
  href: string;
  value: string;
  /** Links internos ao próprio dispositivo (mailto:) não abrem em nova aba. */
  external: boolean;
}

export interface ContactContent {
  tag: string;
  title: string;
  description: string;
  links: ContactLink[];
}

export const contactContent: ContactContent = {
  tag: "// contato",
  title: "Vamos conversar",
  description: "Aberto a oportunidades e colaborações.",
  links: [
    {
      icon: ContactLinkIcon.EMAIL,
      label: "Email",
      href: "mailto:diegosamim02@gmail.com",
      value: "diegosamim02@gmail.com",
      external: false,
    },
    {
      icon: ContactLinkIcon.GITHUB,
      label: "GitHub",
      href: "https://github.com/DiegoSamim",
      value: "github.com/DiegoSamim",
      external: true,
    },
    {
      icon: ContactLinkIcon.LINKEDIN,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/diego-samim-da-silva-460061253/",
      value: "linkedin.com/in/DiegoSamim",
      external: true,
    },
  ],
};
