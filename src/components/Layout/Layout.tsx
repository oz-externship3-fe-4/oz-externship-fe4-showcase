import { Outlet, useLocation, useNavigate } from "react-router";
import { BackFloatingButton } from "./BackFloatingButton";
import { SectionNav } from "./SectionNav";
import { LayoutHeader } from "./LayoutHeader";
import { NAV_ITEMS, softPaintBg } from "./layoutConfig";

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const activeItem =
    NAV_ITEMS.find((item) => location.pathname.startsWith(item.path)) ??
    NAV_ITEMS[0];

  const showBack = location.pathname !== "/";

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#ECEFF3] py-5">
      <div className="flex w-screen max-w-[1800px] min-h-[95vh] rounded-[60px] bg-white overflow-hidden shadow-[0_18px_70px_rgba(15,23,42,0.1)]">
        <section
          className="flex-[0.7] px-15 py-5 flex flex-col overflow-hidden"
          style={{ background: softPaintBg }}
        >
          <LayoutHeader activeItem={activeItem} />

          <div className="relative flex-1">
            <BackFloatingButton
              visible={showBack}
              onClick={() => navigate("/")}
            />
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
