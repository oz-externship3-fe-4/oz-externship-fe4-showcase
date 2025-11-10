// src/components/progress/TaskList.tsx

import { Check } from "lucide-react";
import { TASKS, type Task, PHASE_THEMES } from "./progressConfig";
import { TaskIcon } from "./TaskIcon";

interface TaskListProps {
  completedIds: string[];
  onToggle: (taskId: string) => void;
}

export function TaskList({ completedIds, onToggle }: TaskListProps) {
  return (
    <div className="flex flex-col gap-5">
      {TASKS.map((task: Task) => {
        const done = completedIds.includes(task.id);
        const theme = PHASE_THEMES[task.phaseId];

        const cardBg = `linear-gradient(135deg, ${theme.iconBg} 0%, #ffffff 45%)`;

        return (
          <button
            key={task.id}
            onClick={() => onToggle(task.id)}
            className="
              w-full flex items-center gap-5 text-left
              rounded-4xl px-7 py-6
              shadow-[0_6px_20px_rgba(15,23,42,0.04)]
              hover:shadow-[0_10px_26px_rgba(15,23,42,0.08)]
              transition-all
            "
            style={{ background: cardBg }}
          >
            {/* 왼쪽 아이콘 */}
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full"
              style={{ backgroundColor: theme.iconBg }}
            >
              <TaskIcon phaseId={task.phaseId} />
            </div>

            {/* 텍스트 */}
            <div className="flex-1 flex flex-col">
              <span className="text-[11px] font-medium text-slate-400">
                {task.weekLabel}
              </span>
              <span className="mt-1 text-[15px] font-semibold text-slate-900">
                {task.title}
              </span>
            </div>

            {/* ✅ 항상 V, 색만 바뀜 */}
            <div
              className="
                flex h-14 w-14 items-center justify-center rounded-full
                transition-all duration-200
              "
              style={
                done
                  ? {
                      backgroundColor: theme.accent,
                      boxShadow: "0 8px 20px rgba(15,23,42,0.15)",
                    }
                  : {
                      backgroundColor: "#ffffff",
                      boxShadow: "0 4px 12px rgba(15,23,42,0.06)",
                      border: "1px solid rgba(148,163,253,0.35)", // 옅은 인디케이터
                    }
              }
            >
              <Check
                className="h-7 w-7"
                style={{
                  color: done ? "#ffffff" : "rgba(148,163,253,0.9)", // 미완료도 선명한 V
                }}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}
