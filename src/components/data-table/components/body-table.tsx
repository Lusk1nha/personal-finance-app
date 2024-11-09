import { Row, Table } from "@tanstack/react-table";
import { TableBody } from "../../ui/table";
import { EmptyTableRow } from "./empty-table-row";
import { RowTable } from "./row-table";

interface IBodyTableProps<TData> {
  table: Table<TData>;
  renderSubComponent?: (props: { row: Row<TData> }) => React.ReactElement;
  emptyMessage?: string;
}

export function BodyTable<TData>(props: Readonly<IBodyTableProps<TData>>) {
  const {
    table,
    emptyMessage = "There is no data to display",
    renderSubComponent,
  } = props;

  if (!table.getRowModel().rows?.length)
    return (
      <TableBody>
        <EmptyTableRow
          columnsLength={table.getAllColumns().length}
          message={emptyMessage}
        />
      </TableBody>
    );

  return (
    <TableBody>
      {table.getRowModel().rows.map((row) => (
        <RowTable<TData>
          key={row.id}
          row={row}
          renderSubComponent={renderSubComponent}
        />
      ))}
    </TableBody>
  );
}
