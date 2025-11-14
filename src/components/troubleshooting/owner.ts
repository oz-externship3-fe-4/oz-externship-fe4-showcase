export const OWNER_STYLES: Record<
  string,
  {
    cardBg: string;
    frameBg: string;
    iconColor: string;
  }
> = {
  윤경복: {
    cardBg: "bg-white/90",
    frameBg: "bg-[linear-gradient(135deg,#ffffff,#f5f8ff,#edf5ff)]",
    iconColor: "text-slate-800",
  },

  이원희: {
    cardBg: "bg-white/90",
    frameBg: "bg-[linear-gradient(135deg,#ffffff,#fff5f5,#ffeceb)]",
    iconColor: "text-slate-800",
  },

  홍엽: {
    cardBg: "bg-white/90",
    frameBg: "bg-[linear-gradient(135deg,#ffffff,#f6f9ff,#edf3ff)]",
    iconColor: "text-slate-800",
  },

  서단비: {
    cardBg: "bg-white/90",
    frameBg: "bg-[linear-gradient(135deg,#ffffff,#fffaf0,#fff4da)]",
    iconColor: "text-slate-800",
  },

  김현진: {
    cardBg: "bg-white/90",
    frameBg: "bg-[linear-gradient(135deg,#ffffff,#f3fff7,#e9fdf1)]",
    iconColor: "text-slate-800",
  },
} as const;
