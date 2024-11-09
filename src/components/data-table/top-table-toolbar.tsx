import { Table } from "@tanstack/react-table";
import { SearchState, SearchTable } from "./components/search-table";
import {
  ActionCallout,
  ActionTableCallout,
} from "./components/action-table-callout";
import { cn } from "@/lib/utils";

interface IToolbarTableCommandsProps<TData> {
  table: Table<TData>;
  searchOptions?: SearchState;
  actions?: ActionCallout[];
}

export function TopTableToolbar<TData>(
  props: Readonly<IToolbarTableCommandsProps<TData>>
) {
  const { table, searchOptions, actions } = props;

  return (
    <section
      id="top-table-toolbar"
      className="w-full flex items-center justify-between gap-300 flex-wrap md:flex-nowrap"
    >
      <div className={cn("w-full", actions && "max-w-[320px]")}>
        {searchOptions && (
          <SearchTable<TData> table={table} {...searchOptions} />
        )}
      </div>

      {actions && (
        <div className="flex items-center justify-end gap-300">
          {actions?.map((action) => (
            <ActionTableCallout table={table} key={action.id} {...action} />
          ))}
        </div>
      )}
    </section>
  );
}