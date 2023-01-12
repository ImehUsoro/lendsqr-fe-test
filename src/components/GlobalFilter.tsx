import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { globalFilterState } from "../atoms/dashboardMenuAtom";

interface GlobalFilterProps {
  filter: any;
  setFilter: any;
}

export const GlobalFilter = (props: GlobalFilterProps) => {
  const { setFilter } = props;
  const globalFilterValue = useRecoilValue(globalFilterState);

  useEffect(() => {
    setFilter(globalFilterValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
