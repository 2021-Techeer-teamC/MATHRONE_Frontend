import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { Grid, Container, IconButton } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar/index.js';
import Footer from '../../components/Footer/index.js';
import ElevationPaper from '../../components/Paper';
import { Subtitle } from '../../components/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkbookSection from './section/WorkbookSection';
import ProblemSection from './section/ProblemSection';
import { FlexDiv } from '../../components/shared-style';
import { formatPhoneNumber } from '../../utils/StringFormatter';
import { ProfileImgDiv, SubscriptionBtn, ProfileInfoBox } from './style';

const ProfilePage = observer(() => {
  const { userStore, workbookStore, problemStore } = useStore();
  const { account, getProfile } = userStore;
  const { getStarWorkbook, getTriedWorkbook } = workbookStore;
  const { getTriedProblems } = problemStore;
  const [ showImgEditBtn, setShowImgEditBtn ] = useState<boolean>(false);

  useEffect(() => {
    getProfile();
    getTriedWorkbook();
    getStarWorkbook();
    getTriedProblems(false, 3);
  }, [getProfile, getTriedWorkbook, getTriedProblems, getStarWorkbook]);

  const handleUpgradeClick = () => {
    alert('click upgrade button');
  };

  const handleProfileMouseHover = (over: boolean) => {
    setShowImgEditBtn(over);
  }

  return (
    <>
      <Header />
      <NavBar />
      <Container>
        <ElevationPaper 
          children={
            <Grid container spacing={3} justifyContent="flex-start" alignItems="center">
              <Grid item xs={12} md={12} container justifyContent="flex-start">
                <Subtitle>회원 정보</Subtitle>
              </Grid>
              <Grid item>
                <ProfileImgDiv onMouseOver={() => handleProfileMouseHover(true)} onMouseLeave={() => handleProfileMouseHover(false)}>
                  {account.profileImg ? (
                    <img
                      alt={"profile_img"}
                      src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR6DPolDNEPEtY6CSsYjEZqjGlbZDjvJIOwg&usqp=CAU'}
                    />
                  ) : (
                    <AccountCircleIcon className="profile__icon" />
                  )}
                  {showImgEditBtn &&
                    <IconButton className="profile__button--edit" aria-label="delete" size="small">
                      <ModeEditIcon fontSize="inherit" />
                    </IconButton>
                  }
                </ProfileImgDiv>
              </Grid>
              <ProfileInfoBox item xs={12} md={6}>
                <FlexDiv>
                  <div className="first__col">
                    <label>Email Address</label>
                    <p>{account.email || '정보가 없습니다'}</p>
                  </div>
                  <div>
                    <label>Phone Number</label>
                    <p>{account.phoneNum? formatPhoneNumber(account.phoneNum) : '정보가 없습니다'}</p>
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
                          <SubscriptionBtn
                            variant="contained"
                            onClick={handleUpgradeClick}
                          >
                            Premium Upgrade
                          </SubscriptionBtn>
                      </p>
                    }
                  </div>
                </FlexDiv>
              </ProfileInfoBox>
            </Grid>
          }
        />
        <ElevationPaper children={<ProblemSection />} />
        <ElevationPaper children={<WorkbookSection />} />
      </Container>
      <Footer />
    </>
  );
});

export default ProfilePage;
