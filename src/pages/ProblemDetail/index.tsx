import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import Pagination from './components/Pagination';
import Header from '../../components/Header';
import AnswerSheet from './components/AnswerSheet';
import { Box, Grid, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ProblemDetailGrid, ProblemCarouselBox } from './style';

const ProblemDetail = observer(()  => {
  const params = useParams();
  const { problemStore } = useStore();
  const { problemList, getProblemList } = problemStore;
  const [num, setNum] = useState<number>(1);

  const goPreviousProblem = (_e: React.MouseEvent<HTMLButtonElement>) => {
    if(num !== 1) setNum((prev) => prev - 1);
  }

  const goNextProblem = (_e: React.MouseEvent<HTMLButtonElement>) => {
    if(num !== problemList.length) setNum((prev) => prev + 1);
  }

  useEffect(() => {
    // problemList가 없는 경우 데이터 패치
    if(problemList.length === 0 && params.workbookId && params.chapterId) {
      getProblemList(params.workbookId, params.chapterId);
    }
  }, []);

  return (
    <Box>
      <Header />
      <ProblemDetailGrid container>
        {problemList.length !== 0 ? (
          <>
            <Grid className="problem__box--problems" item xs={9}>
              <ProblemCarouselBox>
                <IconButton onClick={(e) => goPreviousProblem(e)}>
                  <ArrowBackIosNewIcon />
                </IconButton>
                <Box component="img" src={problemList[num - 1].problemImg}></Box>
                <IconButton onClick={(e) => goNextProblem(e)}>
                  <ArrowForwardIosIcon />
                </IconButton>
              </ProblemCarouselBox>
              <Pagination handlePageChange={setNum} total={problemList.length} num={num} />
            </Grid>
            <Grid className="problem__box--answers" item xs={3} style={{boxSizing: 'border-box'}}>
              <AnswerSheet problems={problemList} />
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
