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

export type NavItem = {
  order: string;
  label: string;
  path: string;
  title: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    order: "01",
    label: "팀소개",
    path: "/intro",
    title: "우리 팀을 소개합니다!",
  },
  {
    order: "02",
    label: "프로젝트 개요",
    path: "/overview",
    title: "환영합니다!",
  },
  {
    order: "03",
    label: "컨벤션",
    path: "/convention",
    title: "코딩 컨벤션 및 협업 규칙을 정리했습니다",
  },
  {
    order: "04",
    label: "기술스택",
    path: "/tech",
    title: "프로젝트에 사용된 기술 스택을 소개합니다",
  },
  {
    order: "05",
    label: "데모",
    path: "/demo",
    title: "실제 구현된 데모를 확인해보세요",
  },
  {
    order: "06",
    label: "기획자료",
    path: "/plan",
    title: "기획 과정에서 사용된 문서 및 자료를 공유합니다",
  },
  {
    order: "07",
    label: "트러블슈팅",
    path: "/troubleshooting",
    title: "개발 중 겪은 이슈와 해결 과정을 기록했습니다",
  },
  {
    order: "08",
    label: "회고",
    path: "/retrospect",
    title: "프로젝트를 마치며 느낀 점과 개선점을 공유합니다",
  },
  {
    order: "09",
    label: "비전",
    path: "/vision",
    title: "우리의 다음 단계와 목표를 제시합니다",
  },
  {
    order: "10",
    label: "링크",
    path: "/links",
    title: "프로젝트 관련 주요 링크를 모아두었습니다",
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
];
