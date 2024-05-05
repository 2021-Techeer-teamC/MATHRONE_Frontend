import styledc from 'styled-components';
import { Box, Button, styled } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

export const DarkGreenButton = styled(Button)(
  () => `
  background: #315c72;

  &:hover {
    background: #009688;
  }
  `,
);

export const LoadingDarkGreenButton = styled(LoadingButton)(
  () => `
  background: #315c72;

  &:hover {
    background: #009688;
  }
  `,
);

export const FormBox = styledc(Box)(
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

  #login_button {
    margin-bottom: 10px;
    background: #315c72;
    :hover {
      background: #009688;
    }
  }

  .formbox__inputs {
    margin-top: 50px !important;
    margin-bottom: 50px;
  }

  .signup__button {
    float: right;
    color: rgb(0, 0, 0, 0.8);
    text-decoration: underline;
    font-family: "NotoSans-Medium";
  }
  `,
);

export const IdCheckButton = styled(DarkGreenButton)(
  () => `
  margin-left: 8px;
  padding: 8px !important;
  `
);

export const EmailSendingButton = styled(LoadingDarkGreenButton)(
  () => `
  margin-left: 8px;
  padding: 8px !important;
  `
)

export const SignupButton = styled(DarkGreenButton)(
  () => `
  margin-top: 24px;
  margin-bottom: 16px;
  `
);

export const SocialLoginBox = styled(Box)(
  () => `
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  justify-content: center;

  .social__buttons {
    display: flex;
    justify-content: center;
  }
  `,
);

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
