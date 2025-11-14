import { motion } from "framer-motion";
import { useState } from "react";
import { DemoVideoModal } from "../../components/demo/DemoVideoModal";
import { DEMO_CARDS } from "../../components/demo/demoCardData";
import { DemoCard } from "../../components/demo/DemoCard";
import type { DemoId, DemoLang } from "../../components/demo/demoCardData";
import { useOutletContext } from "react-router";
import type { LayoutContext } from "../../components/Layout/Layout";

export default function DemoShowcasePage() {
  const { lang } = useOutletContext<LayoutContext>();
  const [activeDemoId, setActiveDemoId] = useState<DemoId | null>(null);

  return (
    <div className="mx-auto w-full max-w-8xl">
      <motion.div
        layout
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {DEMO_CARDS.map((demo) => (
          <DemoCard
            key={demo.id}
            demo={demo}
            lang={lang as DemoLang}
            onClick={() => setActiveDemoId(demo.id as DemoId)}
          />
        ))}
      </motion.div>

      <DemoVideoModal
        open={!!activeDemoId}
        demoId={activeDemoId}
        lang={lang as DemoLang}
        onClose={() => setActiveDemoId(null)}
        onChangeDemo={(id) => setActiveDemoId(id)}
      />
    </div>
  );
}
