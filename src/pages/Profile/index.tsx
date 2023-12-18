import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { Typography, Paper, Button, Grid, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar/index.js';
import Footer from '../../components/Footer/index.js';
import WorkbookSlider from '../../components/WorkbookSlider/index';
import ProblemList from '../../components/ProblemList';
import { Subtitle } from '../../components/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './style.css';

const theme = createTheme();

const ProfilePage = observer(() => {
  const { userStore, workbookStore, problemStore } = useStore();
  const { account, getProfile } = userStore;
  const { triedWorkbooks, starWorkbooks, getStarWorkbook, getTriedWorkbook } = workbookStore;
  const { getTriedProblems, triedProblems } = problemStore;

  useEffect(() => {
    getProfile();
    getTriedWorkbook();
    getStarWorkbook();
    getTriedProblems(false, 3);
  }, [getProfile, getTriedWorkbook, getTriedProblems, getStarWorkbook]);

  const handleUpgradeClick = () => {
    alert('click upgrade button');
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <NavBar />
      <Container maxWidth="xl">
        <Paper elevation={3} className="profile-paper">
          <Grid container spacing={2}>
            <Grid item xs={6} md={5} className="profile-img-grid">
              <Logo />
              <div className="profile-div">
                {account.profileImg ? (
                  <img className="profile-img" alt="profile_img" src={account.profileImg || ''} />
                ) : (
                  <AccountCircleIcon className="profile-icon" />
                )}
              </div>
              <Typography className="profile-info-text">{`${account.id} / ${account.email}`}</Typography>
              <Typography className="profile-info-text">{`순위: ${account.rankInfo.rank || '[없음]'}`}</Typography>
              <Button className="subscription_button" variant="contained" onClick={handleUpgradeClick}>
                Premium Upgrade
              </Button>
            </Grid>
            <Grid item xs={6} md={7}>
              <ProblemList data={triedProblems} title="시도한 문제" />
            </Grid>
          </Grid>
          <hr className="horizontal-divider" />
          <div>
            <Subtitle>시도 중인 문제집</Subtitle>
            <WorkbookSlider id="try-workbook" workbooks={triedWorkbooks} />
          </div>
          <div>
            <Subtitle>즐겨찾기 문제집</Subtitle>
            <WorkbookSlider id="star-workbook" workbooks={starWorkbooks} />
          </div>
        </Paper>
      </Container>
      <Footer />
    </ThemeProvider>
  );
});

export default ProfilePage;
