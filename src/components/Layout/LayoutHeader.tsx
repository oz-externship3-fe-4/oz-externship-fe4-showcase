import type { NavItem } from "./layoutConfig";
import { ShineText } from "./ShineText";

interface LayoutHeaderProps {
  activeItem: NavItem;
}

export function LayoutHeader({ activeItem }: LayoutHeaderProps) {
  const title = activeItem.title || activeItem.label;

  return (
    <header className="mb-10">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-[35px] font-extrabold">
          <ShineText text={title} />
        </h2>
        <div className="flex gap-3 text-[13px] text-slate-600">
          <button className="px-3 py-1 bg-green-100 text-green-600 rounded-full font-semibold">
            한국어
          </button>
          <button className="hover:text-slate-900 transition-colors">
            English
          </button>
          <button className="hover:text-slate-900 transition-colors">
            Japanese
          </button>
        </div>
      </div>
    </header>
  );
}
