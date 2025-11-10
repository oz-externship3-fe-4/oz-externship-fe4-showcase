export type PhaseId =
  | "init"
  | "wireframe"
  | "dev"
  | "integration"
  | "presentation";

export type Task = {
  id: string;
  phaseId: PhaseId;
  weekLabel: string;
  title: string;
};

export const PHASES: { id: PhaseId; label: string }[] = [
  { id: "init", label: "초기" },
  { id: "wireframe", label: "와이어프레임" },
  { id: "dev", label: "개발중" },
  { id: "integration", label: "개발완료" },
  { id: "presentation", label: "발표준비" },
];

export const TASKS: Task[] = [
  {
    id: "week1-spec",
    phaseId: "init",
    weekLabel: "개발 1주차 · 10/14–17",
    title: "화면정의서 작성, 업무분장",
  },
  {
    id: "week2-common",
    phaseId: "wireframe",
    weekLabel: "개발 2주차 · 10/20–24",
    title: "공통 컴포넌트 제작",
  },
  {
    id: "week3-ui",
    phaseId: "dev",
    weekLabel: "개발 3주차 · 10/27–31",
    title: "각 페이지 UI 제작",
  },
  {
    id: "week4-api",
    phaseId: "integration",
    weekLabel: "개발 4주차 · 11/03–07",
    title: "각 페이지 기능 구현 및 API 연동",
  },
  {
    id: "week5-present",
    phaseId: "presentation",
    weekLabel: "개발 5주차 · 11/10–14",
    title: "발표 준비, 포트폴리오 페이지 제작",
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
