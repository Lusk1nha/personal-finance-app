import { PageHeader } from "@/components/page-utils/page-header";
import { PageMain } from "@/components/page-utils/page-main";
import { PageTitle } from "@/components/page-utils/page-title";
import { PageWrapper } from "@/components/page-utils/page-wrapper";
import { ValueTile } from "@/components/tiles/value-tile";

export default function Page() {
  return (
    <PageWrapper id="overview-page">
      <PageHeader>
        <PageTitle title="Overview">Overview</PageTitle>
      </PageHeader>

      <PageMain>
        <section
          id="summary-tiles"
          className="w-full flex flex-wrap md:flex-nowrap gap-150 md:gap-300"
        >
          <ValueTile
            variant="primary"
            id="current-balance-tile"
            title="Current Balance"
            tooltip="Shows the current balance of the account"
            value={4836}
          />
          <ValueTile
            id="income-tile"
            title="Income"
            tooltip="Shows the total income of the account"
            value={3814.25}
          />
          <ValueTile
            id="expenses-tile"
            title="Expenses"
            tooltip="Shows the total expenses of the account"
            value={1700.5}
          />
        </section>
      </PageMain>
    </PageWrapper>
  );
}
