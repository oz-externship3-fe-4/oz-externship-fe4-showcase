type TroubleFooterProps = {
  onClose: () => void;
};

export function TroubleFooter({ onClose }: TroubleFooterProps) {
  return (
    <div
      className="
        flex justify-end items-center gap-3
        px-8 py-4
        bg-linear-to-r from-emerald-400/10 via-emerald-500/6 to-transparent
        border-t border-emerald-100/60
      "
    >
      <button
        type="button"
        onClick={onClose}
        className="
          rounded-2xl bg-emerald-500 px-7 py-2.5
          text-sm font-semibold text-white
          shadow-[0_10px_28px_rgba(16,185,129,0.4)]
          hover:bg-emerald-600
          transition
        "
      >
        닫기
      </button>
    </div>
  );
}
