import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Grid, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { CgProfile } from 'react-icons/cg';
import '../../assets/styles/components.css';
import Logo from '../Logo/index.tsx';
import snsLoginService from '../../services/snsLoginService';
import userService from '../../services/userService';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { HeaderBox } from './style';

const Header = observer(() => {
  const navigate = useNavigate();
  const { userStore } = useStore();
  const { account, submitLogout } = userStore;
  const [thirdParty, setThirdParty] = useState(
    localStorage.getItem('thirdParty'),
  );
  const [loading, setLoading] = useState(false);

  const onLogoutClick = async () => {
    // localStorage.removeItem('accessToken');
    // localStorage.removeItem('userId');
    // localStorage.removeItem('thirdParty');
    // localStorage.removeItem('snsAccessToken');

    // setLoginStatus(false);

    if (thirdParty === 'kakao') {
      try {
        //console.log(localStorage.getItem("accessToken"))

        snsLoginService.signOutWithKakao().then((res) => {
          window.location.href = `${process.env.REACT_APP_IP}/user/kakao/logout-request`; //카카오 로그아웃

          localStorage.removeItem('accessToken');
          localStorage.removeItem('userId');
          localStorage.removeItem('thirdParty');
          localStorage.removeItem('snsAccessToken');
        });

        //window.location.href = `${process.env.REACT_APP_IP}/user/kakao/logout-request`; //카카오 로그아웃
      } catch (error) {
        console.log('error');
      }
    } else if (thirdParty === 'google') {
      try {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('thirdParty');
        localStorage.removeItem('snsAccessToken');

        //console.log(localStorage.getItem("accessToken"))

        snsLoginService.signOutWithGoogle().then((res) => {
          window.location.href = `${process.env.REACT_APP_IP}/user/google/logout-request`; //카카오 로그아웃

          localStorage.removeItem('accessToken');
          localStorage.removeItem('userId');
          localStorage.removeItem('thirdParty');
          localStorage.removeItem('snsAccessToken');
        });

        //window.location.href = `${process.env.REACT_APP_IP}/user/kakao/logout-request`; //카카오 로그아웃
      } catch (error) {
        console.log('error');
      }
    }
  };

  return (
    <HeaderBox>
      <div className="header header-box">
        <Logo />
        <Box id="dummy-box" />
        <Box sx={{ display: { xs: 'flex' } }}>
          {!account.id ? (
            <Grid container spacing={1}>
              <Grid item xs={6} md={7}>
                <Link to="/signup" className="header-link">
                  <Button id="register-button">회원가입</Button>
                </Link>
              </Grid>
              <Grid item xs={6} md={5}>
                <Link to="/signin" className="header-link">
                  <Button id="login-button">로그인</Button>
                </Link>
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={1}>
              <Grid item xs={6} md={5}>
                <Link to="/profile" className="header-link">
                  <CgProfile id="profile-icon" />
                </Link>
              </Grid>
              <Grid item xs={6} md={7}>
                <Link to="/" className="header-link" onClick={onLogoutClick}>
                  <LoadingButton id="login-button" loading={loading}>
                    로그아웃
                  </LoadingButton>
                </Link>
              </Grid>
            </Grid>
          )}
        </Box>
      </div>
    </HeaderBox>
  );
});

export default Header;
