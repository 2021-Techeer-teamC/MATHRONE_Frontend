import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Grid, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { CgProfile } from 'react-icons/cg';
import '../../assets/styles/components.css';
import Logo from '../Logo/index.tsx';
import snsLoginService from '../../services/snsLoginService';
import userService from '../../services/userService';
import { KAKAO_LOGOUT_URL } from '../../pages/Oauth/OauthData';
import { HeaderBox } from './style';

const Header = () => {
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(
    localStorage.getItem('accessToken') ? true : false,
  );
  const [thirdParty, setThirdParty] = useState(
    localStorage.getItem('thirdParty'),
  );
  const [loading, setLoading] = useState(false);

  const onLogoutClick = () => {
    setLoading(true);
    userService.logOut().then(() => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userId');
      localStorage.removeItem('thirdParty');
      localStorage.removeItem('snsAccessToken');
      if (thirdParty === 'kakao') {
        window.location.href = KAKAO_LOGOUT_URL; //카카오 로그아웃
      }
      setLoginStatus(false);
      setLoading(false);
      navigate('/signin');
    });
  };

  return (
    <HeaderBox>
      <div className="header header-box">
        <Logo />
        <Box id="dummy-box" />
        <Box sx={{ display: { xs: 'flex' } }}>
          {!loginStatus ? (
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
                  <CgProfile
                    style={{
                      fontSize: '36px',
                      color: '#009688',
                      margin: 'auto',
                    }}
                  />
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
};

export default Header;
