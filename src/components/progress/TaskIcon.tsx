import {
  Rocket,
  LayoutTemplate,
  Code2,
  Presentation,
  FileText,
  Flag,
} from "lucide-react";
import type { PhaseId } from "./progressConfig";
import { PHASE_THEMES } from "./progressConfig";

interface TaskIconProps {
  phaseId: PhaseId;
}

export function TaskIcon({ phaseId }: TaskIconProps) {
  const color = PHASE_THEMES[phaseId]?.accent ?? "#94A3B8";

  const common = "h-6 w-6";

  switch (phaseId) {
    case "init":
      return <FileText className={`${common}`} style={{ color }} />;
    case "wireframe":
      return <LayoutTemplate className={`${common}`} style={{ color }} />;
    case "dev":
      return <Code2 className={`${common}`} style={{ color }} />;
    case "integration":
      return <Rocket className={`${common}`} style={{ color }} />;
    case "presentation":
      return <Presentation className={`${common}`} style={{ color }} />;
    default:
      return <Flag className={`${common}`} style={{ color }} />;
  }
}
