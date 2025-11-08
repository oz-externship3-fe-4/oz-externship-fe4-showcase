import CountdownInline from "./CountdownInline";
import CountdownCard from "./CountdownCard";
import type { CountdownTheme } from "../../../theme/tokens";

export type CountdownTickerProps = {
  target: Date | string;
  tick?: boolean;
  onComplete?: () => void;
  className?: string;
  theme?: CountdownTheme;
  variant?: "card" | "inline";
};

export default function CountdownTicker(props: CountdownTickerProps) {
  const { variant = "inline" } = props;

  if (variant === "card") {
    return <CountdownCard {...props} />;
  }
  return <CountdownInline {...props} />;
}
