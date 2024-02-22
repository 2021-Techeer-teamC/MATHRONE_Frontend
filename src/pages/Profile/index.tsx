import { useEffect, useState, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router-dom';
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
import Modal from '../../components/Modal';
import { profileEditRequestItem } from '../../types/profileItem';
import {
  ProfileImgDiv,
  ProfileInfoBox,
  ProfileImg,
  ProfileEditButton
} from './style';
import ProfileInfoSection from './section/ProfileInfoSection';

const ProfilePage = observer(() => {
  const { userStore, workbookStore, alertStore, problemStore } = useStore();
  const { account, getProfile, editProfile } = userStore;
  const { getStarWorkbook, getTriedWorkbook } = workbookStore;
  const { setAlertOpen } = alertStore;
  const { getTriedProblems } = problemStore;
  const [ showImgEditBtn, setShowImgEditBtn ] = useState<boolean>(false);
  const [ showImgModal, setShowImgModal ] = useState<boolean>(false);
  const [ editMode, setEditMode ] = useState<boolean>(false);
  // const [ newProfile, setNewProfile ] = useState<profileEditRequestItem>({
  //   nickname: null,
  //   phoneNum: null
  // });
  const newProfile = useRef<profileEditRequestItem>({
    nickname: null,
    phoneNum: null
  })

  useEffect(() => {
    getProfile();
    getTriedWorkbook();
    getStarWorkbook();
    getTriedProblems(false, 3);
  }, [getProfile, getTriedWorkbook, getTriedProblems, getStarWorkbook]);

  useEffect(() => {
    const accountInfo = {
      nickname: account?.nickname,
      phoneNum: account?.phoneNum,
    }
    // setNewProfile(accountInfo);
    newProfile.current = accountInfo;
  }, [account]);

  const handleProfileMouseHover = (over: boolean) => {
    if(!editMode) setShowImgEditBtn(over);
  }

  const handleImgEditClick = () => {
    setShowImgModal(true);
  }

  const handleEditOrSaveClick = () => {
    if(editMode) editProfile(newProfile.current);
    setEditMode(prev => !prev);
    setShowImgEditBtn(prev => !prev);
  }

  const handleProfileEdit = (profileInfo: any) => {
    // setNewProfile({...newProfile, ...profileInfo}); 
    newProfile.current = {...newProfile.current, ...profileInfo};
  }

  if(!localStorage.getItem('accountId')) {
    setAlertOpen('warning', '로그인이 필요합니다.');
    return <Navigate to="/account/signin" />;
  }

  return (
    <>
      <Header />
      <NavBar />
      <Container>
        <ElevationPaper 
          children={
            <Grid style={{position: 'relative'}} container spacing={3} justifyContent="flex-start" alignItems="center">
              <Grid item xs={12} md={12} container justifyContent="flex-start">
                <Subtitle>회원 정보</Subtitle>
              </Grid>
              <Grid item>
                <ProfileImgDiv
                  onMouseOver={() => handleProfileMouseHover(true)}
                  onMouseLeave={() => handleProfileMouseHover(false)}
                >
                  {account.profileImg ? (
                    <ProfileImg
                      hover={showImgEditBtn}
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR6DPolDNEPEtY6CSsYjEZqjGlbZDjvJIOwg&usqp=CAU'
                    />
                  ) : (
                    <AccountCircleIcon className="profile__icon" />
                  )}
                  {showImgEditBtn &&
                    <IconButton
                      className="profile__button--edit"
                      aria-label="delete"
                      size="medium"
                      onClick={handleImgEditClick}
                    >
                      <ModeEditIcon fontSize="inherit" />
                    </IconButton>
                  }
                </ProfileImgDiv>
              </Grid>
              <ProfileInfoBox item xs={12} md={8}>
                <ProfileInfoSection account={account} editMode={editMode} handleProfileEdit={handleProfileEdit} />
              </ProfileInfoBox>
              <ProfileEditButton size="small" onClick={handleEditOrSaveClick}>
                {editMode? 'save' : 'edit'}
              </ProfileEditButton>
            </Grid>
          }
        />
        <ElevationPaper children={<ProblemSection />} />
        <ElevationPaper children={<WorkbookSection />} />
        <Modal
          title='프로필 이미지 업로드'
          open={showImgModal}
          handleModalClose={()=> setShowImgModal(false)}
        />
      </Container>
      <Footer />
    </>
  );
});

export default ProfilePage;
