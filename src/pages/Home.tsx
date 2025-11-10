import { useIsMobile } from "../hooks/useIsMobile";
import DesktopHome from "./desktop/DesktopHome";
import MobileHome from "./mobile/MobileHome";

export default function Home() {
  const isMobile = useIsMobile(1024);
  return isMobile ? <MobileHome /> : <DesktopHome />;
}
