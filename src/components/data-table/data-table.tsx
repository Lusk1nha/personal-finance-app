"use client";

import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Table } from "../ui/table";
import { HeaderTable } from "./components/header-table";
import { BodyTable } from "./components/body-table";
import { TopTableToolbar } from "./top-table-toolbar";
import { SearchState } from "./components/search-table";
import { ActionCallout } from "./components/action-table-callout";

interface DataTableProps<TData, TValue> {
  id: string;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];

  searchOptions?: SearchState;
  actions?: ActionCallout[];

  defaultSizes?: number[];
}

export function DataTable<TData, TValue>(
  props: Readonly<DataTableProps<TData, TValue>>
) {
  const { id, searchOptions, columns, data, actions } = props;

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div id={id} className="w-full h-full flex flex-col justify-between">
      <div className="w-full h-full flex-1 flex flex-col gap-300">
        <TopTableToolbar<TData>
          table={table}
          searchOptions={searchOptions}
          actions={actions}
        />

        <Table>
          <HeaderTable<TData> table={table} />
          <BodyTable<TData> table={table} />
        </Table>
      </div>
    </div>
  );
}
