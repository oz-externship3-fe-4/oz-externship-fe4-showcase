import { useState } from "react";
import { Copy } from "lucide-react";

interface TemplateCardProps {
  title: string;
  body: string;
}

export function TemplateCard({ title, body }: TemplateCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // 실패해도 굳이 에러 안 띄움
    }
  };

  return (
    <div
      className="
        relative flex h-full flex-col
        rounded-3xl bg-white
        border border-slate-100
        shadow-[0_16px_40px_rgba(15,23,42,0.08)]
        px-4 py-4 md:px-5 md:py-5
      "
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-xs md:text-sm font-semibold text-slate-800">
          {title}
        </h3>
        <button
          type="button"
          onClick={handleCopy}
          className="
            inline-flex items-center gap-1
            rounded-lg border border-slate-200
            bg-slate-50/80 px-2 py-1
            text-[10px] md:text-xs text-slate-600
            hover:bg-slate-100 hover:border-slate-300
            transition
          "
        >
          <Copy className="h-3.5 w-3.5" />
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <pre
        className="
          mt-3 flex-1 overflow-auto
          whitespace-pre-wrap wrap-break-words
          rounded-2xl bg-slate-200 text-[11px] md:text-[12px]
          text-slate-600 leading-relaxed
          px-3 py-3 md:px-4 md:py-4
          font-mono
        "
      >
        {body.split("\n").map((line, i) => {
          const isHeading = line.trim().startsWith("##");
          return (
            <span
              key={i}
              className={isHeading ? "text-red-400 font-semibold" : undefined}
            >
              {line}
              {"\n"}
            </span>
          );
        })}
      </pre>
    </div>
  );
}
