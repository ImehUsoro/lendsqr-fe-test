import { useState } from "react";
import { useAsyncDebounce } from "react-table";

interface GlobalFilterProps {
  filter: any;
  setFilter: any;
}

export const GlobalFilter = (props: GlobalFilterProps) => {
  const { filter, setFilter } = props;
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 400);

  return (
    <div>
      <span>Search Table</span>
      <input
        type="text"
        value={value || ""}
        placeholder="global filter"
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default GlobalFilter;
