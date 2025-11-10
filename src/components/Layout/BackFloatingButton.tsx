import { ArrowLeft } from "lucide-react";
import { useRef } from "react";
import { useHoverGsap } from "../../hooks/animations/useHoverGsap";

interface BackFloatingButtonProps {
  visible: boolean;
  onClick: () => void;
}

export function BackFloatingButton({
  visible,
  onClick,
}: BackFloatingButtonProps) {
  const backButtonWrapperRef = useRef<HTMLDivElement | null>(null);
  const backButtonCircleRef = useRef<HTMLDivElement | null>(null);

  useHoverGsap(backButtonWrapperRef, backButtonCircleRef, {
    scale: 1.12,
    translateY: 0,
    rotate: 0,
    iconTranslateX: 0,
    shadowStart: "0 14px 40px rgba(0,0,0,0.22)",
    shadowEnd: "0 18px 48px rgba(0,0,0,0.28)",
  });

  if (!visible) {
    return null;
  }

  return (
    <div
      ref={backButtonWrapperRef}
      className="
        absolute -left-13 top-1/2 -translate-y-1/2
        flex items-center justify-center
        z-20
      "
    >
      <div
        ref={backButtonCircleRef}
        onClick={onClick}
        className="
        flex h-20 w-20 md:h-22 md:w-22
        items-center justify-center
        rounded-full
        bg-[#FFC94A]
        border-8 border-white
        text-white
        shadow-[0_14px_40px_rgba(0,0,0,0.22)]
        cursor-pointer
      "
      >
        <ArrowLeft className="h-8 w-8" />
      </div>
    </div>
  );
}
