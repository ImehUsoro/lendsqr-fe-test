import React from "react";

interface ColumnFilterProps {
  column?: any;
}

const ColumnFilter = (props: ColumnFilterProps) => {
  const { filterValue, setFilter } = props.column;
  return (
    <div>
      <input
        type="text"
        value={filterValue || ""}
        placeholder="search column"
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default ColumnFilter;
