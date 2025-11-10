import { motion } from "framer-motion";

interface ShineTextProps {
  text: string;
  duration?: number;
}

export function ShineText({ text, duration = 2.6 }: ShineTextProps) {
  const gradient = `
    linear-gradient(
      90deg,
      #111827,
      #374151,
      #6B7280,
      #9CA3AF,
      #D1D5DB,
      #6B7280,
      #374151,
      #111827
    )
  `;

  return (
    <motion.span
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        display: "inline-block",
        backgroundImage: gradient,
        backgroundSize: "300% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",

        textShadow: `
          0 1px 2px rgba(15,23,42,0.18),
          0 3px 8px rgba(148,163,253,0.28)
        `,
        fontWeight: 800,
      }}
    >
      {text}
    </motion.span>
  );
}
