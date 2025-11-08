import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(duration);
dayjs.extend(relativeTime);

export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function diffToParts(targetISO: string): TimeLeft {
  const now = dayjs();
  const end = dayjs(targetISO);
  const ms = Math.max(end.diff(now), 0);
  const d = dayjs.duration(ms);
  return {
    days: Math.floor(d.asDays()),
    hours: d.hours(),
    minutes: d.minutes(),
    seconds: d.seconds(),
  };
}

export const two = (n: number) => n.toString().padStart(2, "0");

export function percentBetween(startISO: string, targetISO: string) {
  const now = dayjs();
  const start = dayjs(startISO);
  const end = dayjs(targetISO);
  if (!start.isValid() || !end.isValid()) return 0;
  const total = end.diff(start);
  if (total <= 0) return 100;
  const gone = Math.min(Math.max(now.diff(start), 0), total);
  return Math.max(0, Math.min(100, Math.floor((gone * 100) / total)));
}

export function ddayLabel(targetISO: string) {
  const now = dayjs().startOf("day");
  const end = dayjs(targetISO).startOf("day");
  const diff = end.diff(now, "day");
  return diff >= 0 ? `D-${diff}` : `D+${Math.abs(diff)}`;
}

export { dayjs };
