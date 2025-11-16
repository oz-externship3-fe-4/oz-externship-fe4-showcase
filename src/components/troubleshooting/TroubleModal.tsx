import { AnimatePresence, motion } from "framer-motion";
import { pickText } from "../../utils/i18n";
import type { TroubleItem, TS_Lang } from "../../types/troubleshooting";
import { CodeBlock } from "../codeblock/CodeBlock";
import { TroubleHeader } from "./TroubleHeader";
import { TroubleFooter } from "./TroubleFooter";
import { renderBodyWithInlineCode } from "../../utils/renderInlineCode";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";

interface TroubleModalProps {
  open: boolean;
  item: TroubleItem | null;
  lang: TS_Lang;
  onClose: () => void;
  setLang?: (lang: TS_Lang) => void;
}

export function TroubleModal({
  open,
  item,
  lang,
  onClose,
  setLang,
}: TroubleModalProps) {
  useBodyScrollLock(open);
  if (!open || !item) return null;

  const video = item.video;
  const videoBase = video?.basePath;
  const poster = video?.poster ?? (videoBase ? `${videoBase}.png` : undefined);
  const webm = videoBase ? `${videoBase}.webm` : undefined;
  const mp4 = videoBase ? `${videoBase}.mp4` : undefined;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => e.currentTarget === e.target && onClose()}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

        <motion.div
          className="
            relative w-full max-w-4xl
            rounded-4xl bg-white
            border border-white/70
            shadow-[0_22px_80px_rgba(15,23,42,0.40)]
            overflow-hidden
            max-h-[90vh]
            flex flex-col
          "
          initial={{ y: 24, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 16, opacity: 0, scale: 0.98 }}
          transition={{ type: "tween", duration: 0.18 }}
        >
          <TroubleHeader owner={item.owner} lang={lang} setLang={setLang} />
          {/* Outlet */}
          <div
            className="
              flex-1 overflow-y-auto scrollbar-hide
              px-8 py-6 space-y-4
              bg-linear-to-b from-[#F7FAFF] via-[#FFFFFF] to-[#FFF7FB]
            "
          >
            {videoBase && (
              <section>
                <div
                  className="
                    overflow-hidden rounded-3xl
                    border border-slate-200
                    bg-slate-900
                    shadow-[0_14px_45px_rgba(15,23,42,0.35)]
                  "
                >
                  <div className="relative">
                    <div className="pointer-events-none absolute left-4 top-4 z-10 rounded-md bg-black/60 px-2 py-1 text-[10px] text-white/80">
                      VIDEO • {item.id}
                    </div>

                    <div className="aspect-video w-full bg-black">
                      <video
                        key={item.id}
                        controls
                        poster={poster}
                        preload="metadata"
                        className="h-full w-full"
                      >
                        {webm && <source src={webm} type="video/webm" />}
                        {mp4 && <source src={mp4} type="video/mp4" />}
                      </video>
                    </div>
                  </div>

                  {video?.label && (
                    <div className="bg-slate-900 px-5 py-3 text-[11px] text-slate-100/85">
                      {pickText(video.label, lang)}
                    </div>
                  )}
                </div>
              </section>
            )}
            {item.sections.map((s, i) => {
              const bodyText = s.body ? pickText(s.body, lang) : "";
              const bodyLines = bodyText
                .split("\n")
                .map((line) => line.trim())
                .filter(Boolean);

              return (
                <section key={i}>
                  <div
                    className="
                      rounded-3xl border border-slate-100
                      bg-white/80
                      px-6 py-5
                      shadow-[0_10px_35px_rgba(15,23,42,0.04)]
                    "
                  >
                    <h4 className="mb-2 text-[18px] font-bold text-slate-800">
                      {pickText(s.heading, lang)}
                    </h4>

                    {bodyLines.length > 0 && (
                      <ul className="mt-1 list-disc space-y-1 pl-4 text-[16px] leading-relaxed text-slate-700">
                        {bodyLines.map((line, idx) => (
                          <li key={idx}>{renderBodyWithInlineCode(line)}</li>
                        ))}
                      </ul>
                    )}

                    {s.code && (
                      <div
                        className="
                          mt-4 rounded-2xl border border-slate-200
                          bg-slate-50 px-3 py-3
                        "
                      >
                        <CodeBlock
                          language={s.codeLang ?? "ts"}
                          code={s.code}
                        />
                      </div>
                    )}
                  </div>
                </section>
              );
            })}
          </div>

          <TroubleFooter onClose={onClose} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
