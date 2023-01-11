import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { modalFilterState } from "../atoms/dashboardMenuAtom";
interface ColumnFilterProps {
  column?: any;
  // name: string
}

const ColumnFilter = (props: ColumnFilterProps) => {
  const formData = useRecoilValue(modalFilterState);
  const { org, username, email, status, phoneNumber } = formData;
  const { filterValue, setFilter, Header } = props.column;

  useEffect(() => {
    setFilter(
      Header === "Status"
        ? status
        : Header === "Organization"
        ? org
        : Header === "Username"
        ? username
        : Header === "Email"
        ? email
        : Header === "Phone Number"
        ? phoneNumber
        : null
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [org, username, email, status, phoneNumber]);
  return (
    <div>
      <input
        type="text"
        value={filterValue || ""}
        placeholder="search column"
        // onChange={(e) => {
        //   setFilter(Header === "Status" ? formData.status : null);
        // }}
      />
    </div>
  );
};

export default ColumnFilter;
