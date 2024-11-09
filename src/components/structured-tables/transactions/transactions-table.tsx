"use client";

import { ActionCallout } from "@/components/data-table/components/action-table-callout";
import { DataTable } from "../../data-table/data-table";
import { columns } from "./columns";
import IconSortMobile from "@/components/icons/icon-sort-mobile";
import IconFilterMobile from "@/components/icons/icon-filter-mobile";

export function TransactionsTable() {
  const actions: ActionCallout[] = [
    {
      id: "sort",
      title: "Sort",
      icon: <IconSortMobile />,
      label: "Sort by",
      options: [
        { id: "date", label: "Date" },
        { id: "email", label: "Email" },
        { id: "amount", label: "Amount" },
      ],
    },
    {
      id: "filter",
      title: "Filter",
      icon: <IconFilterMobile />,
      label: "Category",
      options: [],
    },
  ];

  return (
    <DataTable
      id="transactions-table"
      columns={columns}
      data={[]}
      searchOptions={{
        columnId: "email",
        placeholder: "Search transaction",
      }}
      actions={actions}
    />
  );
}
