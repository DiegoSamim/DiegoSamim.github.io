export enum AboutCardIcon {
  CERTIFICATE = "certificate",
  COURSE = "course",
  COLLEGE = "college",
  EXPERIENCE = "experience",
}

export enum AboutCardType {
  CERTIFICATIONS = "certifications",
  COURSES = "courses",
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
  credentialImageUrl?: string;
  credentialImageAlt?: string;
}

export interface CourseItem {
  name: string;
  provider: string;
  date: string;
  details: string;
}

export interface EducationTimelineItem {
  title: string;
  institution: string;
  period: string;
  date: string;
  details: string;
}

export interface ExperienceItem {
  title: string;
  context: string;
  date: string;
  details: string;
}

export interface AboutContent {
  tag: string;
  title: string;
  description: string;
  cards: AboutCardContent[];
  certifications: CertificationItem[];
  courses: CourseItem[];
  educationTimeline: EducationTimelineItem[];
  experiences: ExperienceItem[];
}

export const aboutContent: AboutContent = {
  tag: "// sobre",
  title: "Sobre mim",
  description:
    "Visão profissional organizada por certificações, cursos, formação acadêmica e experiência prática.",
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
      title: "Cursos",
      description: "Formações complementares em desenvolvimento, arquitetura e boas práticas.",
      icon: AboutCardIcon.COURSE,
      type: AboutCardType.COURSES,
    },
    {
      id: 3,
      title: "Formação Acadêmica",
      description: "Trajetória acadêmica com evolução contínua e base sólida em tecnologia.",
      icon: AboutCardIcon.COLLEGE,
      type: AboutCardType.EDUCATION,
    },
    {
      id: 4,
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
      credentialImageUrl:
        "https://hermes.dio.me/tracks/68c81887-a1c2-440d-a7ea-7777bc10cd41.png",
      credentialImageAlt: "Badge AWS Cloud Practitioner",
    },
  ],
  courses: [
    {
      name: "Boas Práticas de APIs REST",
      provider: "Udemy",
      date: "2025-06",
      details: "Versionamento, autenticação, observabilidade e documentação de APIs escaláveis.",
    },
    {
      name: "Frontend Engineering com React",
      provider: "Alura",
      date: "2025-02",
      details: "Componentização, performance de renderização e organização de design system.",
    },
  ],
  educationTimeline: [
    {
      title: "Engenharia de Computação e Informação",
      institution: "UFRJ",
      period: "2025 - Atual",
      date: "2025-01",
      details: "Formação focada em desenvolvimento de software, sistemas distribuídos e inteligência artificial, com aprofundamento em arquitetura e soluções escaláveis.",
    },
    {
      title: "Engenharia de Controle e Automação",
      institution: "UFRJ",
      period: "2022 - 2025",
      date: "2022-01",
      details: "Base sólida em lógica e sistemas de automação, com forte atuação prática em robótica e desenvolvimento de sistemas autônomos.",
    },
  ],
  experiences: [
    {
      title: "Analista de Sistemas",
      context: "Deloitte",
      date: "2025 - Atual",
      details: "Atuação em desenvolvimento fullstack e soluções com IA generativa, incluindo integração de APIs, criação de interfaces e uso de serviços AWS (Lambda, API Gateway, S3). Participação direta em projetos com grandes empresas, atuando tanto no desenvolvimento quanto na comunicação com clientes e entregas.",
    },
    {
      title: "Estagiário de Desenvolvimento e IA",
      context: "Deloitte",
      date: "2024 - 2025",
      details: "Desenvolvimento de aplicações com React e Python, integração com modelos de IA utilizando LangChain e criação de soluções conectadas a APIs. Apoio em análises e dashboards com Power BI.",
    },
    {
      title: "Gerente de Projetos e Desenvolvedor Fullstack",
      context: "Fluxo Consultoria (UFRJ)",
      date: "2024 - 2025",
      details: "Desenvolvimento de sistemas com NestJS, Prisma, Next.js, Python e React Native, além de gestão de projetos e contato direto com clientes. Atuação em todas as etapas do ciclo de desenvolvimento, desde a concepção até a entrega, com foco em soluções escaláveis e de alta qualidade.",
    },
    {
      title: "Líder de Projeto e Programador/Eletrônico",
      context: "MinervaBots (UFRJ)",
      date: "2022 - 2023",
      details: "Desenvolvimento de robôs autônomos com C++, Python e sistemas embarcados. Atuação em liderança e organização técnica, contribuindo para evolução da equipe e conquistas em competições nacionais.",
    }
  ],
};
