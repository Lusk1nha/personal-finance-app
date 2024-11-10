// This type is used to define the shape of our data.

import { cn } from "@/lib/utils";
import { CurrencyHelper } from "@/shared/helpers/currency-helper";
import { DateHelper } from "@/shared/helpers/date-helper";
import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export const transactionsColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Recipient / Sender",
    cell({ row }) {
      const name: string = row.getValue("name");
      const avatar: string = row.original.avatar;
      const category: string = row.getValue("category");

      return (
        <div className="flex items-center gap-200">
          <Image
            className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
            src={avatar}
            alt={name}
            width={40}
            height={40}
          />

          <div className="flex flex-col gap-50">
            <p className="text-sm text-appGrey font-bold">{name}</p>
            <span className="block sm:hidden text-appGrey-500 font-normal text-xs">
              {category}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: () => <p className="hidden sm:block">Category</p>,
    cell({ row }) {
      const category: string = row.getValue("category");

      return (
        <p className="hidden sm:block text-xs text-appGrey-500 font-normal">
          {category}
        </p>
      );
    },
  },
  {
    accessorKey: "date",
    header: () => <p className="hidden sm:block">Transaction Date</p>,
    cell({ row }) {
      const date: Date = row.getValue("date");
      const formatted = new DateHelper().getWithInitialMonth(date);

      return (
        <p className="hidden sm:block text-xs text-appGrey-500 font-normal">
          {formatted}
        </p>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell({ row }) {
      const amount: number = row.getValue("amount");

      const date: Date = row.getValue("date");
      const formatted = new DateHelper().getWithInitialMonth(date);

      const currency = new CurrencyHelper().formatCurrency(amount);

      return (
        <div className="flex flex-col gap-50 items-end sm:items-start">
          <p
            className={cn(
              "text-sm font-bold",
              amount < 0 ? "text-appGrey" : "text-appGreen"
            )}
          >
            {currency}
          </p>
          <span className="block sm:hidden text-xs text-appGrey-500 font-normal text-end">
            {formatted}
          </span>
        </div>
      );
    },
  },
];
