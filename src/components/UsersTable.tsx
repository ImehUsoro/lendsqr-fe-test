import { Link, useLoaderData } from "react-router-dom";
import "../styles/UsersTable/UsersTable.css";
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { columns } from "../utils/columns";
import { useMemo, useState } from "react";
import {
  MdOutlineMoreVert,
  MdOutlineArrowBackIosNew,
  MdArrowForwardIos,
} from "react-icons/md";
import { BiFilter } from "react-icons/bi";
import GlobalFilter from "./GlobalFilter";
import ColumnFilter from "./ColumnFilter";
import TablePagination from "./TablePagination";

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
  const defaultColumn = useMemo(
    () => ({
      Filter: ColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    prepareRow,
    state,
    canPreviousPage,
    canNextPage,
    setGlobalFilter,
    nextPage,
    previousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = useTable(
    {
      columns: rowColumns as any,
      data: rowData as readonly { [x: string]: {} }[],
      defaultColumn,
      // initialState: { pageIndex: 3 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;
  const [selectedValue, setSelectedValue] = useState(0);

  return (
    <>
      <div className="table-container">
        {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}

        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column: any, index) => (
                  <th key={index}>
                    <div className="table-head-group">
                      <div
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render("Header")}
                      </div>
                      {column.render("Header") !== "" && (
                        <BiFilter size={"1rem"} />
                      )}
                      {/* <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div> */}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell: any) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className={`row ${index === 9 ? "no-border" : ""}`}
                      >
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
                        ) : cell.column.Header === "" ? (
                          <div className="status-action">
                            {cell.render("Cell")}
                            {/* <div className="action-modal">testing</div> */}
                          </div>
                        ) : (
                          <>{cell.render("Cell")}</>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="table-pagination">
        <div className="table-page-counter">
          <div className="showing">
            Showing{" "}
            <div className="showing-select">
              <select onChange={(e) => gotoPage(+e.target.value - 1)}>
                {pageOptions.map((item, index) => (
                  <option
                    value={index + 1}
                    selected={pageIndex === index ? true : false}
                  >
                    {(index + 1) * pageSize}
                  </option>
                ))}
              </select>{" "}
            </div>
            out of {pageOptions.length * pageSize}
          </div>
        </div>

        <div className="table-navigators">
          <div className="secondary-nav">
            <button
              className="action-icon"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <MdOutlineArrowBackIosNew />
            </button>

            <TablePagination
              currentValue={pageIndex + 1}
              total={pageOptions.length}
            />

            <button
              className="action-icon"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersTable;
