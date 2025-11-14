import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  language?: string;
  code: string;
}

const LANGUAGE_LABEL_MAP: Record<string, string> = {
  ts: "TypeScript",
  tsx: "TypeScript (React)",
  js: "JavaScript",
  jsx: "JavaScript (React)",
  json: "JSON",
  bash: "Bash",
  sh: "Shell",
  html: "HTML",
  css: "CSS",
  scss: "SCSS",
  md: "Markdown",
};

export function CodeBlock({ language = "bash", code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const languageLabel =
    LANGUAGE_LABEL_MAP[language.toLowerCase()] ?? language.toUpperCase();

  return (
    <div className="relative group rounded-xl overflow-hidden border border-slate-200 bg-slate-900">
      <div
        className="
        absolute left-0 top-0 
        px-3 py-1 
        text-[11px] font-semibold tracking-wide
        text-emerald-300
        rounded-br-xl
        backdrop-blur-sm
        z-10
      "
      >
        {languageLabel}
      </div>
      <button
        onClick={handleCopy}
        className="
          absolute right-3 top-3 z-10
          flex items-center gap-1
          rounded-md bg-gray-800/70 px-2 py-1
          text-xs text-gray-200 opacity-0 group-hover:opacity-100
          transition
          hover:bg-gray-700
        "
      >
        {copied ? (
          <Check size={14} className="text-green-400" />
        ) : (
          <Copy size={14} />
        )}
        {copied ? "Copied" : "Copy"}
      </button>

      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          padding: "20px 16px",
          paddingTop: "40px",
          margin: 0,
          background: "transparent",
          fontSize: "14px",
          lineHeight: "1.6",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
