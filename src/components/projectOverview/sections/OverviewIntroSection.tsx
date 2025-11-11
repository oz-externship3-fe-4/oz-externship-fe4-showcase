import { ProjectOverviewSectionLayout } from "../ProjectOverviewSectionLayout";

export function OverviewIntroSection() {
  return (
    <div className="relative">
      <ProjectOverviewSectionLayout
        label="PROJECT OVERVIEW"
        title="StudyHub Admin 스터디 관리 플랫폼"
        hideImageArea
        description={
          <div className="space-y-1">
            <p className="text-[22px] font-extrabold text-center md:text-left leading-snug">
              <span className="text-[#F4B000]">StudyHub</span>
              <span className="text-slate-800">는</span>
            </p>

            <p className="text-[22px] font-extrabold text-slate-800 text-center md:text-left leading-snug">
              개발자, 디자이너, 데이터 분석가 등 다양한 분야의 학습자들이
            </p>
            <p className="text-[22px] font-extrabold text-slate-800 text-center md:text-left leading-snug">
              함께 성장할 수 있도록 돕는{" "}
              <span className="text-slate-900">스터디 관리 플랫폼</span>
              입니다.
            </p>

            <p className="pt-3 text-[16px] leading-relaxed text-slate-700 text-center md:text-left">
              본 프로젝트에서 저희 팀은 실제 운영 환경을 가정하여{" "}
              <span className="font-semibold text-slate-900">
                Admin 관리 기능
              </span>
              을 모두 구현했습니다.
            </p>
          </div>
        }
      />
      <div
        className="
          pointer-events-none select-none
          hidden lg:block
          absolute
          right-12
          opacity-80
        "
      >
        <img
          src="/images/pages/overview/overview.png"
          alt=""
          className="w-[700px] h-auto object-contain"
        />
      </div>
    </div>
  );
}
