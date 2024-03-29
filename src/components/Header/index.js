import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Grid, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { CgProfile } from 'react-icons/cg';
import '../../assets/styles/components.css';
import Logo from '../Logo/index.tsx';
import snsLoginService from '../../services/snsLoginService';
import userService from '../../services/userService';
import { KAKAO_LOGOUT_URL } from '../../pages/Oauth/OauthData';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { HeaderBox } from './style';

const Header = observer(() => {
  const navigate = useNavigate();
  const { userStore } = useStore();
  const { account, submitLogout, getProfile } = userStore;
  const [thirdParty, setThirdParty] = useState(localStorage.getItem('thirdParty'));
  const [loading, setLoading] = useState(false);

  const onLogoutClick = () => {
    setLoading(true);
    submitLogout().then(() => {
      if (thirdParty === 'kakao') {
        // kakao logout api call
        window.location.href = KAKAO_LOGOUT_URL; //카카오 로그아웃
      }
      setLoading(false);
      navigate('/account/signin');
    });
  };

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <HeaderBox>
      <div className="header header-box">
        <Logo />
        <Box id="dummy-box" />
        <Box sx={{ display: { xs: 'flex' } }}>
          {!account.nickname ? (
            <Grid container spacing={1}>
              <Grid item xs={6} md={7}>
                <Link to="/account/signup" className="header-link">
                  <Button variant="contained" id="register-button" className="header__button">회원가입</Button>
                </Link>
              </Grid>
              <Grid item xs={6} md={5}>
                <Link to="/account/signin" className="header-link">
                  <Button variant="contained" id="login-button" className="header__button">로그인</Button>
                </Link>
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={1}>
              <Grid item xs={6} md={4}>
                <Link to="/profile" className="header-link">
                  <CgProfile id="profile-icon" />
                </Link>
              </Grid>
              <Grid item xs={6} md={8}>
                <Link to="/" className="header-link" onClick={onLogoutClick}>
                  <LoadingButton variant="contained" fullWidth id="button__logout" className="header__button" loading={loading}>
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
