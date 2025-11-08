import gsapCore from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsapCore.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const setupGSAP = () => {
  ScrollTrigger.normalizeScroll(true);
  ScrollTrigger.config({ ignoreMobileResize: true });
};

export const gsap = gsapCore;
export { ScrollTrigger };
