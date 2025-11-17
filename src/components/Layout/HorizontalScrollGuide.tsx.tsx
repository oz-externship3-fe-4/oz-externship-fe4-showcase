import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HSG_TEXT, type HSG_Lang } from "./hScrollGuideText";

interface HorizontalScrollGuideProps {
  pageLabel?: string;
  lang: HSG_Lang;
}

export function HorizontalScrollGuide({
  pageLabel,
  lang,
}: HorizontalScrollGuideProps) {
  const [open, setOpen] = useState(true);
  const [count, setCount] = useState(10); // 10초 카운트다운
  const t = HSG_TEXT[lang];

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    // 10초 뒤 자동 닫힘
    const timeout = setTimeout(() => setOpen(false), 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="hsg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="
            fixed bottom-8 left-1/2 -translate-x-1/2
            z-40 flex items-center gap-3
            rounded-full bg-white/95 backdrop-blur
            px-4 py-2
            text-xs md:text-sm text-slate-800
            shadow-[0_16px_40px_rgba(15,23,42,0.25)]
          "
        >
          <span className="hidden md:inline-flex px-2 py-0.5 text-[10px] rounded-full bg-slate-100 text-slate-500">
            {pageLabel ?? t.tip}
          </span>

          <span>{t.message}</span>

          <span className="ml-2 text-slate-400 text-[11px]">
            {t.disappearIn.replace("{n}", String(count))}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
