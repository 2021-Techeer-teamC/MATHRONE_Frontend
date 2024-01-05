import React from 'react';
import Pagination from 'rc-pagination';
import '../../../../node_modules/rc-pagination/assets/index.css';
import { PaginationDiv } from '../style';

interface Props {
  setNum: React.Dispatch<React.SetStateAction<number>>;
  len: number;
  num: number;
}

const ProbPagination = ({ setNum, len, num }: Props) => {
  return (
    <PaginationDiv>
      <Pagination simple defaultCurrent={1} current={num} total={len} pageSize={1} onChange={setNum} />
    </PaginationDiv>
  );
};

export default ProbPagination;
