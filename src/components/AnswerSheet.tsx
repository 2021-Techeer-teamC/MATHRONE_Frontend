import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Radio from "@mui/material/Radio";
import { Box, TextField } from "@mui/material";
import { MenuItem, ControlledMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import grading from "../services/answerService";
import { useNavigate } from "react-router-dom";

interface problemData {
  problem_id: string;
  prob_num: number;
  chapter_id: string;
  prob_img: string;
  level_of_diff: number;
  category: boolean;
}

interface myAnswerData {
  problemSolveList: problemData[];
}

const AnswerSheet = (props: { propsdata: problemData[] }) => {
  const navigator = useNavigate();
  const ref = React.useRef(null);
  const [isOpen, setOpen] = React.useState(false);
  const [inputs, setInputs] = React.useState(
    ([] = props.propsdata.map((probData: problemData) => ({
      problem_id: probData.problem_id,
      my_answer: "a",
    })))
  );

  const onChange = (value: string, prob_num: string) => {
    setInputs(
      inputs.map((answer) =>
        answer.problem_id === prob_num
          ? { ...answer, my_answer: value }
          : answer
      )
    );
  };

  const submitAnswer = (inputs: any) => async () => {
    const postData: myAnswerData = {
      problemSolveList: inputs,
    }; //console.log(postData);
    try {
      const res = await grading.postAnswer(postData);
      navigator("/Result", { state: { answerData: res } });
    } catch (error) {
      console.log(error);
    }
    // answersheet 데이터를 보내고 답을 포함한 데이터 받아오기
  };

  return (
    <Box ml={2} sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" padding="none">
                No
              </TableCell>
              <TableCell align="center" padding="none">
                ①
              </TableCell>
              <TableCell align="center" padding="none">
                ②
              </TableCell>
              <TableCell align="center" padding="none">
                ③
              </TableCell>
              <TableCell align="center" padding="none">
                ④
              </TableCell>
              <TableCell align="center" padding="none">
                ⑤
              </TableCell>
            </TableRow>
          </TableHead>
          {props.propsdata.map((probData: problemData) => (
            <TableBody key={probData.prob_num}>
              {probData.category === false ? (
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    padding="none"
                  >
                    {" "}
                    {probData.prob_num}{" "}
                  </TableCell>
                  <TableCell colSpan={5} align="center" padding="none">
                    <TextField
                      sx={{ pt: "0px" }}
                      value={inputs[probData.prob_num - 1].my_answer}
                      onChange={(e) =>
                        onChange(e.target.value, probData.problem_id)
                      }
                      type="number"
                      size="small"
                      variant="standard"
                      inputProps={{ style: { padding: 5 } }}
                    />
                  </TableCell>
                </TableRow>
              ) : (
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    padding="none"
                  >
                    {" "}
                    {probData.prob_num}{" "}
                  </TableCell>
                  <TableCell align="center" padding="none">
                    <Radio
                      checked={
                        parseInt(inputs[probData.prob_num - 1].my_answer) === 1
                      }
                      onChange={(e) =>
                        onChange(e.target.value, probData.problem_id)
                      }
                      value={1}
                      name="radio-buttons"
                      inputProps={{ "aria-label": "1" }}
                    />
                  </TableCell>
                  <TableCell align="center" padding="none">
                    <Radio
                      checked={
                        parseInt(inputs[probData.prob_num - 1].my_answer) === 2
                      }
                      onChange={(e) =>
                        onChange(e.target.value, probData.problem_id)
                      }
                      value={2}
                      name="radio-buttons"
                      inputProps={{ "aria-label": "2" }}
                    />
                  </TableCell>
                  <TableCell align="center" padding="none">
                    <Radio
                      checked={
                        parseInt(inputs[probData.prob_num - 1].my_answer) === 3
                      }
                      onChange={(e) =>
                        onChange(e.target.value, probData.problem_id)
                      }
                      value={3}
                      name="radio-buttons"
                      inputProps={{ "aria-label": "3" }}
                    />
                  </TableCell>
                  <TableCell align="center" padding="none">
                    <Radio
                      checked={
                        parseInt(inputs[probData.prob_num - 1].my_answer) === 4
                      }
                      onChange={(e) =>
                        onChange(e.target.value, probData.problem_id)
                      }
                      value={4}
                      name="radio-buttons"
                      inputProps={{ "aria-label": "4" }}
                    />
                  </TableCell>
                  <TableCell align="center" padding="none">
                    <Radio
                      checked={
                        parseInt(inputs[probData.prob_num - 1].my_answer) === 5
                      }
                      onChange={(e) =>
                        onChange(e.target.value, probData.problem_id)
                      }
                      value={5}
                      name="radio-buttons"
                      inputProps={{ "aria-label": "5" }}
                    />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          ))}
        </Table>
      </TableContainer>
      <div
        style={{
          width: "100%",
          marginTop: "10px",
          borderRadius: 10,
          backgroundColor: "#dfdfdf",
          padding: "9px 18px",
          fontSize: "16px",
          color: "black",
        }}
        ref={ref}
        className="btn"
        onMouseEnter={() => setOpen(true)}
      >
        Sumbit
      </div>
      <ControlledMenu
        state={isOpen ? "open" : "closed"}
        anchorRef={ref}
        onMouseLeave={() => setOpen(false)}
        onClose={() => setOpen(false)}
        direction={"top"}
        align={"center"}
      >
        <MenuItem
          onClick={() => {
            submitAnswer(inputs);
          }}
        >
          {" "}
          푼 것만 채점{" "}
        </MenuItem>
        <MenuItem
          onClick={() => {
            submitAnswer(inputs);
          }}
        >
          {" "}
          전부 다 채점{" "}
        </MenuItem>
      </ControlledMenu>
    </Box>
  );
};
export default AnswerSheet;
