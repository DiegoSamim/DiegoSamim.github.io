import BotFinanceiroLogo from "@/assets/botFinanceiro/BotFinanceiroLogo.jpg";
import BotImageHome from "@/assets/botFinanceiro/BotImageHome.png";
import BotImageTransaction from "@/assets/botFinanceiro/BotImageTransaction.png";
import BotImageTransaction2 from "@/assets/botFinanceiro/BotImageTransaction2.png";
import BotImageSheet from "@/assets/botFinanceiro/BotImageSheet.png";
import DeuGreenLogo from "@/assets/deuGreen/DeuGreenLogo.png";
import DeuGreenImageHome from "@/assets/deuGreen/DeuGreenImageHome.png";
import DeuGreenImageHomeLight from "@/assets/deuGreen/DeuGreenImageHomeLight.png";
import DeuGreenImageDetail from "@/assets/deuGreen/DeuGreenImageDetail.png";
import DeuGreenImageTransaction from "@/assets/deuGreen/DeuGreenImageTransaction.png";
import DeuGreenImageListTransaction from "@/assets/deuGreen/DeuGreenImageListTransaction.png";
import DeuGreenImageConfiguration from "@/assets/deuGreen/DeuGreenImageConfiguration.png";
import DeuGreenImageGraph from "@/assets/deuGreen/DeuGreenImageGraph.png";
import DeuGreenImageGraph2 from "@/assets/deuGreen/DeuGreenImageGraph2.png";
import SaciImageHome from "@/assets/saci/SaciImageHome.png";
import SaciImageMap from "@/assets/saci/SaciImageMap.png";
import SaciImageNordeste from "@/assets/saci/SaciImageNordeste.png";
import SaciImageBestiario from "@/assets/saci/SaciImageBestiario.png";
import SaciImageGameOver from "@/assets/saci/SaciImageGameOver.png";
import SaciLogo from "@/assets/saci/SaciLogo.png";

export type ProjectDeviceType = "pc" | "mobile";

export interface ProjectMedia {
  src: string;
  device: ProjectDeviceType;
  alt?: string;
}

export interface ProjectContent {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  mainStack: string;
  objective: string;
  github: string;
  demo?: string;
  emoji: string;
  oneLiner: string;
  logo?: string;
  media?: ProjectMedia[];
  image?: string;
}

export const projectsContent: ProjectContent[] = [
  {
    id: 1,
    name: "Bot Financeiro",
    emoji: "🤖",
    mainStack: "Node.js + Google Sheets",
    oneLiner: "Assistente financeiro automatizado para controle de gastos e relatórios com integração ao Google Sheets",
    description: "Bot financeiro desenvolvido para automatizar o registro de transações e gerar relatórios de gastos. O sistema permite registrar despesas e receitas rapidamente através de mensagens, organizando automaticamente por categorias e períodos. Também gera relatórios mensais e notificações de confirmação após cada transação registrada e despesas acima de um limite definido. Todas as transações são sincronizadas em tempo real com uma planilha do Google Sheets, garantindo que os dados estejam sempre atualizados e acessíveis para análise posterior.",
    techStack: ["Node.js", "Google Sheets API", "Whatsapp Web Lib"],
    objective: "Criar uma forma simples e automatizada de registrar despesas no dia a dia sem precisar acessar planilhas ou aplicativos complexos, utilizando automação e interface conversacional do Whatsapp",
    github: "https://github.com/DiegoSamim/bot-financeiro",
    logo: BotFinanceiroLogo,
    media: [
      { src: BotImageHome, device: "mobile", alt: "Bot Financeiro Tela Inicial" },
      { src: BotImageTransaction, device: "mobile", alt: "Bot Financeiro Transação Finalizada Com Alerta" },
      { src: BotImageTransaction2, device: "mobile", alt: "Bot Financeiro Transação Finalizada" },
      { src: BotImageSheet, device: "pc", alt: "Bot Financeiro Planilha" },
    ],
  },
  {
    id: 2,
    name: "DeuGreen",
    emoji: "📊",
    mainStack: "React Native",
    oneLiner:
      "Aplicativo offline de finanças pessoais para registrar movimentações e visualizar gastos com clareza.",
    description:
      "DeuGreen é um aplicativo de finanças pessoais que funciona offline e permite registrar receitas, despesas e investimentos de forma rápida. O app reúne as principais funcionalidades em uma experiência simples: cadastro e histórico de transações, visualização detalhada de cada movimentação e dashboards com indicadores financeiros e gráficos interativos para análise de gastos.",
    techStack: [
      "React Native + TypeScript",
      "WatermelonDB",
      "Multithreading",
      "react-native-gifted-charts"
    ],
    objective:
      "Desenvolver uma solução prática e visual para ajudar usuários a organizar a vida financeira, entender padrões de consumo e tomar decisões mais conscientes.",
    github: "https://github.com/DiegoSamim/Frontend-App-Tapi/tree/version_2.0",
    logo: DeuGreenLogo,
    media: [
      { src: DeuGreenImageHome, device: "mobile", alt: "DeuGreen - Tela inicial" },
      { src: DeuGreenImageHomeLight, device: "mobile", alt: "DeuGreen - Tela inicial 2" },
      { src: DeuGreenImageDetail, device: "mobile", alt: "DeuGreen - Detalhe" },
      { src: DeuGreenImageTransaction, device: "mobile", alt: "DeuGreen - Transação" },
      { src: DeuGreenImageListTransaction, device: "mobile", alt: "DeuGreen - Lista de transações" },
      { src: DeuGreenImageConfiguration, device: "mobile", alt: "DeuGreen - Configuração" },
      { src: DeuGreenImageGraph, device: "mobile", alt: "DeuGreen - Gráfico" },
      { src: DeuGreenImageGraph2, device: "mobile", alt: "DeuGreen - Gráfico de pizza" },
    ],
  },
  {
    id: 3,
    name: "SACI",
    emoji: "🌪️",
    mainStack: "React Native + Python + IA Generativa",
    oneLiner: "Jogo narrativo interativo sobre o folclore brasileiro com NPCs controlados por IA generativa.",
    description:
      "SACI é um jogo narrativo de exploração inspirado no folclore brasileiro e na literatura de cordel. O jogador conversa com NPCs, coleta pistas e descobre criaturas lendárias. Utilizando IA generativa, os personagens interpretam as escolhas do jogador, ajustam seu humor e geram respostas dinâmicas, podendo revelar ou ocultar pistas. Durante a jornada, o Saci atua como guia narrativo, ajudando o jogador a desvendar as lendas e registrar as criaturas descobertas no FolcloreDex.",
    techStack: [
      "React Native TypeScript ",
      "Python",
      "IA Generativa para diálogos dinâmicos",
      "Sistema de personalidade de NPC",
      "Engine narrativa baseada em escolhas",
    ],
    objective:
      "Criar um jogo narrativo educativo que explore o folclore brasileiro utilizando IA generativa para tornar as interações com NPCs dinâmicas e imprevisíveis, incentivando a exploração, a descoberta cultural e a tomada de decisões durante a jornada do jogador.",
    github: "https://github.com",
    logo: SaciLogo,
    media: [
      { src: SaciImageHome, device: "mobile", alt: "SACI - Tela inicial" },
      { src: SaciImageMap, device: "mobile", alt: "SACI - Mapa" },
      { src: SaciImageNordeste, device: "mobile", alt: "SACI - Nordeste" },
      { src: SaciImageBestiario, device: "mobile", alt: "SACI - Bestiário" },
      { src: SaciImageGameOver, device: "mobile", alt: "SACI - Game Over" },
    ]
  }
];
