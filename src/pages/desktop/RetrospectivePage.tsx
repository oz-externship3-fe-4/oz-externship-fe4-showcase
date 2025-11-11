import { useOutletContext } from "react-router";
import { TEAM_RETROSPECTIVES } from "../../components/retrospective/retrosMembers";
import { RetrospectiveCard } from "../../components/retrospective/RetrospectiveCard";
import type { LayoutContext } from "../../components/Layout/Layout";

export default function RetrospectivePage() {
  const { lang } = useOutletContext<LayoutContext>();

  return (
    <div className="h-full px-12 pt-30">
      <section className="flex gap-6 justify-center">
        {TEAM_RETROSPECTIVES.map((member) => (
          <RetrospectiveCard key={member.id} member={member} lang={lang} />
        ))}
      </section>
    </div>
  );
}
