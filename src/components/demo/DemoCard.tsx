import { motion } from "framer-motion";
import type { DemoCardItem, DemoLang } from "./demoCardData";
import { Clapperboard } from "lucide-react";
import { useRef } from "react";
import { useHoverGsap } from "../../hooks/animations/useHoverGsap";

interface DemoCardProps {
  demo: DemoCardItem;
  lang: DemoLang;
  onClick: () => void;
}

export function DemoCard({ demo, lang, onClick }: DemoCardProps) {
  const cardRef = useRef<HTMLButtonElement | null>(null);

  useHoverGsap(cardRef, cardRef, {
    scale: 1.03,
    translateY: 1.5,
    rotate: 0,
    iconTranslateX: 3,
    duration: 0.12,
  });

  return (
    <motion.button
      ref={cardRef}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className="
        group relative overflow-hidden
        rounded-3xl text-left outline-none
        transition mt-2 mr-2 ml-2
      "
    >
      <div
        className="
          flex h-full flex-col
          rounded-3xl bg-neutral-900/95
          backdrop-blur overflow-hidden
        "
      >
        <div className="relative w-full aspect-video bg-black">
          <img
            src={`/videos/${demo.id}.png`}
            alt={`${demo.name[lang]} 썸네일`}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>

        <div
          className="
            flex flex-1 flex-col justify-between
            bg-linear-to-b from-slate-900 via-slate-950 to-black
            px-4 py-3 md:px-5 md:py-4
          "
        >
          <div>
            <h3 className="text-sm md:text-base font-bold text-white">
              {demo.name[lang]}
            </h3>

            <div className="mt-2 flex flex-wrap gap-1.5">
              {demo.tags[lang].slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="
          rounded-full 
          bg-white/10 
          px-2 py-0.5 
          text-[10px] md:text-xs 
          text-white/80 
          border border-white/10
        "
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-3 flex justify-end">
            <span
              className="
                inline-flex items-center gap-1
                rounded-full bg-white/10 px-3 py-1
                text-[11px] md:text-xs font-semibold text-white
                ring-1 ring-white/20
                transition group-hover:bg-white/15
              "
            >
              <Clapperboard className="h-3.5 w-3.5" />
              Demo
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
