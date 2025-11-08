export const COLORS = {
  background: {
    baseFrom: "#FFF7ED",
    baseTo: "#FEFCE8",
  },

  brand: {
    yellow: "#FFC94A",
    amber: "#F6A623",
    brown: "#C47A3D",
  },

  sections: [
    "#8EE1FF",
    "#C9F5A6",
    "#FFD2A6",
    "#FFD0B8",
    "#FFC1DD",
    "#8EE1FF",
    "#C9F5A6",
    "#FFD2A6",
    "#FFD0B8",
  ],
} as const;

export type CountdownTheme = {
  text: {
    primary: string;
    badge: string;
    countdownNumber: string;
  };
  surfaces: {
    timerBgFrom: string;
    timerBgTo: string;
    timerAuraFrom: string;
    timerAuraMid: string;
    timerAuraTo: string;
    timerBorder: string;
    badgeBg: string;
  };
  accents: {
    progressFrom: string;
    progressTo: string;
  };
};

export const countdownTheme: CountdownTheme = {
  text: {
    primary: "#1F2937",
    badge: COLORS.brand.brown,
    countdownNumber: "#1F2937",
  },
  surfaces: {
    timerBgFrom: COLORS.background.baseFrom,
    timerBgTo: COLORS.background.baseTo,
    timerAuraFrom: "rgba(255,201,74,0.0)",
    timerAuraMid: "rgba(255,201,74,0.18)",
    timerAuraTo: "rgba(255,252,232,0.0)",
    timerBorder: "rgba(255,201,74,0.45)",
    badgeBg: "rgba(255,255,255,0.9)",
  },
  accents: {
    progressFrom: COLORS.brand.yellow,
    progressTo: COLORS.brand.amber,
  },
};

export const countdownInlineTheme: CountdownTheme = {
  ...countdownTheme,
  surfaces: {
    ...countdownTheme.surfaces,
    timerBgFrom: "transparent",
    timerBgTo: "transparent",
    timerAuraFrom: "transparent",
    timerAuraMid: "transparent",
    timerAuraTo: "transparent",
    timerBorder: "transparent",
  },
};
