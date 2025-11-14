import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { RouteFallback } from "./components/spinner/RouteFallback";

const Home = lazy(() => import("./pages/Home"));
const Layout = lazy(() => import("./components/Layout/Layout"));
const ProjectProgressPanel = lazy(
  () => import("./pages/desktop/ProjectProgressPanel")
);
const TechStackPage = lazy(() => import("./pages/desktop/TechStackPage"));
const TeamIntroPage = lazy(() => import("./pages/desktop/TeamIntroPage"));
const HomeLayout = lazy(() => import("./components/Layout/HomeLayout"));
const RetrospectivePage = lazy(
  () => import("./pages/desktop/RetrospectivePage")
);
const ProjectOverviewPage = lazy(
  () => import("./pages/desktop/ProjectOverviewPage")
);
const TroubleshootingPage = lazy(
  () => import("./pages/desktop/TroubleshootingPage")
);
const DemoShowcasePage = lazy(() => import("./pages/desktop/DemoShowcasePage"));
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          index
          element={
            <Suspense fallback={<RouteFallback />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          element={
            <Suspense fallback={<RouteFallback />}>
              <HomeLayout />
            </Suspense>
          }
        >
          <Route
            path="home"
            element={
              <Suspense fallback={<RouteFallback />}>
                <ProjectProgressPanel />
              </Suspense>
            }
          />
        </Route>
        <Route
          element={
            <Suspense fallback={<RouteFallback />}>
              <Layout />
            </Suspense>
          }
        >
          <Route
            path="tech"
            element={
              <Suspense fallback={<RouteFallback />}>
                <TechStackPage />
              </Suspense>
            }
          />
          <Route
            path="intro"
            element={
              <Suspense fallback={<RouteFallback />}>
                <TeamIntroPage />
              </Suspense>
            }
          />
          <Route
            path="retrospect"
            element={
              <Suspense fallback={<RouteFallback />}>
                <RetrospectivePage />
              </Suspense>
            }
          />
          <Route
            path="overview"
            element={
              <Suspense fallback={<ProjectOverviewPage />}>
                <ProjectOverviewPage />
              </Suspense>
            }
          />
          <Route
            path="troubleshooting"
            element={
              <Suspense fallback={<TroubleshootingPage />}>
                <TroubleshootingPage />
              </Suspense>
            }
          />
          <Route
            path="demo"
            element={
              <Suspense fallback={<DemoShowcasePage />}>
                <DemoShowcasePage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <MotionConfig reducedMotion="user">
        <AnimatedRoutes />
      </MotionConfig>
    </Router>
  );
}
