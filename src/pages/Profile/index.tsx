import { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Logo from '../../components/Logo';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar/index.js';
import Footer from '../../components/Footer/index.js';
import WorkbookSlider from '../../components/WorkbookSlider';
import ProblemList from '../../components/ProblemList';
import profileService from '../../services/profileService';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './style.css';

const theme = createTheme();

const ProfilePage = observer(() => {
  const { userStore } = useStore();
  const { account, getProfile } = userStore;

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  const handleUpgradeClick = () => {
    alert('click upgrade button');
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <NavBar />
      <Container maxWidth="lg">
        <Paper elevation={3} className="profile-paper">
          <Grid container spacing={2}>
            <Grid item xs={6} md={5} className="profile-img-grid">
              <Logo />
              <div className="profile-div">
                {account.profileImg ? (
                  <img
                    className="profile-img"
                    alt="profile_img"
                    src={account.profileImg || ''}
                  />
                ) : (
                  <AccountCircleIcon className="profile-icon" />
                )}
              </div>
              <Typography className="profile-info-text">
                {`${account.id} / ${account.email}`}
              </Typography>
              <Typography className="profile-info-text">
                {`순위: ${account.rankInfo.rank || '[없음]'}`}
              </Typography>
              <Button
                className="subscription_button"
                variant="contained"
                onClick={handleUpgradeClick}
              >
                Premium Upgrade
              </Button>
            </Grid>
            <Grid item xs={6} md={7}>
              <ProblemList data={tryData} title={'시도한 문제'} />
            </Grid>
          </Grid>
          <hr className="horizontal-divider" />
          <div className="profile-try-problem-div">
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="left"
              noWrap
              className="profile-try-text"
              fontFamily="NotoSans-Bold"
            >
              {'시도 중인 문제집'}
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
});

export default ProfilePage;

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
    problemNum: 1,
    chapterId: '01',
    workbookId: '04',
    levelOfDiff: 2,
    iscorrect: true,
    title: '2020학년도 10월 고3 전국연합학력평가 문제지 수학 영역 (나형)',
  },
  {
    problemId: '04-01-00001',
    problemNum: 1,
    chapterId: '01',
    workbookId: '04',
    levelOfDiff: 2,
    iscorrect: true,
    title: '2020학년도 10월 고3 전국연합학력평가 문제지 수학 영역 (나형)',
  },
];
