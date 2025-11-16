import { useEffect, useMemo, useState } from "react";

interface VisionCodeCardProps {
  code: string;
  className?: string;
  speedMs?: number;
}

function buildCharStyles(code: string): string[] {
  const styles = Array(code.length).fill("");

  const mark = (regex: RegExp, className: string) => {
    let match: RegExpExecArray | null;
    while ((match = regex.exec(code)) !== null) {
      const start = match.index;
      const end = start + match[0].length;
      for (let i = start; i < end; i++) {
        styles[i] = className;
      }
    }
  };

  mark(/\b(const|let|while|true)\b/g, "text-sky-300"); // 키워드
  mark(/\b(status|passion|learn|build|improve)\b/g, "text-amber-200"); // 식별자
  mark(/'[^']*'/g, "text-fuchsia-300"); // 문자열
  mark(/\/\/.*/gm, "text-emerald-300"); // 주석

  return styles;
}

export function VisionCodeCard({
  code,
  className = "",
  speedMs = 80,
}: VisionCodeCardProps) {
  const [visibleLength, setVisibleLength] = useState(0);

  const charStyles = useMemo(() => buildCharStyles(code), [code]);

  useEffect(() => {
    setVisibleLength(0);

    let frameId: number;
    let lastTime = performance.now();

    const step = (time: number) => {
      const diff = time - lastTime;
      if (diff >= speedMs) {
        lastTime = time;
        setVisibleLength((prev) => {
          if (prev >= code.length) {
            return prev;
          }
          return prev + 1;
        });
      }
      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, [code, speedMs]);

  return (
    <div
      className={
        "w-full max-w-[440px] rounded-3xl bg-slate-900/98 px-8 py-5 text-sm text-slate-50 shadow-[0_22px_55px_rgba(15,23,42,0.75)] " +
        className
      }
    >
      <pre className="relative font-mono text-[14px] leading-relaxed whitespace-pre h-[110x]">
        <code>
          {Array.from({ length: visibleLength }).map((_, i) => {
            const ch = code[i];
            const cls = charStyles[i];

            if (ch === "\n") {
              return <br key={i} />;
            }

            return (
              <span key={i} className={cls}>
                {ch === " " ? "\u00A0" : ch}
              </span>
            );
          })}
        </code>
      </pre>
    </div>
  );
}
