export const OWNER_STYLES: Record<
  string,
  {
    cardBg: string;
    frameBg: string;
    iconColor: string;
  }
> = {
  윤경복: {
    cardBg: "bg-[radial-gradient(circle_at_30%_20%,#e0f2ff,#ffffff)]",
    frameBg: "bg-[radial-gradient(circle_at_20%_20%,#c7eaff,#e8f6ff,#ffffff)]",
    iconColor: "text-sky-500",
  },

  이원희: {
    cardBg: "bg-[radial-gradient(circle_at_30%_20%,#dffff3,#ffffff)]",
    frameBg: "bg-[radial-gradient(circle_at_20%_20%,#b6f4df,#dffcf5,#ffffff)]",
    iconColor: "text-teal-500",
  },

  홍엽: {
    cardBg: "bg-[radial-gradient(circle_at_30%_20%,#ffe9e9,#ffffff)]",
    frameBg: "bg-[radial-gradient(circle_at_20%_20%,#ffd0d3,#ffe5e7,#ffffff)]",
    iconColor: "text-rose-400",
  },

  서단비: {
    cardBg: "bg-[radial-gradient(circle_at_30%_20%,#f3e8ff,#ffffff)]",
    frameBg: "bg-[radial-gradient(circle_at_20%_20%,#e5d5ff,#f3e8ff,#ffffff)]",
    iconColor: "text-violet-400",
  },

  김현진: {
    cardBg: "bg-[radial-gradient(circle_at_30%_20%,#fffbd6,#ffffff)]",
    frameBg: "bg-[radial-gradient(circle_at_20%_20%,#fff1a8,#fffbdc,#ffffff)]",
    iconColor: "text-amber-400",
  },
} as const;
