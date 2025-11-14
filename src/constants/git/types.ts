import type { ComponentType } from "react";

export type CommitTypeId =
  | "feat"
  | "fix"
  | "refactor"
  | "chore"
  | "docs"
  | "build"
  | "hotfix";

export interface CommitType {
  id: CommitTypeId;
  icon: ComponentType<{ className?: string }>;
  label: string;
  desc: string;
}

export interface GitRuleCard {
  id: string;
  icon: ComponentType<{ className?: string }>;
  label: string;
}
