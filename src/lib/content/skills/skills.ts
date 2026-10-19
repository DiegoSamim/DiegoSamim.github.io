import skillIcon0 from "@/assets/skills/javascript-original.svg";
import skillIcon1 from "@/assets/skills/react-original.svg";
import skillIcon2 from "@/assets/skills/cellphone.svg";
import skillIcon3 from "@/assets/skills/nextjs-original.svg";
import skillIcon4 from "@/assets/skills/angularjs-original.svg";
import skillIcon5 from "@/assets/skills/nodejs-original.svg";
import skillIcon6 from "@/assets/skills/python-original.svg";
import skillIcon7 from "@/assets/skills/java-original.svg";
import skillIcon8 from "@/assets/skills/cplusplus-original.svg";
import skillIcon9 from "@/assets/skills/postgresql-original.svg";
import skillIcon10 from "@/assets/skills/sequelize-original.svg";
import skillIcon11 from "@/assets/skills/docker-original.svg";
import skillIcon12 from "@/assets/skills/git-original.svg";
import skillIcon13 from "@/assets/skills/amazonwebservices-original-wordmark.svg";
import skillIcon14 from "@/assets/skills/redis-original.svg";
import skillIcon15 from "@/assets/skills/vitejs-original.svg";
import skillIcon16 from "@/assets/skills/shield-lock-outline.svg";
import skillIcon17 from "@/assets/skills/robot-outline.svg";

export interface SkillContent {
  name: string;
  emoji: string;
  description: string;
  topics: string[];
  iconUrl: string;
}

export const skillsContent: SkillContent[] = [
  {
    name: "JavaScript & TypeScript",
    emoji: "⚡",
    description: "Desenvolvimento moderno tipado",
    topics: [
      "Lógica e manipulação de dados",
      "Tipagem forte com TypeScript",
      "Integração com APIs",
    ],
    iconUrl: skillIcon0,
  },
  {
    name: "React",
    emoji: "⚛️",
    description: "Interfaces modernas e reativas",
    topics: [
      "Componentização",
      "Hooks e gerenciamento de estado",
      "Performance e reusabilidade",
    ],
    iconUrl: skillIcon1,
  },
  {
    name: "React Native",
    emoji: "📱",
    description: "Aplicações mobile cross-platform",
    topics: [
      "Apps Android e iOS",
      "Integração com APIs",
      "UI mobile responsiva",
    ],
    iconUrl: skillIcon2,
  },
  {
    name: "Next.js",
    emoji: "▲",
    description: "Framework fullstack React",
    topics: [
      "SSR e SSG",
      "Rotas e API routes",
      "SEO e performance",
    ],
    iconUrl: skillIcon3,
  },
  {
    name: "Angular",
    emoji: "🅰️",
    description: "Framework frontend estruturado",
    topics: [
      "Arquitetura modular",
      "Injeção de dependência",
      "Aplicações escaláveis",
    ],
    iconUrl: skillIcon4,
  },
  {
    name: "Node.js & NestJS",
    emoji: "🟢",
    description: "Backend estruturado e escalável",
    topics: [
      "APIs REST",
      "Arquitetura modular com NestJS",
      "Autenticação e middlewares",
    ],
    iconUrl: skillIcon5,
  },
  {
    name: "Python & FastAPI",
    emoji: "🐍",
    description: "APIs rápidas e automação",
    topics: [
      "APIs com FastAPI",
      "Scripts e automações",
      "Processamento de dados",
    ],
    iconUrl: skillIcon6,
  },
  {
    name: "Java",
    emoji: "☕",
    description: "Backend robusto e orientado a objetos",
    topics: [
      "Programação orientada a objetos",
      "APIs e sistemas corporativos",
      "Estruturas e performance",
    ],
    iconUrl: skillIcon7,
  },
  {
    name: "C++",
    emoji: "⚙️",
    description: "Programação de alto desempenho",
    topics: [
      "Estruturas de dados",
      "Gerenciamento de memória",
      "Performance e baixo nível",
    ],
    iconUrl: skillIcon8,
  },
  {
    name: "SQL & Bancos de Dados",
    emoji: "🗄️",
    description: "Modelagem e manipulação de dados",
    topics: [
      "PostgreSQL",
      "Queries otimizadas",
      "Modelagem relacional",
    ],
    iconUrl: skillIcon9,
  },
  {
    name: "Prisma & Sequelize",
    emoji: "🧩",
    description: "ORMs para integração com banco de dados",
    topics: [
      "Modelagem de dados",
      "Migrations",
      "Integração com Node.js",
    ],
    iconUrl: skillIcon10,
  },
  {
    name: "Docker",
    emoji: "🐳",
    description: "Containerização de aplicações",
    topics: [
      "Ambientes isolados",
      "Build e deploy",
      "Docker Compose",
    ],
    iconUrl: skillIcon11,
  },
  {
    name: "Git",
    emoji: "🔀",
    description: "Controle de versão e colaboração",
    topics: [
      "Branches e versionamento",
      "Code review",
      "Fluxo de trabalho em equipe",
    ],
    iconUrl: skillIcon12,
  },
  {
    name: "AWS",
    emoji: "☁️",
    description: "Infraestrutura em nuvem",
    topics: [
      "Deploy de aplicações",
      "Serviços cloud",
      "Escalabilidade",
    ],
    iconUrl: skillIcon13,
  },
  {
    name: "Redis",
    emoji: "🔴",
    description: "Cache e alta performance",
    topics: [
      "Cache em memória",
      "Sessões",
      "Pub/Sub",
    ],
    iconUrl: skillIcon14,
  },
  {
    name: "Vite",
    emoji: "⚡",
    description: "Build tool rápida para frontend",
    topics: [
      "Hot reload",
      "Build otimizado",
      "Projetos modernos",
    ],
    iconUrl: skillIcon15,
  },
  {
    name: "Segurança & Criptografia",
    emoji: "🔐",
    description: "Proteção de dados e autenticação",
    topics: [
      "JWT",
      "Hash e criptografia",
      "Boas práticas de segurança",
    ],
    iconUrl: skillIcon16,
  },
  {
    name: "LangChain & IA",
    emoji: "🤖",
    description: "Integração com IA e LLMs",
    topics: [
      "Orquestração de LLMs",
      "Automação com IA",
      "Aplicações inteligentes",
    ],
    iconUrl: skillIcon17,
  },
];
