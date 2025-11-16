export default function FutureVisionSection() {
  return (
    <div className="flex h-full w-full items-center justify-center px-30 py-12">
      <div className="grid w-full max-w-[1320px] grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-1 items-center">
        <section className="space-y-2">
          <h2 className="text-[88px] leading-[0.9] font-extrabold text-slate-800">
            <span className="block">Future</span>
            <span className="block">Vision</span>
          </h2>
          <p className="text-[20px] leading-relaxed text-slate-700 max-w-xl">
            단순히 코드를 작성하는 것을 넘어,
            <br />
            사용자에게 가치를 전달하고
            <br />
            팀과 함께 성장하는 개발자 모습을 꿈꿉니다.
          </p>
        </section>

        <section className="grid grid-cols-2 gap-6">
          <FutureCard
            emoji="💡"
            title="문제 해결사"
            body="복잡한 비즈니스 문제를 기술로 해결하고, 사용자의 불편함을 개선하는 솔루션을 제공하는 개발자."
          />
          <FutureCard
            emoji="🤝"
            title="협업 전문가"
            body="디자이너, 백엔드 개발자, 기획자와 원활히 소통하며 팀의 생산성을 높이는 커뮤니케이션 능력을 갖춘 개발자."
          />
          <FutureCard
            emoji="🚀"
            title="성장 주도자"
            body="최신 기술 트렌드를 빠르게 습득하고 팀에 공유하며, 함께 성장하는 문화를 만드는 능동적인 개발자."
          />
          <FutureCard
            emoji="✨"
            title="품질 추구자"
            body="단순히 동작하는 코드가 아닌, 유지보수 가능한 고품질 코드를 작성하는 개발자."
          />
        </section>
      </div>
    </div>
  );
}

type FutureCardProps = {
  emoji: string;
  title: string;
  body: string;
};

// 미래카드
function FutureCard({ emoji, title, body }: FutureCardProps) {
  return (
    <article className="rounded-3xl border border-white/70 bg-white/80 px-6 py-6 shadow-[0_18px_18px_rgba(15,23,42,0.08)] backdrop-blur">
      <div className="text-3xl mb-3">{emoji}</div>
      <h3 className="text-base font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-xs leading-relaxed text-slate-600 whitespace-pre-line">
        {body}
      </p>
    </article>
  );
}
