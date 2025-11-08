import type { HTMLAttributes } from "react";

type Props = {
  size?: number;
  thickness?: number;
} & HTMLAttributes<HTMLSpanElement>;

export function Spinner({
  size = 40,
  thickness = 3,
  className = "",
  ...rest
}: Props) {
  const s = `${size}px`;
  const ring = `${thickness}px solid currentColor`;
  return (
    <span
      role="status"
      aria-live="polite"
      aria-label="로딩 중입니다."
      className={`relative inline-block align-middle ${className}`}
      style={{ width: s, height: s, color: "#C47A3D" }}
      {...rest}
    >
      <span
        className="absolute inset-0 rounded-full animate-spin"
        style={{
          border: ring,
          borderRightColor: "transparent",
          filter: "drop-shadow(0 4px 14px rgba(196,122,61,0.45))",
        }}
      />
      <span
        className="absolute inset-[22%] rounded-full animate-spin"
        style={{
          animationDuration: "1.2s",
          border: `${Math.max(1, thickness - 1)}px solid rgba(255,255,255,0.9)`,
          borderLeftColor: "transparent",
          opacity: 0.9,
        }}
      />
      <span className="sr-only">로딩 중…</span>
    </span>
  );
}
