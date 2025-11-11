import { ProjectOverviewSectionLayout } from "../ProjectOverviewSectionLayout";

export function RecruitManageSection() {
  return (
    <ProjectOverviewSectionLayout
      label="기능 03"
      title="사용자 스터디 구인 공고 페이지"
      imagePosition="right"
      description={
        <div className="space-y-2">
          <p>
            새로운 스터디 멤버를 찾거나,
            <br />
            관심 있는 스터디에 참여할 수 있는{" "}
            <span className="font-semibold">구인 게시판</span>
            입니다.
          </p>

          <p>
            <span className="font-semibold text-amber-600">
              스터디 맞춤 기능
            </span>
            <br />
            사용자는 자신의 관심 분야를 설정해{" "}
            <span className="font-semibold">맞춤형 스터디 추천</span>을 받을 수
            있습니다.
          </p>

          <p>
            <span className="font-semibold text-amber-600">
              스터디 구인 공고 기능
            </span>
            <br />
            태그 및 정렬 필터를 통해 원하는 공고를 빠르게 찾을 수 있으며, 각
            공고에는{" "}
            <span className="font-semibold">
              모집 분야, 기술 스택, 모집 마감일, 조회수·댓글 수
            </span>
            가 표시됩니다.
          </p>
        </div>
      }
    >
      <div
        className="
          relative
          w-[520px] h-[700px]
          rounded-xl
          bg-white
          border border-white/90
          shadow-[0_22px_30px_rgba(15,23,42,0.20)]
          overflow-hidden
        "
      >
        <img
          src="/images/pages/overview/recruit.png"
          alt="사용자 스터디 구인 공고 페이지 화면"
          className="w-full h-full object-cover"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-white/85 to-transparent" />
      </div>
    </ProjectOverviewSectionLayout>
  );
}
