import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { CssBaseline, Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import WorkbookSlider from '../../components/WorkbookSlider/index';
import ProblemList from '../../components/ProblemList';
import MainCarousel from './components/MainCarousel';
import { Subtitle } from '../../components/Typography';
import qs from 'qs';
import snsLoginService from '../../services/snsLoginService';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import './style.css';

const theme = createTheme();

const Main = observer(() => {
  const { userStore, workbookStore } = useStore();
  const { account } = userStore;
  const { getTriedWorkbook, triedWorkbooks, starWorkbooks, getStarWorkbook } =
    workbookStore;
  // 화면 크기
  // const size = {
  //   width: window.innerWidth || document.body.clientWidth,
  //   height: window.innerHeight || document.body.clientHeight,
  // };

  /* eslint no-restricted-globals: ["off"] */
  //query string에서 param추출
  // const code = new URLSearchParams(location.search).get("code");
  // useEffect(() => {
  //   snsLoginService.signInWithGoogle(code);
  // },[code]);

  useEffect(() => {
    getTriedWorkbook();
    getStarWorkbook();
  }, [getTriedWorkbook, getStarWorkbook, account]);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <NavBar />
      <CssBaseline />
      <Container maxWidth="lg">
        <main className="main-div">
          <div className="main-carousel">
            <MainCarousel posts={addData} />
          </div>
          <div className="try-carousel">
            <Subtitle>
              {account.id
                ? '시도 중인 문제집'
                : '유저들이 가장 많이 시도한 문제집'}
            </Subtitle>
            <WorkbookSlider id="try-workbook" workbooks={triedWorkbooks} />
          </div>
          <div className="star-carousel">
            <Subtitle>
              {account.id
                ? '즐겨찾기 문제집'
                : '유저들이 가장 많이 즐겨찾는 문제집'}
            </Subtitle>
            <WorkbookSlider id="star-workbook" workbooks={starWorkbooks} />
          </div>
          <div className="most-try-prob">
            <ProblemList data={[]} title={'오늘 가장 많이 시도한 문제'} />
          </div>
          <div className="recommend-prob">
            <ProblemList data={recData} title={'추천 문제'} />
          </div>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
});

export default Main;

const addData = [
  {
    workbook_id: '01',
    year: 2022,
    img: 'https://storage.googleapis.com/mathrone-bucket/addthumb/2022.png',
    title: '수능완성',
    content: '2022학년도 수능 대비 수능완성과 함께',
  },
  {
    workbook_id: '02',
    year: 2021,
    img: 'https://storage.googleapis.com/mathrone-bucket/addthumb/2021.png',
    title: '수능완성',
    content: '2021학년도 수능 대비 수능완성과 함께',
  },
  {
    workbook_id: '03',
    year: 2020,
    img: 'https://storage.googleapis.com/mathrone-bucket/addthumb/2020.png',
    title: '수능완성',
    content: '2020학년도 수능 대비 수능완성과 함께',
  },
];

const itemData = [
  {
    workbook_id: '01',
    title: '2020학년도 10월 고3 전국연합학력평가 문제지 수학 영역 (가형)',
    img: 'https://storage.googleapis.com/mathrone-bucket/test/01.jpg',
    publisher: '교육청',
    level: 1,
    star: true,
  },
  {
    workbook_id: '01',
    title: '2021학년도 수능 연계교재 수능완성 수학영역 수학 가형',
    img: 'https://storage.googleapis.com/mathrone-bucket/test/02.jpg',
    publisher: 'EBS',
    level: 3,
    star: true,
  },
  {
    workbook_id: '01',
    title: '2020학년도 10월 고3 전국연합학력평가 문제지 수학 영역 (가형)',
    img: 'https://storage.googleapis.com/mathrone-bucket/test/03.jpeg',
    publisher: '교육청',
    level: 1,
    star: false,
  },
  {
    workbook_id: '01',
    title: '2021학년도 수능 연계교재 수능완성 수학영역 수학 가형',
    img: 'https://storage.googleapis.com/mathrone-bucket/test/04.jpg',
    publisher: 'EBS',
    level: 2,
    star: false,
  },
  {
    workbook_id: '01',
    title: '2021학년도 수능 연계교재 수능완성 수학영역 수학 가형',
    img: 'https://storage.googleapis.com/mathrone-bucket/test/05.jpg',
    publisher: 'EBS',
    level: 2,
    star: false,
  },
  {
    workbook_id: '01',
    title: '2020학년도 10월 고3 전국연합학력평가 문제지 수학 영역 (가형)',
    img: 'https://storage.googleapis.com/mathrone-bucket/test/06.jpg',
    publisher: '평가원',
    level: 2,
    star: true,
  },
  {
    workbook_id: '01',
    title: '2021학년도 대학수학능력시험 문제지 수학 영역 (나형)',
    img: 'https://storage.googleapis.com/mathrone-bucket/test/07.jpg',
    publisher: '평가원',
    level: 2,
    star: false,
  },
  {
    workbook_id: '01',
    title: '2021학년도 수능 연계교재 수능완성 수학영역 수학 가형',
    img: 'https://storage.googleapis.com/mathrone-bucket/test/05.jpg',
    publisher: 'EBS',
    level: 3,
    star: false,
  },
  {
    workbook_id: '01',
    title: '2021학년도 수능 연계교재 수능완성 수학영역 수학 가형',
    img: 'https://storage.googleapis.com/mathrone-bucket/test/02.jpg',
    publisher: 'EBS',
    level: 2,
    star: false,
  },
  {
    workbook_id: '01',
    title: '2021학년도 대학수학능력시험 문제지 수학 영역 (나형)',
    img: 'https://storage.googleapis.com/mathrone-bucket/test/01.jpg',
    publisher: '평가원',
    level: 3,
    star: false,
  },
  {
    workbook_id: '01',
    title: '2021학년도 수능 연계교재 수능완성 수학영역 수학 가형',
    img: 'https://storage.googleapis.com/mathrone-bucket/test/06.jpg',
    publisher: 'EBS',
    level: 3,
    star: true,
  },
  {
    workbook_id: '01',
    title: '2021학년도 대학수학능력시험 문제지 수학 영역 (나형)',
    img: 'https://storage.googleapis.com/mathrone-bucket/test/03.jpeg',
    publisher: '평가원',
    level: 3,
    star: true,
  },
];

const starData = [
  {
    workbook_id: '01',
    title: '2020학년도 10월 고3 전국연합학력평가 문제지 수학 영역 (가형)',
    img: 'https://storage.googleapis.com/mathrone-bucket/test/01.jpg',
    publisher: '교육청',
    level: 1,
    star: true,
  },
  {
    workbook_id: '01',
    title: '2021학년도 수능 연계교재 수능완성 수학영역 수학 가형',
    img: 'https://storage.googleapis.com/mathrone-bucket/test/02.jpg',
    publisher: 'EBS',
    level: 3,
    star: true,
  },

  {
    workbook_id: '01',
    title: '2020학년도 10월 고3 전국연합학력평가 문제지 수학 영역 (가형)',
    img: 'https://storage.googleapis.com/mathrone-bucket/test/06.jpg',
    publisher: '평가원',
    level: 2,
    star: true,
  },

  {
    workbook_id: '01',
    title: '2021학년도 수능 연계교재 수능완성 수학영역 수학 가형',
    img: 'https://storage.googleapis.com/mathrone-bucket/test/06.jpg',
    publisher: 'EBS',
    level: 3,
    star: true,
  },
  {
    workbook_id: '01',
    title: '2021학년도 대학수학능력시험 문제지 수학 영역 (나형)',
    img: 'https://storage.googleapis.com/mathrone-bucket/test/03.jpeg',
    publisher: '평가원',
    level: 3,
    star: true,
  },
];

const tryData = [
  {
    problemId: '04-01-00001',
    problemNum: 1,
    chapterId: '01',
    workbookId: '04',
    levelOfDiff: 2,
    iscorrect: true,
    title: '2020학년도 10월 고3 전국연합학력평가 문제지 수학 영역 (나형)',
  },
  {
    problemId: '04-01-00001',
    problemNum: 2,
    chapterId: '01',
    workbookId: '04',
    levelOfDiff: 2,
    iscorrect: true,
    title: '2020학년도 10월 고3 전국연합학력평가 문제지 수학 영역 (나형)',
  },
  {
    problemId: '04-01-00001',
    problemNum: 3,
    chapterId: '01',
    workbookId: '04',
    levelOfDiff: 2,
    iscorrect: true,
    title: '2020학년도 10월 고3 전국연합학력평가 문제지 수학 영역 (나형)',
  },
  {
    problemId: '04-01-00001',
    problemNum: 4,
    chapterId: '01',
    workbookId: '04',
    levelOfDiff: 2,
    iscorrect: true,
    title: '2020학년도 10월 고3 전국연합학력평가 문제지 수학 영역 (나형)',
  },
];

const recData: object[] = [];
