export function pad2(n: number): string {
  return n.toString().padStart(2, "0");
}

export function formatRangeKST(startISO: string, endISO: string): string {
  const s = new Date(startISO);
  const e = new Date(endISO);
  const sStr = `${pad2(s.getMonth() + 1)}/${pad2(s.getDate())}`;
  const eStr = `${pad2(e.getMonth() + 1)}/${pad2(e.getDate())}`;
  return sStr === eStr ? sStr : `${sStr}~${eStr}`;
}
