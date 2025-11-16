export const softPaintBg = `
  radial-gradient(circle at 0% 0%,
    rgba(193,224,255,0.18),
    rgba(193,224,255,0) 55%),
  radial-gradient(circle at 20% 90%,
    rgba(255,220,230,0.18),
    rgba(255,220,230,0) 55%),
  radial-gradient(circle at 85% 35%,
    rgba(210,246,230,0.14),
    rgba(210,246,230,0) 55%),
  #FFFFFF
`;

export type LocalizedText = {
  ko: string;
  en: string;
  jp: string;
};

export type NavItem = {
  order: string;
  label: LocalizedText;
  path: string;
  title: LocalizedText;
};

export const NAV_ITEMS: NavItem[] = [
  {
    order: "01",
    path: "/home",
    label: {
      ko: "홈",
      en: "Home",
      jp: "ホーム",
    },
    title: {
      ko: "환영합니다!",
      en: "Welcome to our portfolio site!",
      jp: "私たちのポートフォリオサイトへようこそ!",
    },
  },
  {
    order: "02",
    path: "/intro",
    label: {
      ko: "팀소개",
      en: "Team",
      jp: "チーム紹介",
    },
    title: {
      ko: "팀소개",
      en: "Meet our team",
      jp: "チームの紹介",
    },
  },
  {
    order: "03",
    path: "/overview",
    label: {
      ko: "프로젝트 개요",
      en: "Project Overview",
      jp: "プロジェクト概要",
    },
    title: {
      ko: "프로젝트 개요",
      en: "Project overview",
      jp: "プロジェクトの概要",
    },
  },
  {
    order: "04",
    path: "/convention",
    label: {
      ko: "컨벤션",
      en: "Convention",
      jp: "コンベンション",
    },
    title: {
      ko: "코딩 컨벤션 및 협업 규칙을 정리했습니다",
      en: "Coding conventions & collaboration rules",
      jp: "コーディング規約とコラボレーションルールをまとめました",
    },
  },
  {
    order: "05",
    path: "/tech",
    label: {
      ko: "기술스택",
      en: "Tech Stack",
      jp: "技術スタック",
    },
    title: {
      ko: "프로젝트에 사용된 기술 스택을 소개합니다",
      en: "We introduce the tech stack used in this project.",
      jp: "プロジェクトで使用されたテクノロジースタックを紹介します",
    },
  },
  {
    order: "06",
    path: "/demo",
    label: {
      ko: "데모",
      en: "Demo",
      jp: "デモ",
    },
    title: {
      ko: "실제 구현된 데모를 확인해보세요",
      en: "Check out the live demo",
      jp: "実際のデモをご覧ください",
    },
  },
  {
    order: "07",
    path: "/plan",
    label: {
      ko: "기획자료",
      en: "Planning",
      jp: "企画資料",
    },
    title: {
      ko: "기획 과정에서 사용된 문서 및 자료를 공유합니다",
      en: "Planning documents and resources",
      jp: "企画段階で使用した資料を共有します",
    },
  },
  {
    order: "08",
    path: "/troubleshooting",
    label: {
      ko: "트러블슈팅",
      en: "Troubleshooting",
      jp: "トラブルシューティング",
    },
    title: {
      ko: "개발 중 겪은 이슈와 해결 과정을 기록했습니다",
      en: "Issues and solutions during development",
      jp: "開発中に発生した課題とその解決過程を記録しました",
    },
  },
  {
    order: "09",
    path: "/retrospect",
    label: {
      ko: "회고",
      en: "Retrospective",
      jp: "回顧",
    },
    title: {
      ko: "프로젝트를 마치며 느낀 점",
      en: "Reflections on the project",
      jp: "プロジェクトを終えての振り返り",
    },
  },
  {
    order: "10",
    path: "/vision",
    label: {
      ko: "비전",
      en: "Vision",
      jp: "ビジョン",
    },
    title: {
      ko: "우리의 다음 단계와 목표를 제시합니다",
      en: "Our next steps and goals",
      jp: "今後のステップと目標を示します",
    },
  },
  {
    order: "11",
    path: "/links",
    label: {
      ko: "링크",
      en: "Links",
      jp: "リンク",
    },
    title: {
      ko: "프로젝트 관련 주요 링크를 모아두었습니다",
      en: "Key links related to the project",
      jp: "プロジェクト関連の主要なリンクをまとめました",
    },
  },
];

export const STRIP_COLORS: string[] = [
  "#FFD6E8",
  "#A5D8FF",
  "#C5F7A6",
  "#FFC9DE",
  "#FFE3F2",
  "#FFC9DE",
  "#A5E4FF",
  "#CFF7A6",
  "#FFE3C4",
  "#DFF6FF",
  "#FFC9DE",
];
