import { Link, useLoaderData } from "react-router-dom";
import "../styles/UsersTable/UsersTable.css";
import { useTable, useSortBy } from "react-table";
import { columns } from "../utils/columns";
import { useMemo } from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import { BiFilter } from "react-icons/bi";

const UsersTable = () => {
  const statuses = ["Active", "Inactive", "Pending", "Blacklisted"];
  const data: any = useLoaderData();

  const dataWithStatus = data.map((item: any) => {
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

    return {
      ...item,
      status: randomStatus,
      icon: <MdOutlineMoreVert />,
    };
  });

  const rowColumns = useMemo(() => columns, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const rowData = useMemo(() => dataWithStatus, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns: rowColumns as any,
        data: rowData as readonly { [x: string]: {} }[],
      },
      useSortBy
    );

  return (
    <table {...getTableProps()} className="table-container">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
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
              {row.cells.map((cell: any) => {
                return (
                  <td {...cell.getCellProps()} className="row">
                    {cell.column.Header === "Organization" ||
                    cell.column.Header === "Username" ||
                    cell.column.Header === "Email" ||
                    cell.column.Header === "Phone Number" ? (
                      <Link
                        to={`/user-details/${cell.row.original.id}`}
                        className="link-to-user-details"
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        {cell.render("Cell")}
                      </Link>
                    ) : cell.column.Header === "Status" ? (
                      <div className={`${cell.value}`}>
                        {cell.render("Cell")}
                      </div>
                    ) : (
                      <div>{cell.render("Cell")}</div>
                    )}
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
