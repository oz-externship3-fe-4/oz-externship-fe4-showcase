import { Outlet, useLocation, useNavigate } from "react-router";
import { SectionNav } from "./SectionNav";
import { LayoutHeader } from "./LayoutHeader";
import { NAV_ITEMS, softPaintBg } from "./layoutConfig";
import { BackFloatingButton } from "./BackFloatingButton";
import type { RetrospectiveLang } from "../../types/retrospective";
import { useState } from "react";

export interface LayoutContext {
  lang: RetrospectiveLang;
  setLang: (lang: RetrospectiveLang) => void;
}

export default function HomeLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [lang, setLang] = useState<RetrospectiveLang>("ko");
  const activeItem =
    NAV_ITEMS.find((item) => location.pathname.startsWith(item.path)) ??
    NAV_ITEMS[0];

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#ECEFF3] py-5">
      <div className="flex w-screen max-w-[1800px] min-h-[95vh] rounded-[60px] bg-white overflow-hidden shadow-[0_18px_70px_rgba(15,23,42,0.1)]">
        <section
          className="flex-[0.99] px-15 py-5 flex flex-col overflow-hidden relative"
          style={{ background: softPaintBg }}
        >
          <LayoutHeader
            activeItem={activeItem}
            lang={lang}
            onChangeLang={setLang}
          />

          <div className="relative flex-1">
            <BackFloatingButton visible={true} onClick={() => navigate("/")} />

            <div className="h-full overflow-y-auto scrollbar-hide">
              <Outlet />
            </div>
          </div>
        </section>

        <SectionNav activePath={location.pathname} />
      </div>
    </div>
  );
}
