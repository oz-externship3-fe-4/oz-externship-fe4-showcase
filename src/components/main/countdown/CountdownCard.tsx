import { useMemo } from "react";
import { two, ddayLabel } from "../../../utils/time";
import { TimeBlock } from "./TimeBlock";
import { Confetti } from "./Confetti";
import { countdownTheme } from "../../../theme/tokens";
import { useTimeLeft } from "../../../hooks/useTimeLeft";
import type { CountdownTickerProps } from "./CountdownTicker";

type CardProps = Omit<CountdownTickerProps, "variant">;

export default function CountdownCard({
  target,
  tick = true,
  onComplete,
  className = "",
  theme,
}: CardProps) {
  const targetStr = typeof target === "string" ? target : target.toISOString();
  const t = theme ?? countdownTheme;
  const left = useTimeLeft(targetStr, tick, onComplete);

  const dday = useMemo(() => ddayLabel(targetStr), [targetStr]);
  const isDone = Object.values(left).every((n) => n === 0);

  return (
    <div
      className={`
        relative isolate w-full max-w-3xl
        rounded-3xl backdrop-blur-xl shadow-lg ${className}
      `}
      role="timer"
      style={{
        border: `1px solid ${t.surfaces.timerBorder}`,
        background: `linear-gradient(135deg, ${t.surfaces.timerBgFrom}, ${t.surfaces.timerBgTo})`,
        color: t.text.primary,
      }}
    >
      <div
        className="pointer-events-none absolute -inset-2 -z-10 rounded-2rem blur-2xl"
        style={{
          background: `linear-gradient(
            90deg,
            ${t.surfaces.timerAuraFrom},
            ${t.surfaces.timerAuraMid},
            ${t.surfaces.timerAuraTo}
          )`,
        }}
      />

      <div className="flex items-center justify-end px-5 py-3">
        <span
          className="rounded-full px-3 py-1 text-xs font-bold shadow-sm"
          style={{
            background: t.surfaces.badgeBg,
            color: t.text.badge,
          }}
        >
          {dday}
        </span>
      </div>

      <div className="flex flex-col items-center gap-4 px-4 sm:px-5 pb-6">
        <div className="flex flex-col min-[420px]:flex-row items-center justify-center gap-2">
          <div className="flex items-end justify-center">
            <TimeBlock
              label="DAYS"
              value={String(left.days)}
              size="lg"
              slotChars={2}
              align="right"
              theme={t}
            />
          </div>
          <div
            className="hidden min-[420px]:block mx-3 h-10 w-px"
            aria-hidden
            style={{ background: "rgba(0,0,0,0.06)" }}
          />
          <div className="flex items-end justify-center flex-wrap">
            <TimeBlock
              label="HOURS"
              value={two(left.hours)}
              size="lg"
              slotChars={2}
              theme={t}
            />
            <span className="px-1 sm:px-2 opacity-70 select-none shrink-0">
              :
            </span>
            <TimeBlock
              label="MINUTES"
              value={two(left.minutes)}
              size="lg"
              slotChars={2}
              theme={t}
            />
            <span className="px-1 sm:px-2 opacity-70 select-none shrink-0">
              :
            </span>
            <TimeBlock
              label="SECONDS"
              value={two(left.seconds)}
              size="lg"
              slotChars={2}
              theme={t}
            />
          </div>
        </div>
      </div>

      <Confetti show={isDone} color={t.accents.progressTo} />
    </div>
  );
}
