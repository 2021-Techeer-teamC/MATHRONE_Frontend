import React, {useState} from "react";
import PropTypes from "prop-types";
import {Box, Grid } from "@mui/material/";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Logo from '../Logo/index.tsx';
import {CgProfile} from 'react-icons/cg';
import "../../assets/styles/components.css";
import "./style.css";
import snsLoginService from "../../services/snsLoginService";

function Header(props) {
  const [loginStatus, setLoginStatus] = useState(localStorage.getItem('accessToken')?true:false);

  const onLogoutClick = () =>{
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('thirdParty');

    window.location.href='/';

    setLoginStatus(false);
  }


  const onKakaoLogoutClick = () => {

    snsLoginService.signInWithKakao();

  }

  return (
      <Box className="header-box" sx={{ flexGrow: 1 }}>
        <div className="header">
          <Logo/>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'flex' } }}>
            {!loginStatus? (
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
            ) :(
              <Grid container spacing={1}>
                <Grid item xs={6} md={5}>
                  <Link to="/profile" style={{ textDecoration: 'none' }}>
                    <CgProfile style={{fontSize:'36px', color:'#009688', margin:'auto'}}/>
                  </Link>
                </Grid>
                <Grid item xs={6} md={7}>
                  <Link to="/" style={{ textDecoration: 'none' }} onClick={onLogoutClick}>
                    <Button id="login-button">로그아웃</Button>
                  </Link>
                </Grid>
              </Grid>
            )}
          </Box>
        </div>
      </Box>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;


