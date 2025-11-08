import { useEffect, useRef, useState } from "react";
import { diffToParts, type TimeLeft } from "../utils/time";

export function useTimeLeft(
  target: string,
  tick = true,
  onComplete?: () => void
) {
  const [left, setLeft] = useState<TimeLeft>(() => diffToParts(target));
  const doneRef = useRef(false);

  useEffect(() => {
    if (!tick) return;
    const id = setInterval(() => {
      const next = diffToParts(target);
      setLeft(next);
      if (!doneRef.current && Object.values(next).every((n) => n === 0)) {
        doneRef.current = true;
        onComplete?.();
      }
    }, 1000);
    return () => clearInterval(id);
  }, [target, tick, onComplete]);

  return left;
}
