import { FolderIcon } from "../../components/plan/FolderIcon";
import DevProcessPaperCard from "../../components/plan/DevProcessPaperCard";

export default function DevProcessSection() {
  return (
    <div className="mx-auto w-full max-w-8xl">
      <div className="mx-auto w-full max-w-[1700px] flex gap-10 pt-10 pb-10">
        <div className="relative w-full max-w-[720px] min-h-[700px] shrink-0">
          <DevProcessPaperCard />
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-3 gap-x-2 mt-20">
            <FolderIcon label="요구사항 정의서" color="pink" />
            <FolderIcon label="화면정의서" color="green" />
            <FolderIcon label="API 명세서" color="blue" />

            <FolderIcon label="와이어 프레임" color="pink" />
            <FolderIcon label="플로우차트" color="green" />
            <FolderIcon label="테이블 명세서" color="blue" />
          </div>
        </div>
      </div>
    </div>
  );
}
