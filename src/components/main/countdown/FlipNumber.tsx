import { useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const digitVariants = {
  initial: (dir: number) => ({ y: dir > 0 ? 14 : -14, opacity: 0 }),
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 320, damping: 24 },
  },
  exit: (dir: number) => ({
    y: dir > 0 ? -14 : 14,
    opacity: 0,
    transition: { duration: 0.16 },
  }),
};

export function FlipNumber({
  value,
  slotChars = 2,
  align = "center",
}: {
  value: string;
  slotChars?: number;
  align?: "left" | "center" | "right";
}) {
  const prevRef = useRef(value);
  const direction = useMemo(() => {
    const prev = prevRef.current;
    prevRef.current = value;
    const a = Number(value),
      b = Number(prev);
    if (Number.isNaN(a) || Number.isNaN(b)) return -1;
    return a === b ? 0 : a < b ? -1 : 1;
  }, [value]);

  const textAlign =
    align === "right"
      ? "text-right"
      : align === "left"
      ? "text-left"
      : "text-center";

  return (
    <div
      className={`relative overflow-hidden leading-none will-change-transform tabular-nums ${textAlign}`}
      style={{ height: "1.1em", width: `${slotChars}ch` }}
    >
      <AnimatePresence custom={direction} mode="popLayout" initial={false}>
        <motion.span
          key={value}
          custom={direction}
          variants={digitVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute left-0 right-0 top-0"
          style={{ lineHeight: "1.1em" }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
      <span aria-hidden="true" className="invisible">
        {"8".repeat(slotChars)}
      </span>
    </div>
  );
}
