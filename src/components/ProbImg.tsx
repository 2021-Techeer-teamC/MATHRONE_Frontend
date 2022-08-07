import * as React from "react";
import { Box, Button } from "@mui/material";

const ProbImg = ({ posts, setNum, num, len }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 1,
        m: 1,
        height: "80%",
      }}
    >
      <Button onClick={() => (num === 1 ? null : setNum(num - 1))}>이전</Button>
      <Box
        component="img"
        src={posts.prob_img}
        sx={{ overflow: "hidden" }}
      ></Box>
      <Button onClick={() => (num === len ? null : setNum(num + 1))}>
        다음
      </Button>
    </Box>
  );
};

export default ProbImg;
