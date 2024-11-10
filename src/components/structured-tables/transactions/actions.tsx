import { ActionCallout } from "@/components/data-table/components/action-table-callout";
import IconFilterMobile from "@/components/icons/icon-filter-mobile";
import IconSortMobile from "@/components/icons/icon-sort-mobile";
import { Transaction } from "@prisma/client";

export const transactionsActions = [
  {
    id: "sort",
    title: "Sort",
    icon: <IconSortMobile />,
    label: "Sort by",
    options: [
      {
        id: "latest",
        label: "Latest",
      },
      {
        id: "oldest",
        label: "Oldest",
      },
      {
        id: "aToZ",
        label: "A to Z",
      },
      {
        id: "zToA",
        label: "Z to A",
      },
      {
        id: "highest",
        label: "Highest",
      },
      {
        id: "lowest",
        label: "Lowest",
      },
    ],
    onTableAction(value, table) {
      if (value === "latest" || value === "oldest") {
        table?.getColumn("date")?.toggleSorting(value === "latest");
      }

      if (value === "aToZ" || value === "zToA") {
        table?.getColumn("name")?.toggleSorting(value === "aToZ");
      }

      if (value === "highest" || value === "lowest") {
        table?.getColumn("amount")?.toggleSorting(value === "highest");
      }
    },
  },
  {
    id: "filter",
    title: "Filter",
    icon: <IconFilterMobile />,
    label: "Category",
    options: [
      {
        id: "all",
        label: "All Transactions",
      },
      {
        id: "entertainment",
        label: "Entertainment",
      },
      {
        id: "bills",
        label: "Bills",
      },
    ],
  },
] as ActionCallout<Transaction>[];
