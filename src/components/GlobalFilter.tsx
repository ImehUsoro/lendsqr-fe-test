import { useEffect, useState } from "react";
import { useAsyncDebounce } from "react-table";
import { useRecoilState, useRecoilValue } from "recoil";
import { globalFilterState } from "../atoms/dashboardMenuAtom";

interface GlobalFilterProps {
  filter: any;
  setFilter: any;
}

export const GlobalFilter = (props: GlobalFilterProps) => {
  const { filter, setFilter } = props;
  const globalFilterValue = useRecoilValue(globalFilterState);

  // const onChange = useAsyncDebounce((value) => {
  //   setFilter(value || undefined);
  // }, 400);

  useEffect(() => {
    setFilter(globalFilterValue);
  }, [globalFilterValue]);

  return (
    <div>
      <span>Search Table</span>
      <input
        type="text"
        defaultValue={globalFilterValue || ""}
        placeholder="global filter"
      />
    </div>
  );
};

export default GlobalFilter;
