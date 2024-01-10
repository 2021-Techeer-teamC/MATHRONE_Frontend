import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Pagination from './components/Pagination';
import Header from '../../components/Header';
import AnswerSheet from './components/AnswerSheet';
import { useStore } from '../../store';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import ProblemCarousel from './components/ProblemCarousel';
import { ProblemDetailGrid } from './style';

const ProblemDetail = observer(()  => {
  const { problemStore } = useStore();
  const { problemList } = problemStore;
  const [num, setNum] = useState<number>(1);

  return (
    <Box>
      <Header />
      <ProblemDetailGrid container spacing={4}>
        {problemList.length !== 0 ? (
          <>
            <Grid className="problem__box--left" item xs={9}>
              <ProblemCarousel posts={problemList[num - 1]} setNum={setNum} num={num} len={problemList.length} />
              <Pagination setNum={setNum} len={problemList.length} num={num} />
            </Grid>
            <Grid item xs={3}>
              <AnswerSheet propsdata={problemList} />
            </Grid>
          </>
        ) : (
          <div className="problem__box--loading">문제를 가져오고 있습니다....</div>
        )}
      </ProblemDetailGrid>
    </Box>
  );
})

export default ProblemDetail;
