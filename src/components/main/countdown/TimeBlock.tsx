import type { CountdownTheme } from "../../../theme/tokens";
import { FlipNumber } from "./FlipNumber";

export function TimeBlock({
  label,
  value,
  size,
  slotChars,
  align,
  theme,
}: {
  label: string;
  value: string;
  size: "sm" | "md" | "lg";
  slotChars: number;
  align?: "left" | "center" | "right";
  theme?: CountdownTheme;
}) {
  const sizeCls =
    size === "lg"
      ? "[font-size:clamp(28px,9vw,56px)]"
      : size === "sm"
      ? "[font-size:clamp(18px,6vw,28px)]"
      : "[font-size:clamp(24px,7.5vw,40px)]";

  return (
    <div className="flex flex-col items-center gap-1 px-2 sm:px-3">
      <div
        className={`${sizeCls} font-semibold tracking-tight`}
        style={{
          textShadow: `0 0 8px ${
            theme ? "rgba(196,122,61,0.25)" : "rgba(100,100,255,0.3)"
          }`,
          color: theme?.text.countdownNumber ?? "#1F2937",
        }}
      >
        <FlipNumber value={value} slotChars={slotChars} align={align} />
      </div>
      <div className="text-[9px] sm:text-[10px] uppercase tracking-wider opacity-70">
        {label}
      </div>
    </div>
  );
}
