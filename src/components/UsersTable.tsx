import { useLoaderData } from "react-router-dom";
import "../styles/UsersTable/UsersTable.css";
import { useTable } from "react-table";
import { columns } from "../utils/columns";
import { useMemo } from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import { BiFilter } from "react-icons/bi";

const UsersTable = () => {
  const statuses = ["Active", "Inactive", "Pending", "Blacklisted"];
  const data: any = useLoaderData();

  const dataWithStatus = data.map((item: any) => {
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const date = new Date(item.createdAt);
    const formattedDate = date.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return {
      ...item,
      createdAt: formattedDate.split(" at ").join(" "),
      status: randomStatus,
      icon: <MdOutlineMoreVert />,
    };
  });

  const rowColumns = useMemo(() => columns, []);
  const rowData = useMemo(() => dataWithStatus, []);

  const tableInstance = useTable({
    columns: rowColumns,
    data: rowData as readonly { [x: string]: {} }[],
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()} className="table-container">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                <div className="table-head-group">
                  {column.render("Header")}
                  {column.render("Header") !== "" && <BiFilter size={"1rem"} />}
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()} className="row">
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default UsersTable;
// { [key: string]: string }
