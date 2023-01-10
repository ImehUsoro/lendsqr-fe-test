import "../styles/TablePagination/TablePagination.css";

interface TablePaginationProps {
  currentValue: number;
  total: number;
  gotoPage: (page: number) => void;
}

const TablePagination = (props: TablePaginationProps) => {
  const { currentValue, total, gotoPage } = props;

  return (
    <>
      {currentValue === 1 ? (
        <div className="numbers-group">
          <div className="highlight page-number">{currentValue}</div>
          <div className="page-number" onClick={() => gotoPage(currentValue)}>
            {currentValue + 1}
          </div>
          <div
            className="page-number"
            onClick={() => gotoPage(currentValue + 1)}
          >
            {currentValue + 2}
          </div>
          <div className="page-number">...</div>
          <div className="page-number" onClick={() => gotoPage(total - 2)}>
            {total - 1}
          </div>
          <div className="page-number" onClick={() => gotoPage(total - 1)}>
            {total}
          </div>
        </div>
      ) : currentValue === 2 ? (
        <div className="numbers-group">
          <div
            className="page-number"
            onClick={() => gotoPage(currentValue - 2)}
          >
            {currentValue - 1}
          </div>
          <div className="highlight page-number">{currentValue}</div>
          <div className="page-number" onClick={() => gotoPage(currentValue)}>
            {currentValue + 1}
          </div>
          <div className="page-number">...</div>
          <div className="page-number" onClick={() => gotoPage(total - 2)}>
            {total - 1}
          </div>
          <div className="page-number" onClick={() => gotoPage(total - 1)}>
            {total}
          </div>
        </div>
      ) : currentValue === 3 ? (
        <div className="numbers-group">
          <div
            className="page-number"
            onClick={() => gotoPage(currentValue - 3)}
          >
            {currentValue - 2}
          </div>
          <div
            className="page-number"
            // onClick={() => gotoPage(currentValue - 2)}
          >
            {/* {currentValue - 1} */}
            ...
          </div>
          <div className="highlight page-number">{currentValue}</div>
          <div className="page-number">...</div>
          <div className="page-number" onClick={() => gotoPage(total - 2)}>
            {total - 1}
          </div>
          <div className="page-number" onClick={() => gotoPage(total - 1)}>
            {total}
          </div>
        </div>
      ) : currentValue > 3 &&
        currentValue !== total - 2 &&
        currentValue !== total - 1 &&
        currentValue !== total ? (
        <div className="numbers-group">
          <div className="page-number" onClick={() => gotoPage(0)}>
            1
          </div>
          <div className="page-number">...</div>
          <div className="highlight page-number">{currentValue}</div>
          <div className="page-number">...</div>
          <div className="page-number" onClick={() => gotoPage(total - 2)}>
            {total - 1}
          </div>
          <div className="page-number" onClick={() => gotoPage(total - 1)}>
            {total}
          </div>
        </div>
      ) : currentValue === total - 2 &&
        currentValue !== total - 1 &&
        currentValue !== total ? (
        <div className="numbers-group">
          <div className="page-number" onClick={() => gotoPage(0)}>
            1
          </div>
          <div className="page-number" onClick={() => gotoPage(1)}>
            2
          </div>
          <div className="page-number">...</div>
          <div className="highlight page-number">{currentValue}</div>
          <div className="page-number" onClick={() => gotoPage(total - 2)}>
            {total - 1}
          </div>
          <div className="page-number" onClick={() => gotoPage(total - 1)}>
            {total}
          </div>
        </div>
      ) : currentValue === total - 1 && currentValue !== total ? (
        <div className="numbers-group">
          <div className="page-number" onClick={() => gotoPage(0)}>
            1
          </div>
          <div className="page-number" onClick={() => gotoPage(1)}>
            2
          </div>
          <div className="page-number">...</div>
          <div
            className="page-number"
            onClick={() => gotoPage(currentValue - 2)}
          >
            {currentValue - 1}
          </div>
          <div className="highlight page-number">{currentValue}</div>
          <div className="page-number" onClick={() => gotoPage(total - 1)}>
            {total}
          </div>
        </div>
      ) : (
        <div className="numbers-group">
          <div className="page-number" onClick={() => gotoPage(0)}>
            1
          </div>
          <div className="page-number" onClick={() => gotoPage(1)}>
            2
          </div>
          <div className="page-number">...</div>
          <div
            className="page-number"
            onClick={() => gotoPage(currentValue - 3)}
          >
            {currentValue - 2}
          </div>
          <div
            className="page-number"
            onClick={() => gotoPage(currentValue - 2)}
          >
            {currentValue - 1}
          </div>
          <div className="highlight page-number">{currentValue}</div>
        </div>
      )}
    </>
  );
};

export default TablePagination;
