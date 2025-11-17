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
            <FolderIcon
              label="요구사항 정의서"
              color="pink"
              href="https://docs.google.com/spreadsheets/d/1wM-CdYNZFcFZqII8Q_O5LJGXPMte9Q8eI9RsZVvCBME/edit?usp=drive_web&ouid=114046989815109555887"
            />
            <FolderIcon
              label="화면정의서"
              color="green"
              href="https://www.figma.com/design/g7OIXmZFFIROK5WrSVt6yk/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C?node-id=2-3&p=f&t=dbMmJIGQzuBwWeon-0"
            />
            <FolderIcon
              label="API 명세서"
              color="blue"
              href="https://www.notion.so/API-27acaf5650aa81f3b3fde1ecf0aeb032?source=copy_link"
            />

            <FolderIcon
              label="와이어 프레임"
              color="pink"
              href="https://notion.so/requirements-doc"
            />
            <FolderIcon
              label="플로우차트"
              color="green"
              href="https://miro.com/app/board/uXjVJ6C4v5I=/"
            />
            <FolderIcon
              label="테이블 명세서"
              color="blue"
              href="https://docs.google.com/spreadsheets/d/1zuKOeXxZlE8Eewh0DBmxcwYsszlsye-Kj11fxXpCs0I/edit?gid=684962824#gid=684962824"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
