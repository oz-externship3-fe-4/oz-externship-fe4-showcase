// 일반 영역에서 ``으로 감싸진 부분을 코드블럭으로 만들어주는 헬퍼함수 입니닷!
import type { ReactNode } from "react";

export function renderInlineCode(text: string): ReactNode[] {
  const parts = text.split(/(`[^`]+`)/g);

  return parts.map((part, idx) => {
    const isCode = part.startsWith("`") && part.endsWith("`");

    if (isCode) {
      const content = part.slice(1, -1);

      return (
        <code
          key={idx}
          className="
            mx-px
            rounded-md border border-rose-200
            bg-slate-100 px-1.5 py-px
            font-mono text-[12px] text-rose-700
          "
        >
          {content}
        </code>
      );
    }

    return <span key={idx}>{part}</span>;
  });
}

// 여러 줄의 본문을 행 단위로 나누어서 p태그로 렌더링 후, 각 줄안에서 inline 코드를 탐지해서 스타일을 적용합니닷
export function renderBodyWithInlineCode(raw: string): ReactNode[] {
  const lines = raw.split("\n");

  return lines.map((line, idx) => {
    if (!line.trim()) {
      return <div key={idx} className="h-2" />;
    }

    return (
      <p key={idx} className="text-[13px] leading-relaxed text-slate-700">
        {renderInlineCode(line)}
      </p>
    );
  });
}
