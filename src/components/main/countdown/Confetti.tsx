import { motion } from "framer-motion";

export function Confetti({ show, color }: { show: boolean; color?: string }) {
  if (!show) return null;
  const pieces = Array.from({ length: 24 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((_, i) => (
        <motion.span
          key={i}
          className="absolute top-1/2 left-1/2 h-1 w-2 rounded-sm"
          style={{ backgroundColor: color ?? "currentColor" }}
          initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
          animate={{
            x: (Math.random() - 0.5) * 400,
            y: (Math.random() - 0.5) * 300,
            rotate: Math.random() * 720,
            opacity: [1, 1, 0],
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
