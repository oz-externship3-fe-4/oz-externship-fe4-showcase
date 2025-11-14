import { DEMO_CARDS } from "../demoCardData";
import type { DemoId, DemoLang } from "../demoCardData";
import { MoveLeft, MoveRight } from "lucide-react";

const FOOTER_LABELS: Record<
  DemoLang,
  {
    view: string;
    noPrev: string;
    noNext: string;
  }
> = {
  ko: {
    view: "보기",
    noPrev: "이전 없음",
    noNext: "다음 없음",
  },
  en: {
    view: "View",
    noPrev: "No previous demo",
    noNext: "No next demo",
  },
  jp: {
    view: "を見る",
    noPrev: "前のデモなし",
    noNext: "次のデモなし",
  },
};

export function DemoModalFooter({
  demoId,
  lang,
  onChangeDemo,
}: {
  demoId: DemoId;
  lang: DemoLang;
  onChangeDemo: (id: DemoId) => void;
}) {
  const index = DEMO_CARDS.findIndex((d) => d.id === demoId);
  const prev = index > 0 ? DEMO_CARDS[index - 1] : null;
  const next = index < DEMO_CARDS.length - 1 ? DEMO_CARDS[index + 1] : null;
  const labels = FOOTER_LABELS[lang]; // footer 언어별로 다르도록

  return (
    <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <button
        disabled={!prev}
        onClick={() => prev && onChangeDemo(prev.id)}
        className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-[11px] md:text-xs transition ${
          prev
            ? "border border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
            : "border border-white/5 bg-white/5 text-white/35 cursor-not-allowed"
        }`}
      >
        <MoveLeft className="h-3.5 w-3.5" />
        {prev ? `${prev.name[lang]} ${labels.view}` : labels.noPrev}
      </button>

      <button
        disabled={!next}
        onClick={() => next && onChangeDemo(next.id)}
        className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-[11px] md:text-xs transition ${
          next
            ? "border border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
            : "border border-white/5 bg-white/5 text-white/35 cursor-not-allowed"
        }`}
      >
        {next ? `${next.name[lang]} ${labels.view}` : labels.noNext}
        <MoveRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
