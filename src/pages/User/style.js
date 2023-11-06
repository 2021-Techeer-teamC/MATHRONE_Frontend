import styled from 'styled-components';
import { Box } from '@mui/material';

export const SignInDiv = styled.div`
  #login_button {
    background: #315c72;
    :hover {
      background: #009688;
    }
  }

  #signin-formbox {
    margin-left: 32px;
    margin-right: 32px;
  }
`;

export const FormBox = styled(Box)(
  () => `
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
  `,
);

export const SignUpDiv = styled.div`
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
