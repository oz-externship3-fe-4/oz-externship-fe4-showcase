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
              <Layout />
            </Suspense>
          }
        >
          <Route
            path="overview"
            element={
              <Suspense fallback={<RouteFallback />}>
                <ProjectProgressPanel />
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
