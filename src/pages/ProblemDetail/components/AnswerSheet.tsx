import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Radio,
  TextField,
  Button
} from '@mui/material';
import grading from '../../../services/answerService';
import problemItem from '../../../types/problems';
import { userAnswerItem } from '../../../types/answers';
import {
  AnswerSheetBox,
  TableContainerBox,
  TableCellCenter,
  SubmitButtonBox
} from '../style';

const TableHeader = [
  '①',
  '②',
  '③',
  '④',
  '⑤'
];

type AnswerSheetProps = {
  problems: problemItem[],
}

const AnswerSheet = ({ problems }: AnswerSheetProps) => {
  const navigate = useNavigate();
  const temp = Array.from(problems);
  const [inputs, setInputs] = useState(
    ([] = temp.map((probData: problemItem) => ({
      problemId: probData.problemId,
      myAnswer: 'a',
    }))),
  );

  const onChange = (value: string, prob_num: string) => {
    setInputs(inputs.map((answer) => (answer.problemId === prob_num ? { ...answer, myAnswer: value } : answer)));
  };

  const submitAnswer = async (inputs: any, isAll: boolean) => {
    const postData: userAnswerItem = {
      answerSubmitList: inputs,
      isAll: isAll,
    };
    try {
      const res = await grading.postAnswer(postData);
      navigate('/result', { state: { answerData: res.data } });
    } catch (error) {
      console.log(error);
    }
  };

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
                <TableCell component="th" scope="row" align="center" padding="none">
                  {problem.problemNum}
                </TableCell>
                {
                  problem.multiple === false ? (
                    <TableCellCenter colSpan={5}>
                      <TextField
                        className="table__cell--textfield"
                        sx={{ pt: '0px' }}
                        value={inputs[problem.problemNum - 1].myAnswer}
                        onChange={(e) => onChange(e.target.value, problem.problemId)}
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
                          checked={Number(inputs[problem.problemNum - 1].myAnswer) === Number(idx+1)}
                          onChange={(e) => onChange(e.target.value, problem.problemId)}
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
        <Button onClick={() => submitAnswer(inputs, false)}>
          푼 것만 채점
        </Button>
        <Button onClick={() => submitAnswer(inputs, true)}>
          전부 다 채점
        </Button>
      </SubmitButtonBox>
    </AnswerSheetBox>
  );
};
export default AnswerSheet;
