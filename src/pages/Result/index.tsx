import Header from "../../components/Header";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Chart from "./components/Chart";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";

interface answerData {
  problemId: string;
  solution: number; // 내가 입력한 정답
  answer: number; // 실제 정답
}

interface score {
  title: string;
  value: number;
  color: string;
}

let count: number;
let correct: number;
let wrong: number;

export default function Result(props: { sections: any }) {
  count = 0;
  correct = 0;
  wrong = 0;

  const location = useLocation();
  
  const answerData = location.state.data;
  
  answerData.map((answerData: answerData) => {
    answerData.answer == answerData.solution ? correct++ : wrong++;
  });

  var score: score[] = [
    { title: "correct", value: correct, color: "#73C23A" },
    { title: "wrong", value: wrong, color: "#C13C37" },
  ];

  return (
    <div>
      <Header title="MATHrone" sections={props.sections} />
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        <Grid item xs={6}>
          <Box sx={{ display: "flex", justifyContent: "center", margin: "3%" }}>
            <Chart data={score} />
          </Box>
        </Grid>
        <Grid item xs={6} justifyContent="left">
          <Box ml={2} sx={{ width: "90%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 600 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow style={{ backgroundColor: "#d2d2d2" }}>
                    <TableCell align="center" padding="none">
                      {" "}
                      No.{" "}
                    </TableCell>
                    <TableCell align="center" padding="none">
                      {" "}
                      정 답{" "}
                    </TableCell>
                    <TableCell align="center" padding="none">
                      {" "}
                      나의 답{" "}
                    </TableCell>
                    <TableCell align="center" padding="none">
                      {" "}
                      결 과{" "}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {answerData.map((answerData: answerData) => (
                    <TableRow key={answerData.problemId}>
                      <TableCell align="center" padding="none">
                        {++count /* 문항 번호 */} 
                      </TableCell>
                      <TableCell align="center" padding="none">
                        {answerData.answer /* 실제 답안 */} 
                      </TableCell>
                      <TableCell align="center" padding="none">
                        {answerData.solution /* 내가 입력한 답 */} 
                      </TableCell>
                      <TableCell align="center" padding="none">
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          {answerData.answer == answerData.solution ? (
                            <Card
                              sx={{
                                backgroundColor: "#73C23A",
                                p: "none",
                                width: "50%",
                              }}
                            >
                              <Typography>정답</Typography>
                            </Card>
                          ) : (
                            <Card
                              sx={{
                                backgroundColor: "#C13C37",
                                p: "none",
                                width: "50%",
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
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </div>
  );
}
