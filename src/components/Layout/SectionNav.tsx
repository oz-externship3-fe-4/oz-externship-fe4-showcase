import { NavLink } from "react-router";
import { NAV_ITEMS } from "./layoutConfig";
import type { RetrospectiveLang } from "../../types/retrospective";

interface SectionNavProps {
  activePath: string;
  lang: RetrospectiveLang;
}

export function SectionNav({ activePath, lang }: SectionNavProps) {
  return (
    <aside className="w-64  border-r border-gray-200 px-6 py-8">
      <div className="mb-6">
        <h2 className="text-s font-semibold text-gray-400 tracking-wider uppercase">
          Menu
        </h2>
      </div>

      <nav className="space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = activePath.startsWith(item.path);

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? "bg-gray-900 text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              <span
                className={`text-xs font-semibold w-6 ${
                  isActive ? "text-gray-400" : "text-gray-400"
                }`}
              >
                {item.order}
              </span>
              <span>{item.label[lang]}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
