import { Download, Play } from "lucide-react";
import { DEMO_CARDS } from "../demoCardData";
import type { DemoId, DemoLang } from "../demoCardData";

export function DemoModalBody({
  demoId,
  lang,
}: {
  demoId: DemoId;
  lang: DemoLang;
}) {
  const demo = DEMO_CARDS.find((d) => d.id === demoId);
  if (!demo) return null;

  const webm = `/videos/${demo.id}.webm`;
  const mp4 = `/videos/${demo.id}.mp4`;
  const poster = `/videos/${demo.id}.png`;

  return (
    <div
      className="
        overflow-hidden rounded-3xl
        border border-white/12
        bg-slate-950
      "
    >
      <div className="relative bg-black">
        <div className="pointer-events-none absolute left-4 top-4 z-10 rounded-md bg-black/60 px-2 py-1 text-[10px] text-white/80">
          DEMO • {demoId}
        </div>

        <div className="aspect-video w-full">
          <video
            key={demoId}
            controls
            poster={poster}
            preload="metadata"
            className="h-full w-full"
          >
            <source src={webm} type="video/webm" />
            <source src={mp4} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="bg-[#0B2858] px-6 py-5 md:px-8 md:py-6 text-white">
        <h2 className="text-lg md:text-xl font-bold tracking-tight">
          {demo.name[lang]}
        </h2>

        {demo.desc && (
          <p className="mt-2 text-[11px] md:text-xs leading-relaxed text-slate-100/85">
            {demo.desc[lang]}
          </p>
        )}

        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-wrap gap-1.5">
            {demo.tags[lang].map((t) => (
              <span
                key={t}
                className="
          rounded-full 
          bg-white/10 
          px-2.5 py-0.5 
          text-[10px] md:text-xs 
          text-white/85 
          border border-white/20
          shadow-sm
        "
              >
                #{t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-end gap-2">
            <a
              href={webm}
              download
              className="
                inline-flex items-center gap-2
                rounded-full border border-white/20
                bg-white/5 px-3.5 py-1.5
                text-[11px] md:text-xs text-white/85
                hover:bg-white/10 transition
              "
            >
              <Download className="h-3.5 w-3.5" />
              영상 다운로드
            </a>
            <a
              href={webm}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center gap-2
                rounded-full bg-sky-500 px-3.5 py-1.5
                text-[11px] md:text-xs font-semibold text-white
                hover:bg-sky-400 transition
              "
            >
              <Play className="h-3.5 w-3.5" />새 창에서 재생
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
