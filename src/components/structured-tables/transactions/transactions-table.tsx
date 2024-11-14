"use client";

import { useEffect, useMemo, useState } from "react";

import { DataTable } from "../../data-table/data-table";
import { Transaction } from "@prisma/client";
import { ArrayHelper } from "@/shared/helpers/array-helper";
import { TransactionsMock } from "@/shared/mocks/transactions-mock";

import { transactionsColumns } from "./columns";
import { transactionsActions } from "./actions";

export function TransactionsTable() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const transactions = useMemo(() => {
    const mock = new ArrayHelper().createArrayByLength(0, () =>
      new TransactionsMock().createTransaction()
    );

    return mock;
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <DataTable<Transaction>
      id="transactions-table"
      columns={transactionsColumns}
      data={transactions}
      searchOptions={{
        columnId: "name",
        placeholder: "Search transaction",
      }}
      actions={transactionsActions}
    />
  );
}
