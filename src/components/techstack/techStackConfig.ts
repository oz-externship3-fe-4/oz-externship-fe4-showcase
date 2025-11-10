export type Skill = {
  name: string;
  src: string;
  accent: string;
};

export type HighlightTech = {
  key: string;
  name: string;
  color: string;
  icon: string;
  desc: string;
};

export const SKILLS: Skill[] = [
  {
    name: "GitHub",
    src: "images/Github-Light.svg",
    accent: "#111827",
  },
  {
    name: "Notion",
    src: "images/Notion-Light.svg",
    accent: "#111827",
  },
  {
    name: "Discord",
    src: "images/Discord.svg",
    accent: "#5865F2",
  },
  {
    name: "Figma",
    src: "images/Figma-Dark.svg",
    accent: "#F24E1E",
  },

  {
    name: "React",
    src: "images/React-Dark.svg",
    accent: "#61DAFB",
  },
  {
    name: "TypeScript",
    src: "images/TypeScript.svg",
    accent: "#3178C6",
  },
  {
    name: "Vite",
    src: "images/Vite-Light.svg",
    accent: "#646CFF",
  },
  {
    name: "Tailwind CSS",
    src: "images/TailwindCSS-Light.svg",
    accent: "#38BDF8",
  },

  {
    name: "Zustand",
    src: "images/zustand.png",
    accent: "#111827",
  },
  {
    name: "React Query",
    src: "images/reactquery.png",
    accent: "#FF4154",
  },
  {
    name: "VS CODE",
    src: "images/VSCode-Dark.svg",
    accent: "#3ECF8E",
  },
  {
    name: "Vercel",
    src: "images/Vercel-Dark.svg",
    accent: "#111827",
  },
  {
    name: "Recharts",
    src: "images/recharts.jpeg",
    accent: "#111827",
  },
  {
    name: "Framer-motion",
    src: "images/motion.png",
    accent: "#111827",
  },
];

export const HIGHLIGHT_TECHS: HighlightTech[] = [
  {
    key: "react",
    name: "React",
    color: "#61DAFB",
    icon: "images/React-Dark.svg",
    desc: "SPA 기반 UI를 컴포넌트 단위로 설계하여 재사용성과 유지보수성을 극대화했습니다. 페이지 전환, 상태 공유, 성능 최적화까지 전반에 활용했습니다.",
  },
  {
    key: "ts",
    name: "TypeScript",
    color: "#3178C6",
    icon: "images/TypeScript.svg",
    desc: "도메인 모델과 API 타입을 명확히 정의해 런타임 에러를 줄이고, 협업 시에도 코드 변경 영향을 쉽게 추적할 수 있도록 했습니다.",
  },
  {
    key: "vite",
    name: "Vite",
    color: "#646CFF",
    icon: "images/Vite-Light.svg",
    desc: "초고속 HMR과 번들링 환경을 기반으로 디자인·기능 실험을 빠르게 반복하며, 실제 개발 속도와 피드백 루프를 크게 단축했습니다.",
  },
  {
    key: "tailwind",
    name: "Tailwind CSS",
    color: "#38BDF8",
    icon: "images/TailwindCSS-Light.svg",
    desc: "공통 라운딩, 컬러, 섀도우 토큰을 정의하고 유틸리티 클래스로 캡슐화하여, 전체 페이지가 하나의 디자인 시스템 위에서 일관되게 동작하도록 구성했습니다.",
  },
];
