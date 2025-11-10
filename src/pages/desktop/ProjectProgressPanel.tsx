import { useMemo, useState } from "react";
import {
  PHASES,
  TASKS,
  softPaintBg,
  type PhaseId,
} from "../../components/progress/progressConfig";
import { PhaseStepper } from "../../components/progress/PhaseStepper";
import { TaskList } from "../../components/progress/TaskList";

export default function ProjectProgressPanel() {
  const [completedIds, setCompletedIds] = useState<string[]>([]);

  const completedPhaseIds = useMemo<PhaseId[]>(
    () =>
      PHASES.filter((phase) =>
        TASKS.filter((t) => t.phaseId === phase.id).every((t) =>
          completedIds.includes(t.id)
        )
      ).map((p) => p.id),
    [completedIds]
  );

  const toggleTask = (taskId: string) => {
    setCompletedIds((prev) =>
      prev.includes(taskId)
        ? prev.filter((id) => id !== taskId)
        : [...prev, taskId]
    );
  };

  return (
    <div
      className="
        relative flex flex-col
        px-12 pt-2 pb-10
      "
      style={{ background: softPaintBg }}
    >
      <PhaseStepper completedPhaseIds={completedPhaseIds} />
      <TaskList completedIds={completedIds} onToggle={toggleTask} />
    </div>
  );
}
