import { PageHeader } from "@/components/page-utils/page-header";
import { PageMain } from "@/components/page-utils/page-main";
import { PageTitle } from "@/components/page-utils/page-title";
import { PageWrapper } from "@/components/page-utils/page-wrapper";
import { TransactionsTable } from "@/components/structured-tables/transactions/transactions-table";

export default function Page() {
  return (
    <PageWrapper className="pb-400" id="transactions-page">
      <PageHeader>
        <PageTitle title="Transactions">Transactions</PageTitle>
      </PageHeader>

      <PageMain className="bg-appWhite rounded-150 px-250 py-300">
        <TransactionsTable />
      </PageMain>
    </PageWrapper>
  );
}
