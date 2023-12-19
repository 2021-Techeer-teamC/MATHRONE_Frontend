import React, { useEffect } from 'react';
import Pagination from './components/ProbPagination';
import Header from '../../components/Header';
import AnswerSheet from './components/AnswerSheet';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import { Container, Grid, Typography } from '@mui/material';
import problemsService from '../../services/problemsService';
import problems from '../../types/problems';
import ProbImg from './components/ProbImg';

export default function ProblemDetail() {
  const params = useParams();
  const [data, setProbDatas] = React.useState<problems[]>([]);
  const [num, setNum] = React.useState(1);

  useEffect(() => {
    problemsService.getProblems(params.workbookId, params.chapterId).then((response) => setProbDatas(response.data));
  }, [params.workbookId, params.chapterId]);

  return data.length !== 0 ? (
    <Box>
      <Header />
      <Grid container spacing={0} margin={5}>
        <Grid item xs={2}>
          <AnswerSheet propsdata={data} />
        </Grid>
        <Grid item xs={8}>
          <ProbImg posts={data[num - 1]} setNum={setNum} num={num} len={data.length} />
          <Pagination setNum={setNum} len={data.length} num={num} />
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Box>
  ) : null;
}
