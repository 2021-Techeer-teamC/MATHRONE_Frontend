import styled from "styled-components";

export const SignInDiv = styled.div`
  min-height: 100vh;
  justify-content: center;
  align-items: center;

  #login_button {
    background: #315c72;
    :hover {
      background: #009688;
    }
  }
  #sns_login_button {
    margin-bottom: 8px;
    background: #a84949;
    :hover {
      background: #fc1225;
    }
  }
`;

export const SignUpDiv = styled.div`
  #signup_button {
    margin-top: 32px;
    margin-bottom: 8px;
    background: #315c72;
    :hover {
      background: #009688;
    }
  }
  #sns_login_button {
    margin-bottom: 8px;
    background: #a84949;
    :hover {
      background: #fc1225;
    }
  }
`;
