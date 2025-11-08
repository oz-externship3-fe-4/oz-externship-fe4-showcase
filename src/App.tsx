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
