import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Logo from '../../components/Logo';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar/index.js';
import Footer from '../../components/Footer/index.js';
import WorkbookSlider from '../../components/WorkbookSlider';
import ProblemList from '../../components/ProblemList';
import './style.css';

const theme = createTheme();

export default function ProfilePage() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <NavBar />
      <Container maxWidth="lg">
        <Paper elevation={3} className="profile-paper">
          <Grid container spacing={2}>
            <Grid item xs={6} md={5} className="profile-img-grid">
              <Logo />
              {/* 이미지 없으면 */}
              {/* <CgProfile className="profile-icon" /> */}
              <div className="profile-div">
                <img
                  className="profile-img"
                  alt="profile_img"
                  src="https://i.pinimg.com/550x/e4/08/8f/e4088ff707bfa7775a26b401fdecbe3e.jpg"
                ></img>
              </div>
              <Typography className="profile-info-text">
                서연주 / h01010@email.com / ranking 07
              </Typography>
            </Grid>
            <Grid item xs={6} md={7}>
              <ProblemList data={tryData} title={'시도한 문제'} />
            </Grid>
          </Grid>

          <hr className="horizontal-divider" />
          <div className="profile-try-problem-div">
            <Typography className="profile-try-text">
              최근에 푼 문제집
            </Typography>
            <WorkbookSlider posts={itemData} />
          </div>
        </Paper>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}

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
    workbook_id: '02',
    title: '2021학년도 수능 연계교재 수능완성 수학영역 수학 가형',
    img: 'https://storage.googleapis.com/mathrone-bucket/test/02.jpg',
    publisher: 'EBS',
    level: 3,
    star: true,
  },
  {
    workbook_id: '03',
    title: '2020학년도 10월 고3 전국연합학력평가 문제지 수학 영역 (가형)',
    img: 'https://storage.googleapis.com/mathrone-bucket/test/03.jpeg',
    publisher: '교육청',
    level: 1,
    star: false,
  },
];

const tryData = [
  {
    problem_id: '01-01-00001',
    problem_num: '2',
    workbook_title: '수능완성',
    level: 1,
    subject: '미적분',
    chapter: '수열의 극한',
  },
  {
    problem_id: '01-01-00002',
    problem_num: '4',
    workbook_title: '수능완성',
    level: 3,
    subject: '미적분',
    chapter: '수열의 극한',
  },
  {
    problem_id: '01-01-00003',
    problem_num: '5',
    workbook_title: '수능완성',
    level: 2,
    subject: '미적분',
    chapter: '수열의 극한',
  },
];
