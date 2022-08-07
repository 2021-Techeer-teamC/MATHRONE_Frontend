import React from "react";
import Pagination from "rc-pagination";
import "../../node_modules/rc-pagination/assets/index.css";

const ProbPagination = ({ setNum, len, num }: any) => {
  return (
    <div>
      <Pagination
        simple
        defaultCurrent={1}
        current={num}
        total={len}
        pageSize={1}
        onChange={setNum}
      />
    </div>
  );
};

export default ProbPagination;
