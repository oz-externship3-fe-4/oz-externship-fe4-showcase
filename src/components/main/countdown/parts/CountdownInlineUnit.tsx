import { FlipNumber } from "../FlipNumber";
import type { CountdownTheme } from "../../../../theme/tokens";

export type InlineUnitProps = {
  label: string;
  value: string;
  theme: CountdownTheme;
};

export function InlineUnit({ label, value, theme }: InlineUnitProps) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="font-extrabold leading-none tracking-tight tabular-nums select-none"
        style={{
          fontSize: "clamp(52px, 7vw, 86px)",
          color: theme.text.countdownNumber,
          letterSpacing: "-0.02em",
        }}
      >
        <FlipNumber value={value} slotChars={2} align="center" />
      </div>
      <div
        className="
          mt-3 text-[10px] uppercase select-none
          tracking-[0.16em] text-[rgba(31,41,55,0.65)]
        "
      >
        {label}
      </div>
    </div>
  );
}

export type InlineSeparatorProps = {
  theme: CountdownTheme;
};

export function InlineSeparator({ theme }: InlineSeparatorProps) {
  return (
    <span
      className="pb-8 select-none"
      style={{
        fontSize: "clamp(40px,5vw,60px)",
        color: theme.text.countdownNumber,
        fontWeight: 700,
      }}
    >
      :
    </span>
  );
}
