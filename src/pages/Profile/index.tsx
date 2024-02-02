import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { Button, Grid, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar/index.js';
import Footer from '../../components/Footer/index.js';
import ElevationPaper from '../../components/Paper';
import { Subtitle } from '../../components/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkbookSection from './section/WorkbookSection';
import ProblemSection from './section/ProblemSection';
import { FlexDiv } from '../../components/shared-style';
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
      <Container>
        <ElevationPaper 
          children={
            <Grid container spacing={3} justifyContent="flex-start" alignItems="center">
              <Grid item xs={12} md={12} container justifyContent="flex-start">
                <Subtitle>회원 정보</Subtitle>
              </Grid>
              <Grid item className="profile-img-grid">
                <div className="profile-div">
                  {account.profileImg ? (
                    <img className="profile-img" alt="profile_img" src={account.profileImg || ''} />
                  ) : (
                    <AccountCircleIcon className="profile-icon" />
                  )}
                </div>
              </Grid>
              <Grid item xs={12} md={6} className="profile__info">
                <FlexDiv>
                  <div className="first__col">
                    <label>Email Address</label>
                    <p>{account.email}</p>
                  </div>
                  <div>
                    <label>Phone Number</label>
                    {/* <p>{account.phoneNum}</p> */}
                    <p>010-1134-1390</p>
                  </div>
                </FlexDiv>
                <FlexDiv>
                  <div className="first__col">
                    <label>Rank</label>
                    <p>{account.rankInfo.rank || '정보가 없습니다'}</p>
                  </div>
                  <div>
                    <label>Score</label>
                    <p>{account.rankInfo.score || '정보가 없습니다'}</p>
                  </div>
                </FlexDiv>
                <FlexDiv>
                  <div>
                    <label>Subscription</label>
                    {
                      account.premium?
                        <p>...구독 정보...</p>
                      : <p>
                          <Button
                            className="profile__subscription__button"
                            variant="contained"
                            onClick={handleUpgradeClick}
                          >
                            Premium Upgrade
                          </Button>
                      </p>
                    }
                  </div>
                </FlexDiv>
              </Grid>
            </Grid>
          }
        />
        <ElevationPaper children={<ProblemSection />} />
        <ElevationPaper children={<WorkbookSection />} />
      </Container>
      <Footer />
    </ThemeProvider>
  );
});

export default ProfilePage;
