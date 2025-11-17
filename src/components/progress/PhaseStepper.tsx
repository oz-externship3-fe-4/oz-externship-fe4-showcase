import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import gsap from "gsap";
import { PHASES, type PhaseId } from "./progressConfig";
import type { RetrospectiveLang } from "../../types/retrospective";

interface PhaseStepperProps {
  completedPhaseIds: PhaseId[];
  lang: RetrospectiveLang;
}

export function PhaseStepper({ completedPhaseIds, lang }: PhaseStepperProps) {
  const baseLineElementRef = useRef<HTMLDivElement | null>(null);
  const progressLineElementRef = useRef<HTMLDivElement | null>(null);
  const stepSquareElementRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const squares = stepSquareElementRefs.current;
    const baseLineElement = baseLineElementRef.current;
    const progressLineElement = progressLineElementRef.current;

    if (!squares.length || !baseLineElement || !progressLineElement) {
      return;
    }
    PHASES.forEach((phase, index) => {
      const squareElement = squares[index];
      if (!squareElement) return;

      const isCompleted = completedPhaseIds.includes(phase.id);

      gsap.to(squareElement, {
        backgroundColor: isCompleted ? "#FFC94A" : "#FFFFFF",
        borderColor: "#FFC94A",
        duration: 0.2,
        ease: "power2.out",
      });

      const iconElement = squareElement.querySelector("svg");
      if (iconElement) {
        gsap.to(iconElement, {
          color: isCompleted ? "#FFFFFF" : "#FFC94A",
          duration: 0.2,
          ease: "power2.out",
        });
      }
    });

    const firstSquareElement = squares[0];
    const lastSquareElement = squares[PHASES.length - 1];

    if (firstSquareElement && lastSquareElement) {
      const baseStartX =
        firstSquareElement.offsetLeft + firstSquareElement.offsetWidth / 2;
      const baseEndX =
        lastSquareElement.offsetLeft + lastSquareElement.offsetWidth / 2;
      const baseWidth = Math.max(baseEndX - baseStartX, 0);

      gsap.set(baseLineElement, {
        left: baseStartX,
        width: baseWidth,
      });
    }

    const completedIndexes = PHASES.map((phase, index) =>
      completedPhaseIds.includes(phase.id) ? index : -1
    ).filter((index) => index >= 0);

    if (completedIndexes.length === 0) {
      gsap.to(progressLineElement, {
        width: 0,
        duration: 0.25,
        ease: "power2.out",
      });
      return;
    }

    const lastCompletedIndex = completedIndexes[completedIndexes.length - 1];

    if (lastCompletedIndex === 0) {
      gsap.to(progressLineElement, {
        width: 0,
        duration: 0.25,
        ease: "power2.out",
      });
      return;
    }

    const lastCompletedSquareElement = squares[lastCompletedIndex];

    if (!firstSquareElement || !lastCompletedSquareElement) {
      return;
    }

    const progressStartX =
      firstSquareElement.offsetLeft + firstSquareElement.offsetWidth / 2;
    const progressEndX =
      lastCompletedSquareElement.offsetLeft +
      lastCompletedSquareElement.offsetWidth / 2;
    const progressWidth = Math.max(progressEndX - progressStartX, 0);

    gsap.to(progressLineElement, {
      left: progressStartX,
      width: progressWidth,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [completedPhaseIds]);

  return (
    <div className="relative mt-4 mb-5 pl-4 pr-10">
      <div
        ref={baseLineElementRef}
        className="
          absolute top-[30px] h-2.5
          -translate-y-1/2 bg-slate-100
          rounded-full
        "
        style={{ left: 0, width: 0 }}
      />

      <div
        ref={progressLineElementRef}
        className="
          absolute top-[30px] h-2.5
          -translate-y-1/2 bg-[#FFC94A]
          rounded-full
        "
        style={{ left: 0, width: 0 }}
      />

      <div className="relative flex justify-between">
        {PHASES.map((phase, index) => (
          <div
            key={phase.id}
            className="flex flex-col items-center gap-2 text-[11px] text-slate-600"
          >
            <div
              ref={(element) => {
                if (element) {
                  stepSquareElementRefs.current[index] = element;
                }
              }}
              className="
                flex h-15 w-15 items-center justify-center
                rounded-lg
                border-2 border-[#FFC94A]
                bg-white
                shadow-[0_2px_6px_rgba(0,0,0,0.04)]
              "
            >
              <Check className="h-7 w-7 text-[#FFC94A]" />
            </div>
            <span>{phase.label[lang]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
