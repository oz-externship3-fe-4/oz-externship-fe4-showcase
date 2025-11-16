import { motion, AnimatePresence } from "framer-motion";
import type { DemoId, DemoLang } from "./demoCardData";

import { DemoModalBody } from "./modal/DemoModalBody";
import { DemoModalFooter } from "./modal/DemoModalFooter";

interface DemoVideoModalProps {
  open: boolean;
  demoId: DemoId | null;
  lang: DemoLang;
  onClose: () => void;
  onChangeDemo: (id: DemoId) => void;
}

export function DemoVideoModal({
  open,
  demoId,
  lang,
  onClose,
  onChangeDemo,
}: DemoVideoModalProps) {
  return (
    <AnimatePresence>
      {open && demoId && (
        <motion.div
          key="demo-modal"
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            key={demoId}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            className="
              relative z-10
              mx-4 w-full max-w-5xl
              max-h-[90vh] overflow-y-auto
              rounded-3xl border border-white/10
              bg-linear-to-br from-slate-950 via-black to-slate-900
              p-4 md:p-4
              shadow-[0_30px_120px_rgba(0,0,0,0.7)]
              flex flex-col gap-4
            "
          >
            <DemoModalBody demoId={demoId} lang={lang} />

            <DemoModalFooter
              demoId={demoId}
              lang={lang}
              onChangeDemo={onChangeDemo}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
