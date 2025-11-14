import { Shield, GitBranch, Layers3, MessageSquareWarning } from "lucide-react";
import type { GitRuleCard } from "./types";

export const GIT_RULE_CARDS: ReadonlyArray<GitRuleCard> = [
  {
    id: "approval",
    icon: Shield,
    label: `PR 머지는 팀원 2명\n 이상의 승인 필수`,
  },
  {
    id: "develop-branch",
    icon: GitBranch,
    label: "develop에서\n 각자 브랜치로 분기해서 \n작업 진행",
  },
  {
    id: "group-pr",
    icon: Layers3,
    label: "이슈, PR, 커밋은\n기능별로 묶어서 올리기",
  },
  {
    id: "share-bugs",
    icon: MessageSquareWarning,
    label: "오류 발생 시\n팀원들에게 공유하기",
  },
] as const;
