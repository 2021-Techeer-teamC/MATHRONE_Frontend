import { useState, useEffect } from 'react';
import Pagination from './components/ProbPagination';
import Header from '../../components/Header';
import AnswerSheet from './components/AnswerSheet';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import problemsService from '../../services/problemsService';
import problems from '../../types/problems';
import ProblemCarousel from './components/ProblemCarousel';
import { ProblemDetailGrid } from './style';

export default function ProblemDetail() {
  const params = useParams();
  const [data, setProbDatas] = useState<problems[]>([]);
  const [num, setNum] = useState<number>(1);

  useEffect(() => {
    problemsService.getProblems(params.workbookId, params.chapterId).then((response) => setProbDatas(response.data));
  }, [params.workbookId, params.chapterId]);

  return (
    <Box>
      <Header />
      <ProblemDetailGrid container spacing={4}>
        {data.length !== 0 ? (
          <>
            <Grid item xs={9}>
              <ProblemCarousel posts={data[num - 1]} setNum={setNum} num={num} len={data.length} />
              <Pagination setNum={setNum} len={data.length} num={num} />
            </Grid>
            <Grid item xs={3}>
              <AnswerSheet propsdata={data} />
            </Grid>
          </>
        ) : (
          <div className="problem__box--loading">문제를 가져오고 있습니다....</div>
        )}
      </ProblemDetailGrid>
    </Box>
  );
}
