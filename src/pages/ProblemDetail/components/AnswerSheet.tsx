import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Radio,
  TextField,
  Button
} from '@mui/material';
import problemItem from '../../../types/problems';
import {
  AnswerSheetBox,
  TableContainerBox,
  TableCellCenter,
  SubmitButtonBox
} from '../style';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../store';
import { useEffect } from 'react';

const TableHeader: string[] = [
  '①',
  '②',
  '③',
  '④',
  '⑤'
];

type AnswerSheetProps = {
  problems: problemItem[],
  handleProblemChange: (problemId: number) => void,
}

const AnswerSheet = observer(({ problems, handleProblemChange}: AnswerSheetProps) => {
  const navigate = useNavigate();
  const { answerStore } = useStore();
  const { changeAnswer, initializeAnswerList, userAnswerList, submitAnswerList } = answerStore;

  const handleAnswerChange = (input: string, problemId: string) => {
    changeAnswer(input, problemId);
  };

  const submitAnswer = async (isAll: boolean) => {
    await submitAnswerList(isAll).then((res) => {
      // console.log('answer submitted');
      navigate('/result', { state: { answerData: res } });
    })
  };

  useEffect(() => {
    initializeAnswerList(problems);
  },[])

  return (
    <AnswerSheetBox>
      <TableContainerBox>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCellCenter>NO.</TableCellCenter>
              {
                TableHeader.map(headerText =>
                  <TableCellCenter>{headerText}</TableCellCenter>
                )
              }
            </TableRow>
          </TableHead>
          {problems.map((problem: problemItem) => (
            <TableBody key={problem.problemNum}>
              <TableRow>
                <TableCellCenter
                  className="table__cell--number"
                  component="th"
                  scope="row"
                  onClick={() => handleProblemChange(problem.problemNum - 1)}
                >
                  {problem.problemNum}
                </TableCellCenter>
                {
                  problem.multiple === false ? (
                    <TableCellCenter colSpan={5}>
                      <TextField
                        className="table__cell--textfield"
                        value={userAnswerList[problem.problemNum - 1]?.myAnswer}
                        onChange={(e) => handleAnswerChange(e.target.value, problem.problemId)}
                        type="number"
                        size="small"
                        variant="standard"
                        inputProps={{ style: { padding: 5 } }}
                      />
                    </TableCellCenter>
                  ) : (
                    TableHeader.map((headerKey, idx) => 
                      <TableCellCenter>
                        <Radio
                          checked={Number(userAnswerList[problem.problemNum - 1]?.myAnswer) === Number(idx+1)}
                          onChange={(e) => handleAnswerChange(e.target.value, problem.problemId)}
                          value={idx+1}
                          name="radio-buttons"
                          id={`table-cell-${headerKey}`}
                          inputProps={{ 'aria-label': `${idx+1}` }}
                        />
                      </TableCellCenter>
                    )
                  )
                }
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainerBox>
      <SubmitButtonBox>
        <Button onClick={() => submitAnswer(false)}>
          푼 것만 채점
        </Button>
        <Button onClick={() => submitAnswer(true)}>
          전부 다 채점
        </Button>
      </SubmitButtonBox>
    </AnswerSheetBox>
  );
});

export default AnswerSheet;