import { ProjectOverviewSectionLayout } from "../ProjectOverviewSectionLayout";

export function UserStudyDetailSection() {
  return (
    <ProjectOverviewSectionLayout
      label="기능 02"
      title="사용자 스터디 상세 페이지"
      imagePosition="left"
      description={
        <div className="space-y-2">
          <p>
            스터디 그룹을 클릭하면 진입하는{" "}
            <span className="font-extrabold">상세 페이지</span>로, <br />
            프로젝트 일정·진행 상황·스터디 기록을 한 화면에서 관리할 수
            있습니다.
          </p>

          <p>
            <span className="font-extrabold text-amber-600">스케줄 관리</span>
            <br />
            캘린더 형식으로 스터디 일정을 등록·확인하며, <br />
            주차별 학습 주제, 발표, 테스트 일정을 한눈에 볼 수 있습니다.
          </p>

          <p>
            <span className="font-extrabold text-amber-600">스터디 기록</span>
            <br />
            팀원이 학습 내용을 작성하고 공유하는 공간입니다.
          </p>

          <p>
            <span className="font-extrabold text-amber-600">
              스터디 강의/자료
            </span>
            <br />
            관련 강의와 참고 자료를 연결해 학습 효율을 높일 수 있습니다.
          </p>

          <p>
            <span className="font-semibold text-amber-600">멤버 목록</span>
            <br />
            참여 인원과 역할(리더, 팀원)을 확인할 수 있는 영역입니다.
          </p>
        </div>
      }
    >
      <div
        className="
          relative
          w-[520px] h-[730px]
          rounded-xl bg-white
          border border-white/90 -ml-30
          shadow-[0_10px_10px_rgba(15,23,42,0.20)]
          overflow-hidden
        "
      >
        <img
          src="/images/pages/overview/detail.png"
          alt="사용자 스터디 상세 페이지 화면"
          className="w-full h-full object-cover"
        />
      </div>
    </ProjectOverviewSectionLayout>
  );
}
