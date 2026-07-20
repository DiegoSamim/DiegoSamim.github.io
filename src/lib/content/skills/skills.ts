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
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
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
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
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
    iconUrl: "https://api.iconify.design/mdi:cellphone.svg?color=%2300E5FF",
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
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
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
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
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
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
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
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
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
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
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
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
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
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
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
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
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
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
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
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
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
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
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
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
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
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
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
    iconUrl: "https://api.iconify.design/mdi:shield-lock-outline.svg?color=%23F59E0B",
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
    iconUrl: "https://api.iconify.design/mdi:robot-outline.svg?color=%23A3E635",
  },
];
