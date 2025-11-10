import { ArrowLeft } from "lucide-react";

interface BackFloatingButtonProps {
  visible: boolean;
  onClick: () => void;
}

export function BackFloatingButton({
  visible,
  onClick,
}: BackFloatingButtonProps) {
  if (!visible) return null;

  return (
    <button
      onClick={onClick}
      className="
        absolute -left-13 top-1/2 -translate-y-1/2
        flex h-20 w-20 items-center justify-center
        rounded-full bg-[#FFC94A]
        border-8 border-white
        text-white
        shadow-[0_14px_40px_rgba(0,0,0,0.22)]
        hover:shadow-[0_16px_40px_rgba(15,23,42,0.22)]
        hover:scale-105
        transition-all
        z-20
      "
    >
      <ArrowLeft className="h-8 w-8" />
    </button>
  );
}
