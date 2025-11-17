import type { RetrospectiveLang } from "../../types/retrospective";

export type PhaseId =
  | "init"
  | "wireframe"
  | "dev"
  | "integration"
  | "presentation";

type LocalizedText = Record<RetrospectiveLang, string>;

export type Task = {
  id: string;
  phaseId: PhaseId;
  weekLabel: LocalizedText;
  title: LocalizedText;
};

export const PHASES: { id: PhaseId; label: LocalizedText }[] = [
  {
    id: "init",
    label: {
      ko: "초기",
      en: "Planning",
      jp: "初期",
    },
  },
  {
    id: "wireframe",
    label: {
      ko: "와이어프레임",
      en: "Wireframing",
      jp: "ワイヤフレーム",
    },
  },
  {
    id: "dev",
    label: {
      ko: "개발중",
      en: "In Development",
      jp: "開発中",
    },
  },
  {
    id: "integration",
    label: {
      ko: "개발완료",
      en: "Development Complete",
      jp: "開発完了",
    },
  },
  {
    id: "presentation",
    label: {
      ko: "발표준비",
      en: "Prepare Presentation",
      jp: "発表準備",
    },
  },
];

export const TASKS: Task[] = [
  {
    id: "week1-spec",
    phaseId: "init",
    weekLabel: {
      ko: "개발 1주차 · 10/14–17",
      en: "Week 1 · Oct 14–17",
      jp: "開発1週目 · 10/14–17",
    },
    title: {
      ko: "화면정의서 작성, 업무분장",
      en: "Screen definition and task allocation",
      jp: "画面定義書、業務分担",
    },
  },
  {
    id: "week2-common",
    phaseId: "wireframe",
    weekLabel: {
      ko: "개발 2주차 · 10/20–24",
      en: "Week 2 · Oct 20–24",
      jp: "開発2週目 · 10/20–24",
    },
    title: {
      ko: "공통 컴포넌트 제작",
      en: "Develop shared components",
      jp: "共通コンポーネント製作",
    },
  },
  {
    id: "week3-ui",
    phaseId: "dev",
    weekLabel: {
      ko: "개발 3주차 · 10/27–31",
      en: "Week 3 · Oct 27–31",
      jp: "開発3週目 · 10/27–31",
    },
    title: {
      ko: "각 페이지 UI 제작",
      en: "Build page UIs",
      jp: "各ページUI制作",
    },
  },
  {
    id: "week4-api",
    phaseId: "integration",
    weekLabel: {
      ko: "개발 4주차 · 11/03–07",
      en: "Week 4 · Nov 3–7",
      jp: "開発4週目 · 11/03–07",
    },
    title: {
      ko: "각 페이지 기능 구현 및 API 연동",
      en: "Implement page functionalities and integrate APIs",
      jp: "各ページ機能の旧型とAPIの連動",
    },
  },
  {
    id: "week5-present",
    phaseId: "presentation",
    weekLabel: {
      ko: "개발 5주차 · 11/10–14",
      en: "Week 5 · Nov 10–14",
      jp: "開発5週目 · 11/10–14",
    },
    title: {
      ko: "발표 준비, 포트폴리오 페이지 제작",
      en: "Prepare presentation and build portfolio page",
      jp: "発表準備、ポートフォリオページ制作",
    },
  },
];

export const PHASE_THEMES: Record<PhaseId, { accent: string; iconBg: string }> =
  {
    init: {
      accent: "rgba(244,184,64,0.65)",
      iconBg: "rgba(244,184,64,0.16)",
    },
    wireframe: {
      accent: "rgba(78,203,113,0.65)",
      iconBg: "rgba(78,203,113,0.14)",
    },
    dev: {
      accent: "rgba(79,141,254,0.65)",
      iconBg: "rgba(79,141,254,0.14)",
    },
    integration: {
      accent: "rgba(241,136,91,0.55)",
      iconBg: "rgba(241,136,91,0.14)",
    },
    presentation: {
      accent: "rgba(177,140,255,0.55)",
      iconBg: "rgba(177,140,255,0.14)",
    },
  };

export const softPaintBg = `
  radial-gradient(circle at 0% 0%,
    rgba(193,224,255,0.25),
    rgba(193,224,255,0) 55%),
  radial-gradient(circle at 20% 90%,
    rgba(255,220,230,0.25),
    rgba(255,220,230,0) 55%),
  radial-gradient(circle at 85% 35%,
    rgba(210,246,230,0.22),
    rgba(210,246,230,0) 55%),
  #FFFFFF
`;
