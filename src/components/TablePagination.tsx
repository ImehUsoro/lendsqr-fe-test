import "../styles/TablePagination/TablePagination.css";

interface TablePaginationProps {
  currentValue: number;
  total: number;
}

const TablePagination = (props: TablePaginationProps) => {
  const { currentValue, total } = props;

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
        // currentValue !== total - 3 &&
        currentValue !== total - 2 &&
        currentValue !== total - 1 &&
        currentValue !== total ? (
        <div className="numbers-group">
          <div>1</div>
          <div>...</div>
          <div className="highlight">{currentValue}</div>
          {/* Starts at 4, stops at 7 */}
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
