import Header from '../../components/Header';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Chart from './components/Chart';
import { useLocation } from 'react-router-dom';
import answersList from '../../types/answers';

interface score {
  title: string;
  value: number;
  color: string;
}

let count: number;
let correct: number;
let wrong: number;

export default function Result() {
  count = 0;
  correct = 0;
  wrong = 0;
  const location = useLocation();
  const answerData = location.state.answerData;
  answerData.map((answerData: answersList) => {
    answerData.correctAnswer === answerData.myAnswer ? correct++ : wrong++;
  });

  const score: score[] = [
    { title: 'correct', value: correct, color: '#73C23A' },
    { title: 'wrong', value: wrong, color: '#C13C37' },
  ];

  return (
    <div>
      <Header />
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        <Grid item xs={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center', margin: '3%' }}>
            <Chart data={score} />
          </Box>
        </Grid>
        <Grid item xs={6} justifyContent="left">
          <Box ml={2} sx={{ width: '90%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 600 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow style={{ backgroundColor: '#d2d2d2' }}>
                    <TableCell align="center" padding="none">
                      {' '}
                      No.{' '}
                    </TableCell>
                    <TableCell align="center" padding="none">
                      {' '}
                      정 답{' '}
                    </TableCell>
                    <TableCell align="center" padding="none">
                      {' '}
                      나의 답{' '}
                    </TableCell>
                    <TableCell align="center" padding="none">
                      {' '}
                      결 과{' '}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {answerData.map((answerData: answersList) => (
                    <TableRow key={answerData.problemId}>
                      <TableCell align="center" padding="none">
                        {++count}
                      </TableCell>
                      <TableCell align="center" padding="none">
                        {answerData.myAnswer}
                      </TableCell>
                      <TableCell align="center" padding="none">
                        {answerData.correctAnswer}
                      </TableCell>
                      <TableCell align="center" padding="none">
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                          {answerData.correctAnswer === answerData.myAnswer ? (
                            <Card
                              sx={{
                                backgroundColor: '#73C23A',
                                p: 'none',
                                width: '50%',
                              }}
                            >
                              <Typography>정답</Typography>
                            </Card>
                          ) : (
                            <Card
                              sx={{
                                backgroundColor: '#C13C37',
                                p: 'none',
                                width: '50%',
                              }}
                            >
                              <Typography>오답</Typography>
                            </Card>
                          )}
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
