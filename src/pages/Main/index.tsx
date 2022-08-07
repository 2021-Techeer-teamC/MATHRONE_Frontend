import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import WorkbookSlider from "./components/WorkbookSlider";
import ProblemList from "./components/ProblemList";
import MainCarousel from "./components/MainCarousel";
import "./style.css";

const theme = createTheme();

export default function Main(props: { sections: any }) {
  //화면 크기
  // const size = {
  //   width: window.innerWidth || document.body.clientWidth,
  //   height: window.innerHeight || document.body.clientHeight,
  // };

  //시도 중인 문제집

  return (
    <ThemeProvider theme={theme}>
      <Header title="MATHrone" sections={props.sections} />
      <NavBar sections={props.sections} />
      <CssBaseline />
      <Container maxWidth="lg">
        <main className="main-div">
          <div className="main-carousel">
            <MainCarousel posts={addData} />
          </div>
          <div className="try-carousel">
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="left"
              noWrap
              sx={{ flex: 1 }}
              fontFamily="NotoSans-Bold"
              padding="5px"
            >
              {"시도 중인 문제집"}
            </Typography>
            <WorkbookSlider posts={itemData} />
          </div>
          <div className="star-carousel">
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="left"
              noWrap
              sx={{ flex: 1 }}
              fontFamily="NotoSans-Bold"
              padding="5px"
            >
              {"즐겨 찾기"}
            </Typography>

            <WorkbookSlider posts={itemData} />
          </div>
          <div className="most-try-prob">
            <ProblemList data={tryData} title={"오늘 가장 많이 시도한 문제"} />
          </div>
          <div className="recommend-prob">
            <ProblemList data={recData} title={"추천 문제"} />
          </div>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}

const addData = [
  {
    workbook_id: "01",
    year: 2022,
    img: "https://storage.googleapis.com/mathrone-bucket/addthumb/2022.png",
    title: "수능완성",
    content: "2022학년도 수능 대비 수능완성과 함께",
  },
  {
    workbook_id: "02",
    year: 2021,
    img: "https://storage.googleapis.com/mathrone-bucket/addthumb/2021.png",
    title: "수능완성",
    content: "2021학년도 수능 대비 수능완성과 함께",
  },
  {
    workbook_id: "03",
    year: 2020,
    img: "https://storage.googleapis.com/mathrone-bucket/addthumb/2020.png",
    title: "수능완성",
    content: "2020학년도 수능 대비 수능완성과 함께",
  },
];

const itemData = [
  {
    workbook_id: "01",
    title: "2020학년도 10월 고3 전국연합학력평가 문제지 수학 영역 (가형)",
    img: "https://storage.googleapis.com/mathrone-bucket/test/01.jpg",
    publisher: "교육청",
    level: 1,
    star: true,
  },
  {
    workbook_id: "01",
    title: "2021학년도 수능 연계교재 수능완성 수학영역 수학 가형",
    img: "https://storage.googleapis.com/mathrone-bucket/test/02.jpg",
    publisher: "EBS",
    level: 3,
    star: true,
  },
  {
    workbook_id: "01",
    title: "2020학년도 10월 고3 전국연합학력평가 문제지 수학 영역 (가형)",
    img: "https://storage.googleapis.com/mathrone-bucket/test/03.jpeg",
    publisher: "교육청",
    level: 1,
    star: false,
  },
  {
    workbook_id: "01",
    title: "2021학년도 수능 연계교재 수능완성 수학영역 수학 가형",
    img: "https://storage.googleapis.com/mathrone-bucket/test/04.jpg",
    publisher: "EBS",
    level: 2,
    star: false,
  },
  {
    workbook_id: "01",
    title: "2021학년도 수능 연계교재 수능완성 수학영역 수학 가형",
    img: "https://storage.googleapis.com/mathrone-bucket/test/05.jpg",
    publisher: "EBS",
    level: 2,
    star: false,
  },
  {
    workbook_id: "01",
    title: "2020학년도 10월 고3 전국연합학력평가 문제지 수학 영역 (가형)",
    img: "https://storage.googleapis.com/mathrone-bucket/test/06.jpg",
    publisher: "평가원",
    level: 2,
    star: true,
  },
  {
    workbook_id: "01",
    title: "2021학년도 대학수학능력시험 문제지 수학 영역 (나형)",
    img: "https://storage.googleapis.com/mathrone-bucket/test/07.jpg",
    publisher: "평가원",
    level: 2,
    star: false,
  },
  {
    workbook_id: "01",
    title: "2021학년도 수능 연계교재 수능완성 수학영역 수학 가형",
    img: "https://storage.googleapis.com/mathrone-bucket/test/05.jpg",
    publisher: "EBS",
    level: 3,
    star: false,
  },
  {
    workbook_id: "01",
    title: "2021학년도 수능 연계교재 수능완성 수학영역 수학 가형",
    img: "https://storage.googleapis.com/mathrone-bucket/test/02.jpg",
    publisher: "EBS",
    level: 2,
    star: false,
  },
  {
    workbook_id: "01",
    title: "2021학년도 대학수학능력시험 문제지 수학 영역 (나형)",
    img: "https://storage.googleapis.com/mathrone-bucket/test/01.jpg",
    publisher: "평가원",
    level: 3,
    star: false,
  },
  {
    workbook_id: "01",
    title: "2021학년도 수능 연계교재 수능완성 수학영역 수학 가형",
    img: "https://storage.googleapis.com/mathrone-bucket/test/06.jpg",
    publisher: "EBS",
    level: 3,
    star: true,
  },
  {
    workbook_id: "01",
    title: "2021학년도 대학수학능력시험 문제지 수학 영역 (나형)",
    img: "https://storage.googleapis.com/mathrone-bucket/test/03.jpeg",
    publisher: "평가원",
    level: 3,
    star: true,
  },
];

const starData = [
  {
    workbook_id: "01",
    title: "2020학년도 10월 고3 전국연합학력평가 문제지 수학 영역 (가형)",
    img: "https://storage.googleapis.com/mathrone-bucket/test/01.jpg",
    publisher: "교육청",
    level: 1,
    star: true,
  },
  {
    workbook_id: "01",
    title: "2021학년도 수능 연계교재 수능완성 수학영역 수학 가형",
    img: "https://storage.googleapis.com/mathrone-bucket/test/02.jpg",
    publisher: "EBS",
    level: 3,
    star: true,
  },

  {
    workbook_id: "01",
    title: "2020학년도 10월 고3 전국연합학력평가 문제지 수학 영역 (가형)",
    img: "https://storage.googleapis.com/mathrone-bucket/test/06.jpg",
    publisher: "평가원",
    level: 2,
    star: true,
  },

  {
    workbook_id: "01",
    title: "2021학년도 수능 연계교재 수능완성 수학영역 수학 가형",
    img: "https://storage.googleapis.com/mathrone-bucket/test/06.jpg",
    publisher: "EBS",
    level: 3,
    star: true,
  },
  {
    workbook_id: "01",
    title: "2021학년도 대학수학능력시험 문제지 수학 영역 (나형)",
    img: "https://storage.googleapis.com/mathrone-bucket/test/03.jpeg",
    publisher: "평가원",
    level: 3,
    star: true,
  },
];

const tryData = [
  {
    problem_id: "01-01-00001",
    problem_num: "2",
    workbook_title: "수능완성",
    level: 1,
    subject: "미적분",
    chapter: "수열의 극한",
  },
  {
    problem_id: "01-01-00002",
    problem_num: "4",
    workbook_title: "수능완성",
    level: 3,
    subject: "미적분",
    chapter: "수열의 극한",
  },
  {
    problem_id: "01-01-00003",
    problem_num: "5",
    workbook_title: "수능완성",
    level: 2,
    subject: "미적분",
    chapter: "수열의 극한",
  },
  {
    problem_id: "01-01-00004",
    problem_num: "12",
    workbook_title: "모의고사",
    level: 2,
    subject: "미적분",
    chapter: "수열의 극한",
  },
  {
    problem_id: "01-01-00005",
    problem_num: "34",
    workbook_title: "모의고사",
    level: 3,
    subject: "미적분",
    chapter: "수열의 극한",
  },
  {
    problem_id: "01-01-00006",
    problem_num: "22",
    workbook_title: "수능완성",
    level: 2,
    subject: "미적분",
    chapter: "수열의 극한",
  },
  {
    problem_id: "01-01-00007",
    problem_num: "1",
    workbook_title: "수능완성",
    level: 1,
    subject: "미적분",
    chapter: "수열의 극한",
  },
  {
    problem_id: "01-01-00008",
    problem_num: "29",
    workbook_title: "수능완성",
    level: 1,
    subject: "미적분",
    chapter: "수열의 극한",
  },
  {
    problem_id: "01-01-00009",
    problem_num: "13",
    workbook_title: "수능완성",
    level: 3,
    subject: "수학I",
    chapter: "삼각함수",
  },
  {
    problem_id: "01-01-00010",
    problem_num: "18",
    workbook_title: "수능완성",
    level: 2,
    subject: "미적분",
    chapter: "적분법",
  },
  {
    problem_id: "01-01-00011",
    problem_num: "20",
    workbook_title: "수능완성",
    level: 3,
    subject: "미적분",
    chapter: "미분",
  },
];

const recData: object[] = [];
