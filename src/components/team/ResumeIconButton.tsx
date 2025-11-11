import type { ReactNode } from "react";

export type LinkVariant = "github" | "linkedin" | "email" | "link";

const badgeStyle: Record<LinkVariant, string> = {
  github: "bg-slate-900 text-white",
  linkedin: "bg-[#0A66C2] text-white",
  email: "bg-emerald-500 text-white",
  link: "bg-fuchsia-500 text-white",
};

export function IconButton({
  href,
  label,
  variant,
  children,
}: {
  href: string;
  label: string;
  variant: LinkVariant;
  children: ReactNode;
}) {
  const isHttp = href.startsWith("http");
  return (
    <a
      href={href}
      target={isHttp ? "_blank" : undefined}
      rel={isHttp ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="
        inline-flex items-center gap-2
        rounded-full bg-white
        px-3.5 py-1.5
        text-[11px] font-medium text-slate-800
        border border-slate-100
        shadow-sm
        hover:bg-slate-50
        transition
      "
    >
      <span
        className={`
          inline-flex h-6 w-6 items-center justify-center 
          rounded-full ${badgeStyle[variant]}
        `}
      >
        {children}
      </span>
      <span className="pr-1">{label}</span>
    </a>
  );
}
