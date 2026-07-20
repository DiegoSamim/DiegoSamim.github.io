import devPhoto from "@/assets/developer-photo.jpg";

export interface HeroContent {
  greeting: string;
  firstName: string;
  lastName: string;
  role: string;
  photo: string;
  photoAlt: string;
  links: {
    github: string;
    linkedin: string;
  };
}

export const heroContent: HeroContent = {
  greeting: "> olá_mundo",
  firstName: "Diego",
  lastName: "Samim",
  role: "Engenheiro de Computação e Informação UFRJ - Desenvolvedor Full Stack",
  photo: devPhoto,
  photoAlt: "Desenvolvedor",
  links: {
    github: "https://github.com/DiegoSamim",
    linkedin: "https://www.linkedin.com/in/diego-samim-da-silva-460061253/",
  },
};
