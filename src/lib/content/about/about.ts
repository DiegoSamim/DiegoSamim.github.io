import AWSCloudPractionerLogo from "@/assets/logos/AWSCloudPractioner.png";
import DeloitteLogo from "@/assets/logos/DeloitteLogo.png";
import FluxoLogo from "@/assets/logos/FluxoLogo.png";
import MinervaBotsLogo from "@/assets/logos/MinervaBotsLogo.png";
import UFRJLogo from "@/assets/logos/UFRJLogo.png";

export enum AboutCardIcon {
  CERTIFICATE = "certificate",
  COLLEGE = "college",
  EXPERIENCE = "experience",
}

export enum AboutCardType {
  CERTIFICATIONS = "certifications",
  EDUCATION = "education",
  EXPERIENCE = "experience",
}

export interface AboutCardContent {
  id: number;
  title: string;
  description: string;
  icon: AboutCardIcon;
  type: AboutCardType;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  details: string;
  logo?: string;
}

export interface EducationTimelineItem {
  title: string;
  institution: string;
  period: string;
  date: string;
  details: string;
  logo?: string;
}

export interface ExperienceItem {
  title: string;
  context: string;
  date: string;
  details: string;
  logo?: string;
}

export interface AboutContent {
  tag: string;
  title: string;
  description: string;
  cards: AboutCardContent[];
  certifications: CertificationItem[];
  educationTimeline: EducationTimelineItem[];
  experiences: ExperienceItem[];
}

export const aboutContent: AboutContent = {
  tag: "// sobre",
  title: "Sobre mim",
  description:
    "Visão profissional organizada por certificações, formação acadêmica e experiência prática.",
  cards: [
    {
      id: 1,
      title: "Certificações",
      description: "Certificados técnicos e trilhas concluídas em plataformas de tecnologia.",
      icon: AboutCardIcon.CERTIFICATE,
      type: AboutCardType.CERTIFICATIONS,
    },
    {
      id: 2,
      title: "Formação Acadêmica",
      description: "Trajetória acadêmica com evolução contínua e base sólida em tecnologia.",
      icon: AboutCardIcon.COLLEGE,
      type: AboutCardType.EDUCATION,
    },
    {
      id: 3,
      title: "Experiência Profissional",
      description: "Atuação em projetos reais, competições, eventos e entregas colaborativas.",
      icon: AboutCardIcon.EXPERIENCE,
      type: AboutCardType.EXPERIENCE,
    },
  ],
  certifications: [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025-11",
      details: "Fundamentos de nuvem, segurança e boas práticas de arquitetura em serviços AWS.",
      logo: AWSCloudPractionerLogo,
    },
  ],
  educationTimeline: [
    {
      title: "Engenharia de Computação e Informação",
      institution: "UFRJ",
      period: "2025 - Atual",
      date: "2025-01",
      details: "Formação focada em desenvolvimento de software, sistemas distribuídos e inteligência artificial, com aprofundamento em arquitetura e soluções escaláveis.",
      logo: UFRJLogo,
    },
    {
      title: "Engenharia de Controle e Automação",
      institution: "UFRJ",
      period: "2022 - 2025",
      date: "2022-01",
      details: "Base sólida em lógica e sistemas de automação, com forte atuação prática em robótica e desenvolvimento de sistemas autônomos.",
      logo: UFRJLogo,
    },
  ],
  experiences: [
    {
      title: "Analista de Sistemas",
      context: "Deloitte",
      date: "2025 - Atual",
      details: "Atuação em desenvolvimento fullstack e soluções com IA generativa, incluindo integração de APIs, criação de interfaces e uso de serviços AWS (Lambda, API Gateway, S3). Participação direta em projetos com grandes empresas, atuando tanto no desenvolvimento quanto na comunicação com clientes e entregas.",
      logo: DeloitteLogo,
    },
    {
      title: "Estagiário de Desenvolvimento e IA",
      context: "Deloitte",
      date: "2024 - 2025",
      details: "Desenvolvimento de aplicações com React e Python, integração com modelos de IA utilizando LangChain e criação de soluções conectadas a APIs. Apoio em análises e dashboards com Power BI.",
      logo: DeloitteLogo,
    },
    {
      title: "Gerente de Projetos e Desenvolvedor Fullstack",
      context: "Fluxo Consultoria (UFRJ)",
      date: "2024 - 2025",
      details: "Desenvolvimento de sistemas com NestJS, Prisma, Next.js, Python e React Native, além de gestão de projetos e contato direto com clientes. Atuação em todas as etapas do ciclo de desenvolvimento, desde a concepção até a entrega, com foco em soluções escaláveis e de alta qualidade.",
      logo: FluxoLogo,
    },
    {
      title: "Líder de Projeto e Programador/Eletrônico",
      context: "MinervaBots (UFRJ)",
      date: "2022 - 2023",
      details: "Desenvolvimento de robôs autônomos com C++, Python e sistemas embarcados. Atuação em liderança e organização técnica, contribuindo para evolução da equipe e conquistas em competições nacionais.",
      logo: MinervaBotsLogo,
    }
  ],
};
