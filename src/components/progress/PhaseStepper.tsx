import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import gsap from "gsap";
import { PHASES, type PhaseId } from "./progressConfig";

interface PhaseStepperProps {
  completedPhaseIds: PhaseId[];
}

export function PhaseStepper({ completedPhaseIds }: PhaseStepperProps) {
  const lineRef = useRef<HTMLDivElement | null>(null);
  const stepSquareRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    PHASES.forEach((phase, i) => {
      const square = stepSquareRefs.current[i];
      if (!square) return;

      const done = completedPhaseIds.includes(phase.id);

      gsap.to(square, {
        backgroundColor: done ? "#FFC94A" : "#FFFFFF",
        borderColor: "#FFC94A",
        duration: 0.2,
        ease: "power2.out",
      });

      const icon = square.querySelector("svg");
      if (icon) {
        gsap.to(icon, {
          color: done ? "#FFFFFF" : "#FFC94A",
          duration: 0.2,
          ease: "power2.out",
        });
      }
    });

    if (lineRef.current) {
      const totalSegments = Math.max(PHASES.length - 1, 1);
      const count = completedPhaseIds.length;
      const ratio = count <= 1 ? 0 : (count - 1) / totalSegments;

      gsap.to(lineRef.current, {
        scaleX: Math.min(ratio, 1),
        transformOrigin: "left center",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [completedPhaseIds]);

  return (
    <div className="relative mt-4 mb-10 pl-4 pr-10">
      <div className="absolute left-3 right-3 top-[26px] h-2.5 -translate-y-1/2 bg-slate-100 rounded-full" />

      <div
        ref={lineRef}
        className="
          absolute left-3 right-3 top-[27px] h-2.5
          -translate-y-1/2 bg-[#FFC94A]
          rounded-full origin-left
          scale-x-0
        "
      />

      <div className="relative flex justify-between">
        {PHASES.map((p, i) => (
          <div
            key={p.id}
            className="flex flex-col items-center gap-2 text-[11px] text-slate-600"
          >
            <div
              ref={(el) => {
                if (el) stepSquareRefs.current[i] = el;
              }}
              className="
                flex h-11 w-11 items-center justify-center
                rounded-lg
                border-2 border-[#FFC94A]
                bg-white
                shadow-[0_2px_6px_rgba(0,0,0,0.04)]
              "
            >
              <Check className="h-7 w-7 text-[#FFC94A]" />
            </div>
            <span>{p.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
