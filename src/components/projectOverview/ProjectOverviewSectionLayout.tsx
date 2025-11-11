import type { ReactNode } from "react";

interface LayoutProps {
  label: string;
  title: string;
  description: ReactNode;
  children?: ReactNode;
  hideImageArea?: boolean;
  imagePosition?: "left" | "right";
}

export function ProjectOverviewSectionLayout({
  label,
  title,
  description,
  children,
  hideImageArea = false,
  imagePosition = "right",
}: LayoutProps) {
  const ImageArea = (
    <div className="flex-1 flex items-center justify-center pl-16">
      {children ?? (
        <div
          className="
            w-[460px] h-[280px]
            rounded-3xl bg-white/90
            shadow-[0_18px_45px_rgba(15,23,42,0.16)]
            border border-white/80
            flex items-center justify-center
            text-slate-300 text-sm
          "
        >
          이미지 집어넣자넹~
        </div>
      )}
    </div>
  );

  return (
    <section
      className="
        w-full h-full
        flex items-start gap-10
        pr-40
      "
    >
      {!hideImageArea && imagePosition === "left" && ImageArea}

      <div className="flex flex-col mt-10 max-w-4xl">
        <div className="text-2xl font-extrabold text-amber-400 tracking-[0.15em] uppercase mb-3">
          {label}
        </div>
        <h3 className="text-[26px] font-extrabold text-slate-900 mb-4 leading-tight">
          {title}
        </h3>
        <div className="text-[14px] leading-relaxed text-slate-700">
          {description}
        </div>
      </div>

      {!hideImageArea && imagePosition === "right" && ImageArea}
    </section>
  );
}
