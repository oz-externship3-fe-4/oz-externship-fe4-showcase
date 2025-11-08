import { useMemo } from "react";
import { two, ddayLabel } from "../../../utils/time";
import { InlineUnit, InlineSeparator } from "./parts/CountdownInlineUnit";
import { Confetti } from "./Confetti";
import { countdownTheme } from "../../../theme/tokens";
import { useTimeLeft } from "../../../hooks/useTimeLeft";
import type { CountdownTickerProps } from "./CountdownTicker";

type InlineProps = Omit<CountdownTickerProps, "variant">;

export default function CountdownInline({
  target,
  tick = true,
  onComplete,
  className = "",
  theme,
}: InlineProps) {
  const targetStr = typeof target === "string" ? target : target.toISOString();
  const t = theme ?? countdownTheme;
  const left = useTimeLeft(targetStr, tick, onComplete);

  const dday = useMemo(() => ddayLabel(targetStr), [targetStr]);
  const isDone = Object.values(left).every((n) => n === 0);

  const dayStr = two(left.days);
  const hourStr = two(left.hours);
  const minStr = two(left.minutes);
  const secStr = two(left.seconds);

  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${className}`}
      role="timer"
    >
      <div className="flex w-full justify-end mb-3 pr-1">
        <span
          className="rounded-full px-3 py-1 text-[11px] font-semibold shadow-sm"
          style={{
            background: "#fff",
            color: t.text.badge,
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
          }}
        >
          {dday}
        </span>
      </div>

      <div className="flex items-end justify-center gap-6">
        <InlineUnit label="DAYS" value={dayStr} theme={t} />
        <InlineSeparator theme={t} />
        <InlineUnit label="HOURS" value={hourStr} theme={t} />
        <InlineSeparator theme={t} />
        <InlineUnit label="MINUTES" value={minStr} theme={t} />
        <InlineSeparator theme={t} />
        <InlineUnit label="SECONDS" value={secStr} theme={t} />
      </div>

      <Confetti show={isDone} color={t.accents.progressTo} />
    </div>
  );
}
