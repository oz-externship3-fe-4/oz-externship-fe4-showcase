import { Outlet, useLocation } from "react-router";
import { SectionNav } from "./SectionNav";
import { LayoutHeader } from "./LayoutHeader";
import { NAV_ITEMS, softPaintBg } from "./layoutConfig";
import { useEffect, useState } from "react";
import type { RetrospectiveLang } from "../../types/retrospective";

export interface LayoutContext {
  lang: RetrospectiveLang;
  setLang: (lang: RetrospectiveLang) => void;
}

export default function Layout() {
  const location = useLocation();
  const [lang, setLang] = useState<RetrospectiveLang>("ko");
  const activeItem =
    NAV_ITEMS.find((item) => location.pathname.startsWith(item.path)) ??
    NAV_ITEMS[0];
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="h-screen flex justify-center items-center bg-[#ECEFF3]">
      <div
        className="
          flex w-screen max-w-[1800px]
          h-[95vh]
          rounded-[60px] bg-white overflow-hidden
          shadow-[0_18px_70px_rgba(15,23,42,0.1)]
        "
      >
        <section
          className="flex-1 px-10 py-5 flex flex-col overflow-hidden"
          style={{ background: softPaintBg }}
        >
          <LayoutHeader
            activeItem={activeItem}
            lang={lang}
            onChangeLang={setLang}
          />

          <div className="relative flex-1 min-h-0">
            <div
              className="
                absolute inset-0 z-0
                bg-[radial-gradient(circle_at_0%_0%,rgba(180,220,255,0.65),transparent_55%),
                    radial-gradient(circle_at_20%_85%,rgba(255,200,220,0.5),transparent_50%),
                    radial-gradient(circle_at_90%_40%,rgba(190,255,220,0.55),transparent_55%),
                    radial-gradient(circle_at_50%_100%,rgba(255,255,210,0.35),transparent_60%)]
                blur-[160px]
                opacity-90
                pointer-events-none
              "
            />

            <div className="h-full overflow-hidden overflow-y-auto scrollbar-hide relative z-10">
              <Outlet context={{ lang, setLang }} />
            </div>
          </div>
        </section>

        <SectionNav activePath={location.pathname} lang={lang} />
      </div>
    </div>
  );
}
