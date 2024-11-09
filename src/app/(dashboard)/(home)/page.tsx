import { PageHeader } from "@/components/page-utils/page-header";
import { PageTitle } from "@/components/page-utils/page-title";
import { PageWrapper } from "@/components/page-utils/page-wrapper";

export default function Page() {
  return (
    <PageWrapper id="overview-page">
      <PageHeader>
        <PageTitle title="Overview">Overview</PageTitle>
      </PageHeader>

      <main>Home</main>
    </PageWrapper>
  );
}
