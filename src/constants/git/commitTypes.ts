import {
  Sparkles,
  Bug,
  Recycle,
  ClipboardList,
  FileText,
  Settings2,
  Flame,
} from "lucide-react";
import type { CommitType } from "./types";

export const COMMIT_TYPES: ReadonlyArray<CommitType> = [
  {
    id: "feat",
    icon: Sparkles,
    label: ": feat",
    desc: "새로운 기능 추가",
  },
  {
    id: "fix",
    icon: Bug,
    label: ": fix",
    desc: "버그 · 오작동 수정",
  },
  {
    id: "refactor",
    icon: Recycle,
    label: ": refactor",
    desc: "코드 구조 개선 (기능 동일)",
  },
  {
    id: "chore",
    icon: ClipboardList,
    label: ": chore",
    desc: "오타 · 주석 · 단순 코드 정리",
  },
  {
    id: "docs",
    icon: FileText,
    label: ": docs",
    desc: "문서 수정",
  },
  {
    id: "build",
    icon: Settings2,
    label: ": build",
    desc: "빌드 / 환경 / 의존성 변경",
  },
  {
    id: "hotfix",
    icon: Flame,
    label: ": hotfix",
    desc: "긴급 수정 (장애 대응)",
  },
] as const;
