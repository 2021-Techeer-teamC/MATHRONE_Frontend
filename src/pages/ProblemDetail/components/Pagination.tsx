import React from 'react';
import Pagination from 'rc-pagination';
import '../../../../node_modules/rc-pagination/assets/index.css';
import { PaginationDiv } from '../style';

interface Props {
  handlePageChange: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  num: number;
}

const ProbPagination = ({ handlePageChange, total, num }: Props) => {
  return (
    <PaginationDiv>
      <Pagination
        simple
        defaultCurrent={1}
        pageSize={1}
        current={num}
        total={total}
        onChange={handlePageChange}
      />
    </PaginationDiv>
  );
};

export default ProbPagination;
