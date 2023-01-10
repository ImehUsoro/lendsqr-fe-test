import { useEffect, useState } from "react";
import "../styles/TablePagination/TablePagination.css";

interface TablePaginationProps {
  currentValue: number;
  total: number;
}

const TablePagination = (props: TablePaginationProps) => {
  const { currentValue, total } = props;
  //   const [paginationState, setPaginationState] = useState(0);

  //   console.log({ currentValue });
  //   console.log({ minus: total - 2 });

  //   useEffect(() => {
  // if (currentValue > 3 && currentValue < total - 2) {
  //   setPaginationState(1);
  // } else if (currentValue > total - 2) {
  //   setPaginationState(2);
  // } else {
  //   setPaginationState(0);
  // }
  // setPaginationState(currentValue);
  //   }, [currentValue, total]);

  return (
    <>
      {currentValue === 1 ? (
        <div className="numbers-group">
          <div className="highlight">{currentValue}</div>
          <div>{currentValue + 1}</div>
          <div>{currentValue + 2}</div>
          <div>...</div>
          <div>{total - 1}</div>
          <div>{total}</div>
        </div>
      ) : currentValue === 2 ? (
        <div className="numbers-group">
          <div>{currentValue - 1}</div>
          <div className="highlight">{currentValue}</div>
          <div>{currentValue + 1}</div>
          <div>...</div>
          <div>{total - 1}</div>
          <div>{total}</div>
        </div>
      ) : currentValue === 3 ? (
        <div className="numbers-group">
          <div>{currentValue - 2}</div>
          <div>{currentValue - 1}</div>
          <div className="highlight">{currentValue}</div>
          <div>...</div>
          <div>{total - 1}</div>
          <div>{total}</div>
        </div>
      ) : currentValue > 3 &&
        currentValue !== total - 2 &&
        currentValue !== total - 1 &&
        currentValue !== total ? (
        <div className="numbers-group">
          <div>1</div>
          <div>...</div>
          <div className="highlight">{currentValue}</div>
          <div className="">{currentValue + 1}</div>
          <div>...</div>
          <div>{total - 1}</div>
          <div>{total}</div>
        </div>
      ) : currentValue === total - 2 &&
        currentValue !== total - 1 &&
        currentValue !== total ? (
        <div className="numbers-group">
          <div>1</div>
          <div>2</div>
          <div>...</div>
          <div className="highlight">{currentValue}</div>
          <div>{total - 1}</div>
          <div>{total}</div>
        </div>
      ) : currentValue === total - 1 && currentValue !== total ? (
        <div className="numbers-group">
          <div>1</div>
          <div>2</div>
          <div>...</div>
          <div>{currentValue - 1}</div>
          <div className="highlight">{currentValue}</div>
          <div>{total}</div>
        </div>
      ) : (
        <div className="numbers-group">
          <div>1</div>
          <div>2</div>
          <div>...</div>
          <div>{currentValue - 2}</div>
          <div>{currentValue - 1}</div>
          <div className="highlight">{currentValue}</div>
        </div>
      )}
    </>
  );
};

export default TablePagination;
