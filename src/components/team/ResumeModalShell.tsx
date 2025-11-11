import { AnimatePresence, motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface ResumeModalShellProps {
  open: boolean;
  onClose: () => void;
  overlay: Variants;
  panel: Variants;
  children: ReactNode;
}

export function ResumeModalShell({
  open,
  onClose,
  overlay,
  panel,
  children,
}: ResumeModalShellProps) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        variants={overlay}
        initial="hidden"
        animate="show"
        exit="exit"
        onClick={(e) => e.currentTarget === e.target && onClose()}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <motion.div
          variants={panel}
          className="
            relative w-[800px] max-w-5xl
            rounded-[40px]
            bg-[#F7FAFC]
            border border-white/70
            shadow-[0_22px_80px_rgba(15,23,42,0.40)]
            overflow-hidden
          "
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
