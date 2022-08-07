import React, { useEffect } from "react";
import Pagination from "../components/ProbPagination";
import Header from "../components/Header";
import ProbImg from "../components/ProbImg";
import AnswerSheet from "../components/AnswerSheet";
import { Box } from "@mui/system";
import { Container, Grid, Typography } from "@mui/material";

interface problemData {
  problem_id: string;
  prob_num: number;
  chapter_id: string;
  prob_img: string;
  level_of_diff: number;
  category: boolean;
}

type WorkbookDetailProps = {
  name: string; // 해당 문제집의 이름
  sections: any;
};

export default function ProblemDetail({ name, sections }: WorkbookDetailProps) {
  const [data, setProbDatas] = React.useState([...probData]);
  const [num, setNum] = React.useState(1);

  useEffect(() => {
    setProbDatas(probData);
    //setProbDatas(api 요청) /problem
  }, []);

  return (
    <Box>
      <Header title="MATHrone" sections={sections} />
      <Container
        style={{ alignItems: "center", justifyContent: "center", height: 100 }}
      >
        <Typography variant="h4" component="div" color="text.secondary">
          {name}
        </Typography>
      </Container>
      <Grid container spacing={0} margin={5}>
        <Grid item xs={2}>
          <AnswerSheet propsdata={data} />
        </Grid>
        <Grid item xs={8}>
          <ProbImg
            posts={data[num - 1]}
            setNum={setNum}
            num={num}
            len={data.length}
          />
          <Pagination setNum={setNum} len={data.length} num={num} />
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Box>
  );
}

const probData: problemData[] = [
  {
    problem_id: "01-01-00001",
    prob_num: 1,
    chapter_id: "01",
    prob_img:
      "https://storage.googleapis.com/mathrone-bucket/problem/suwan_na_2021/02-01-00001.png",
    level_of_diff: 2,
    category: true,
  },
  {
    problem_id: "01-01-00002",
    prob_num: 2,
    chapter_id: "01",
    prob_img:
      "https://storage.googleapis.com/mathrone-bucket/problem/suwan_na_2021/02-01-00002.png",
    level_of_diff: 2,
    category: true,
  },
  {
    problem_id: "01-01-00003",
    prob_num: 3,
    chapter_id: "01",
    prob_img:
      "https://storage.googleapis.com/mathrone-bucket/problem/suwan_na_2021/02-01-00003.png",
    level_of_diff: 2,
    category: false,
  },
  {
    problem_id: "01-01-00004",
    prob_num: 4,
    chapter_id: "01",
    prob_img:
      "https://storage.googleapis.com/mathrone-bucket/problem/suwan_na_2021/02-01-00004.png",
    level_of_diff: 2,
    category: true,
  },
  {
    problem_id: "01-01-00005",
    prob_num: 5,
    chapter_id: "01",
    prob_img:
      "https://storage.googleapis.com/mathrone-bucket/problem/suwan_na_2021/02-01-00005.png",
    level_of_diff: 2,
    category: true,
  },
  {
    problem_id: "01-01-00006",
    prob_num: 6,
    chapter_id: "01",
    prob_img:
      "https://storage.googleapis.com/mathrone-bucket/problem/suwan_na_2021/02-01-00006.png",
    level_of_diff: 2,
    category: true,
  },
  {
    problem_id: "01-01-00007",
    prob_num: 7,
    chapter_id: "01",
    prob_img:
      "https://storage.googleapis.com/mathrone-bucket/problem/suwan_na_2021/02-01-00007.png",
    level_of_diff: 2,
    category: true,
  },
  {
    problem_id: "01-01-00008",
    prob_num: 8,
    chapter_id: "01",
    prob_img:
      "https://storage.googleapis.com/mathrone-bucket/problem/suwan_na_2021/02-01-00008.png",
    level_of_diff: 2,
    category: true,
  },
  {
    problem_id: "01-01-00009",
    prob_num: 9,
    chapter_id: "01",
    prob_img:
      "https://storage.googleapis.com/mathrone-bucket/problem/suwan_na_2021/02-01-00009.png",
    level_of_diff: 2,
    category: true,
  },
  {
    problem_id: "01-01-00010",
    prob_num: 10,
    chapter_id: "01",
    prob_img:
      "https://storage.googleapis.com/mathrone-bucket/problem/suwan_na_2021/02-01-00010.png",
    level_of_diff: 2,
    category: true,
  },
  {
    problem_id: "01-01-00011",
    prob_num: 11,
    chapter_id: "01",
    prob_img:
      "https://storage.googleapis.com/mathrone-bucket/problem/suwan_na_2021/02-01-00001.png",
    level_of_diff: 2,
    category: true,
  },
  {
    problem_id: "01-01-00012",
    prob_num: 12,
    chapter_id: "01",
    prob_img:
      "https://storage.googleapis.com/mathrone-bucket/problem/suwan_na_2021/02-01-00002.png",
    level_of_diff: 2,
    category: true,
  },
  {
    problem_id: "01-01-00013",
    prob_num: 13,
    chapter_id: "01",
    prob_img:
      "https://storage.googleapis.com/mathrone-bucket/problem/suwan_na_2021/02-01-00003.png",
    level_of_diff: 2,
    category: true,
  },
  {
    problem_id: "01-01-00014",
    prob_num: 14,
    chapter_id: "01",
    prob_img:
      "https://storage.googleapis.com/mathrone-bucket/problem/suwan_na_2021/02-01-00004.png",
    level_of_diff: 2,
    category: true,
  },
  {
    problem_id: "01-01-00015",
    prob_num: 15,
    chapter_id: "01",
    prob_img:
      "https://storage.googleapis.com/mathrone-bucket/problem/suwan_na_2021/02-01-00005.png",
    level_of_diff: 2,
    category: true,
  },
  {
    problem_id: "01-01-00016",
    prob_num: 16,
    chapter_id: "01",
    prob_img:
      "https://storage.googleapis.com/mathrone-bucket/problem/suwan_na_2021/02-01-00006.png",
    level_of_diff: 2,
    category: true,
  },
  {
    problem_id: "01-01-00017",
    prob_num: 17,
    chapter_id: "01",
    prob_img:
      "https://storage.googleapis.com/mathrone-bucket/problem/suwan_na_2021/02-01-00007.png",
    level_of_diff: 2,
    category: true,
  },
  {
    problem_id: "01-01-00018",
    prob_num: 18,
    chapter_id: "01",
    prob_img:
      "https://storage.googleapis.com/mathrone-bucket/problem/suwan_na_2021/02-01-00008.png",
    level_of_diff: 2,
    category: true,
  },
  {
    problem_id: "01-01-00019",
    prob_num: 19,
    chapter_id: "01",
    prob_img:
      "https://storage.googleapis.com/mathrone-bucket/problem/suwan_na_2021/02-01-00009.png",
    level_of_diff: 2,
    category: true,
  },
  {
    problem_id: "01-01-00020",
    prob_num: 20,
    chapter_id: "01",
    prob_img:
      "https://storage.googleapis.com/mathrone-bucket/problem/suwan_na_2021/02-01-00010.png",
    level_of_diff: 2,
    category: true,
  },
];
