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
import {KAKAO_LOGOUT_URL} from "../../pages/Oauth/OauthData";
import userService from "../../services/userService";

function Header(props) {
  const [loginStatus, setLoginStatus] = useState(localStorage.getItem('accessToken')?true:false);
  const [thirdParty, setThirdParty] = useState(localStorage.getItem('thirdParty'));


  const logouttmp = async () => {

      setLoginStatus(false);

  }

  const onLogoutClick = async () => {



      if (thirdParty === 'kakao') {

            try{
              //mathrone서버에서 로그아웃
              const res = await snsLoginService.signOutWithKakao().then(()=>{
                  window.location.href = KAKAO_LOGOUT_URL;
                  localStorage.removeItem('thirdParty');
                  localStorage.removeItem('snsAccessToken');
              });


              localStorage.removeItem('accessToken');
              localStorage.removeItem('userId');
              localStorage.removeItem('accountId');

              setLoginStatus(false);
            } catch (error) {
                console.log("error");
                window.location.href = `/Error`;
             }


      }

      if (thirdParty === 'google') {

          console.log("구글 로그아웃 진행");

          try {
              const res1 = await snsLoginService.signOutFromGoogle(localStorage.getItem("snsAccessToken"));
              const res2 = await snsLoginService.signOutWithGoogle();

              localStorage.removeItem('thirdParty');
              localStorage.removeItem('snsAccessToken');
              localStorage.removeItem('accessToken');
              localStorage.removeItem('userId');
              localStorage.removeItem('accountId');


              setLoginStatus(false);

              return res2;
          } catch (error) {
              console.log("error");
              window.location.href = `/Error`;
          }

      }

      if (thirdParty === 'mathrone') {

          try {
              const res = await userService.signOut(); //await없으면 CORS 에러 + 401 Error

              localStorage.removeItem('thirdParty');
              localStorage.removeItem('snsAccessToken');
              localStorage.removeItem('accessToken');
              localStorage.removeItem('userId');
              localStorage.removeItem('accountId');

              setLoginStatus(false);

              return res;
          } catch (error) {
              console.log("error");
              window.location.href = `/Error`;
          }


      }



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


