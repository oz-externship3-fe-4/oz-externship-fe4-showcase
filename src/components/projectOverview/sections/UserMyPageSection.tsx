import { ProjectOverviewSectionLayout } from "../ProjectOverviewSectionLayout";

export function UserMyPageSection() {
  return (
    <ProjectOverviewSectionLayout
      label="기능 04"
      title="사용자 마이페이지"
      imagePosition="left"
      description={
        <div className="space-y-2">
          <p>
            사용자의 프로필, 지원 내역, 완료된 스터디 기록을 <br />
            <span className="font-extrabold">한눈에 확인</span>할 수 있는
            <span className="font-extrabold">마이페이지</span>입니다.
          </p>

          <p>
            <span className="font-extrabold text-amber-600">
              리뷰 작성 기능
            </span>
            <br />
            완료된 스터디 목록에서{" "}
            <span className="font-semibold">별점과 코멘트</span>로 리뷰를 작성할
            수 있습니다.
          </p>

          <p>
            <span className="font-extrabold text-amber-600">
              완료된 스터디 기록
            </span>
            <br />
            참여 기간, 인원, 역할, 리더 여부 등{" "}
            <span className="font-semibold">상세 정보를 확인</span>할 수
            있습니다.
          </p>
        </div>
      }
    >
      <div
        className="
          relative
          w-[600px] h-[730px]
          rounded-xl bg-white
          border border-white/90 -ml-10
          shadow-[0_10px_10px_rgba(15,23,42,0.20)]
          overflow-hidden
        "
      >
        <img
          src="/images/pages/overview/mypage.png"
          alt="사용자 마이페이지 화면"
          className="w-full h-full object-cover"
        />
      </div>
    </ProjectOverviewSectionLayout>
  );
}
