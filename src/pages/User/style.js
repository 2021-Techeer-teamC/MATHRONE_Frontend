import styledc from 'styled-components';
import { Box, Paper, Grid, styled } from '@mui/material';

export const SignInDiv = styledc.div`
  font-family: "NotoSans-Medium";
  #login_button {
    margin-bottom: 10px;
    background: #315c72;
    :hover {
      background: #009688;
    }
  }

  .signin__formbox__inputs {
    margin-top: 50px !important;
    margin-bottom: 50px;
  }

  .signin__box__social {
    display: flex;
    margin-top: 50px !important;
    flex-direction: column;
    justify-content: center;
  }
`;

export const SignInFormBox = styledc(Box)(
  () => `
  margin-left: 32px;
  margin-right: 32px;
  font-family: "NotoSans-Medium";
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .MuiBox-root {
    margin-top: 16px;
  }

  .sns_login_button {
    margin-top: 16px;
    margin-bottom: 8px;
    background: #a84949;
    :hover {
      background: #fc1225;
    }
    width: 250px;
  }

  .signup__button {
    float: right;
    color: rgb(0, 0, 0, 0.8);
    text-decoration: underline;
    font-family: "NotoSans-Medium";
  }
  `,
);

export const SignUpDiv = styledc.div`
  #signup_button {
    background: #315c72;
    margin-top: 24px;
    margin-bottom: 16px;
    :hover {
      background: #009688;
    }
  }

  .signup-box {
    margin-top: 64px !important;
  }
`;

export const SocialLoginButton = styledc.a`
  margin-top: 30px;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    filter: drop-shadow(5px 5px 5px gray);
  }

  img:hover {
    opacity: 0.7;  
  }
`;
