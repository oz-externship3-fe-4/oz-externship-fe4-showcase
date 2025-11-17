import type { ReactNode } from "react";

export type FolderColor = "pink" | "green" | "blue";

const FOLDER_GRADIENT: Record<FolderColor, { from: string; to: string }> = {
  pink: { from: "#FFD0DC", to: "#FFEAF0" },
  green: { from: "#DAF5A8", to: "#F0FFD8" },
  blue: { from: "#CFE8FF", to: "#E9F5FF" },
};

export interface FolderIconProps {
  label: string;
  color: FolderColor;
  href?: string;
  iconSrc?: string;
  icon?: ReactNode;
}

export function FolderIcon({
  label,
  color,
  href,
  iconSrc,
  icon,
}: FolderIconProps) {
  const gradientId = `folder-grad-${color}-${label.replace(/\s+/g, "-")}`;
  const { from, to } = FOLDER_GRADIENT[color];

  const content = (
    <>
      <div className="flex flex-col items-center gap-2 cursor-pointer">
        <div className="relative">
          <svg
            viewBox="0 0 160 120"
            className="h-[150px] w-[210px] md:h-[200px] md:w-[210px] drop-shadow-[0_10px_25px_rgba(15,23,42,0.06)] transition-transform hover:scale-[1.03]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={from} />
                <stop offset="100%" stopColor={to} />
              </linearGradient>
            </defs>

            <path
              d="M14 38C14 30.8 19.8 25 27 25H61C64 25 66.9 26.3 68.9 28.7L73 33.6C74.3 35.2 76.3 36.2 78.4 36.2H133C140.2 36.2 146 42 146 49.2V94C146 101.2 140.2 107 133 107H27C19.8 107 14 101.2 14 94V38Z"
              fill={`url(#${gradientId})`}
              stroke="#E5E7EB"
              strokeWidth={1.2}
            />
            <path
              d="M14 46H146"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth={1}
            />
          </svg>
          {(iconSrc || icon) && (
            <div className="absolute left-1/2 top-[46px] -translate-x-1/2 flex items-center justify-center pt-12">
              {iconSrc && (
                <img
                  src={iconSrc}
                  alt="icon"
                  className="h-13 w-13 object-contain opacity-80"
                />
              )}
              {!iconSrc && icon}
            </div>
          )}
        </div>

        <span className="text-xl font-extrabold text-slate-800">{label}</span>
      </div>
    </>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
