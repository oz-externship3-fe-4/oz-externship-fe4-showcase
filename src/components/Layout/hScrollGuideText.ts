export const HSG_TEXT = {
  ko: {
    tip: "TIP",
    message: "이 화면은 가로 슬라이드입니다. 스크롤 또는 방향키로 이동하세요!",
    disappearIn: "{n}초 뒤 사라집니다.",
  },
  en: {
    tip: "TIP",
    message: "This page is a horizontal slide. Scroll or use arrow keys!",
    disappearIn: "Disappears in {n}s",
  },
  jp: {
    tip: "ヒント",
    message: "この画面は横スライドです。スクロールまたは矢印キーで移動します！",
    disappearIn: "{n}秒後に消えます",
  },
} as const;

export type HSG_Lang = keyof typeof HSG_TEXT;
