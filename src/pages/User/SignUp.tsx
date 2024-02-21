import React from 'react';
import { Button, CssBaseline, TextField, FormControl, Grid, Box, Typography, Container } from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../../components/Logo';
import { useStore } from '../../store';
import { GOOGLE_OAUTH_URI } from '../Oauth/OauthData';
import { SignUpDiv, SignInFormBox } from './style';

export default function SignUP() {
  const { userStore } = useStore();
  const { submitSignUp } = userStore;
  const theme = createTheme();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user_data: any = new FormData(event.currentTarget);
    try {
      await submitSignUp(user_data.get('accountId'), user_data.get('email'), user_data.get('password'));
      window.location.href = '/signin';
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <SignUpDiv>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <SignInFormBox>
            <Logo />
            <Typography component="h1" variant="h5">
              회원가입
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} className="signup-box">
              <FormControl component="fieldset" variant="standard">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField required autoFocus fullWidth type="string" id="accountId" name="accountId" label="사용자 ID" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required autoFocus fullWidth type="email" id="email" name="email" label="이메일 주소" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth type="password" id="password" name="password" label="비밀번호 (숫자+영문자+특수문자 8자리 이상)" />
                  </Grid>
                </Grid>
                <Button id="signup_button" type="submit" fullWidth variant="contained" size="large">
                  회원가입
                </Button>
              </FormControl>
            </Box>
            <Box component="form" noValidate>
              <Button className="sns_login_button" fullWidth variant="contained" href={GOOGLE_OAUTH_URI}>
                구글아이디로 로그인/회원가입
              </Button>
            </Box>
          </SignInFormBox>
        </Container>
      </ThemeProvider>
    </SignUpDiv>
  );
}
