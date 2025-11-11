import { ProjectOverviewSectionLayout } from "../ProjectOverviewSectionLayout";

export function UserStudyManageSection() {
  return (
    <ProjectOverviewSectionLayout
      label="기능 01"
      title="사용자 · 스터디 그룹 관리 페이지"
      description={
        <div className="space-y-2">
          <p className="text-lg">
            사용자가 참여할 수 있는 모든 스터디 그룹을 한눈에
            <br /> 볼 수 있는
            <span className="font-semibold"> 메인 화면</span>입니다.
          </p>
          <p>
            진행 중 스터디와 완료된 스터디로 구분되어 있으며, <br />각 카드에는{" "}
            <span className="font-semibold">스터디명, 기간, 인원, 목표</span>
            등이 표시됩니다.
          </p>
          <p>
            상단 검색창을 통해 스터디 이름이나 주제를 빠르게 검색할 수 있으며,
            <br />
            <span className="font-semibold"> ‘+ 새 스터디 만들기’ 버튼</span>
            으로 사용자는 직접 스터디를 개설할 수 있습니다.
          </p>
        </div>
      }
    >
      <div
        className="
          relative
          w-[520px] h-[720px]
          rounded-xl
          bg-white
          border border-white/90 mr-10
          shadow-[0_22px_30px_rgba(15,23,42,0.20)]
          overflow-hidden
        "
      >
        <img
          src="/images/pages/overview/user-study.png"
          alt="사용자 스터디 그룹 메인 페이지 화면"
          className="w-full h-full object-cover"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-white/85 to-transparent" />
      </div>
    </ProjectOverviewSectionLayout>
  );
}
