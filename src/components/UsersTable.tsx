import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import "../styles/UsersTable/UsersTable.css";
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { columns } from "../utils/columns";
import { useEffect, useMemo, useRef, useState, MutableRefObject } from "react";
import {
  MdOutlineMoreVert,
  MdOutlineArrowBackIosNew,
  MdArrowForwardIos,
} from "react-icons/md";
import { BiFilter } from "react-icons/bi";
import GlobalFilter from "./GlobalFilter";
import ColumnFilter from "./ColumnFilter";
import TablePagination from "./TablePagination";
// import eye from "../assets/icons/eye.png";
// import blacklist from "../assets/icons/blacklist.png";
// import activate from "../assets/icons/activate.png";
import { IoEyeOutline } from "react-icons/io5";
import { BiUserX } from "react-icons/bi";
import { GrUserExpert } from "react-icons/gr";
import FilterModal from "./FilterModal";
import { modalFilterState } from "../atoms/dashboardMenuAtom";
import { useRecoilState } from "recoil";

const UsersTable = () => {
  const [actionModal, setActionModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(0);
  const [formData, setFormData] = useRecoilState(modalFilterState);
  console.log(formData);

  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  const filterRef = useRef() as MutableRefObject<HTMLDivElement>;

  const navigate = useNavigate();

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (actionModal && ref.current && !ref.current.contains(e.target)) {
        setActionModal(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [actionModal]);

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
                      <div
                        className="filter"
                        onClick={() => {
                          setFilterModal(true);
                          setFormData({
                            org: "",
                            username: "",
                            email: "",
                            phoneNumber: "",
                            status: "",
                          });
                        }}
                      >
                        {column.render("Header") !== "" && (
                          <BiFilter size={"1rem"} />
                        )}
                      </div>
                      <div className="hidden">
                        {column.canFilter ? column.render("Filter") : null}
                      </div>
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
                          <div
                            className="status-action"
                            onClick={() => {
                              setSelectedRow(cell.row.id);
                              setActionModal(!actionModal);
                            }}
                          >
                            {cell.render("Cell")}
                            {actionModal && +selectedRow === +index && (
                              <div className="action-modal" ref={ref}>
                                <div
                                  className="icon-and-text"
                                  onClick={() => {
                                    window.scrollTo({
                                      top: 0,
                                      left: 0,
                                      behavior: "smooth",
                                    });
                                    navigate(
                                      `/user-details/${cell.row.original.id}`
                                    );
                                  }}
                                >
                                  <IoEyeOutline
                                    color="#545F7D"
                                    size={"1.2rem"}
                                  />
                                  <p className="item">View Details</p>
                                </div>
                                <div className="icon-and-text">
                                  <BiUserX color="#545F7D" size={"1.2rem"} />
                                  <p className="item">Blacklist User</p>
                                </div>
                                <div className="icon-and-text">
                                  <GrUserExpert color="#545F7D" />
                                  <p className="item">Activate User</p>
                                </div>
                              </div>
                            )}
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

        {filterModal && (
          <FilterModal
            filterRef={filterRef}
            filterModal={filterModal}
            setFilterModal={setFilterModal}
          />
        )}
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
                    key={item}
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
              gotoPage={gotoPage}
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

// IoEyeOutline
