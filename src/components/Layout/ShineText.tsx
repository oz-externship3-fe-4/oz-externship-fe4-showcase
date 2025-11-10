import { motion } from "framer-motion";

interface ShineTextProps {
  text: string;
  duration?: number;
  glow?: boolean;
}

export function ShineText({ text, duration = 4, glow = true }: ShineTextProps) {
  const pastelGradient = `
    linear-gradient(
      90deg,
      rgba(142, 225, 255, 0.85),  /* Sky Blue */
      rgba(201, 245, 166, 0.9),   /* Mint */
      rgba(255, 208, 184, 0.95),  /* Peach Pink */
      rgba(142, 225, 255, 0.85)
    )
  `;

  return (
    <motion.span
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "200% 50%" }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        display: "inline-block",
        backgroundImage: pastelGradient,
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        textShadow: glow
          ? `
              0 0 8px rgba(255,255,255,0.6),
              0 0 16px rgba(255,255,255,0.4),
              0 0 22px rgba(142,225,255,0.3)
            `
          : undefined,
        fontWeight: 800,
      }}
    >
      {text}
    </motion.span>
  );
}
