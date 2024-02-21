import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LogoIcon from '../../components/Logo';
import { Button, Divider, CssBaseline, TextField, FormControlLabel, Checkbox, Paper, Box, Grid, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useStore } from '../../store';
import { observer } from 'mobx-react-lite';
import { GOOGLE_OAUTH_URI, KAKAO_AUTH_URL } from '../Oauth/OauthData';
import { FlexDiv } from '../../components/shared-style';
import { Subtitle, SmallSubtitle } from '../../components/Typography';
import { SignInDiv, SignInFormBox, SocialLoginButton } from './style';
import GoogleLoginIcon from '../../assets/image/google_login_icon.png';
import KakaoLoginIcon from '../../assets/image/kakao_login_icon.png';

const theme = createTheme();

const SignInSide = observer(() => {
  const navigate = useNavigate();
  const { userStore } = useStore();
  const { submitSignIn } = userStore;

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user_data: any = new FormData(event.currentTarget);
    try {
      setLoading(true);
      await submitSignIn(user_data.get('accountId'), user_data.get('password'));
      navigate('/');
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <SignInDiv>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <SignInFormBox>
              <LogoIcon/>
              <Subtitle>
                로그인
              </Subtitle>
              <Box className="signin__formbox__inputs" component="form" noValidate onSubmit={handleSubmit}>
                <TextField margin="normal" required fullWidth id="accountId" label="Account ID" name="accountId" autoComplete="text" autoFocus />
                <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="로그인 정보 유지하기" /> */}
                <LoadingButton id="login_button" type="submit" fullWidth variant="contained" sx={{ mt: 2 }} loading={loading}>
                  로그인
                </LoadingButton>
                <Link to="/signup">
                  <Button className="signup__button" size="medium">
                    회원가입
                  </Button>
                </Link>
              </Box>
              <Divider flexItem />
              <Box className="signin__box__social">
                <SmallSubtitle>소셜 로그인</SmallSubtitle>
                <FlexDiv gap={1}>
                  <SocialLoginButton href={GOOGLE_OAUTH_URI}>
                    <img alt="social-icon" src={GoogleLoginIcon} />
                  </SocialLoginButton>
                  <SocialLoginButton href={KAKAO_AUTH_URL}>
                    <img alt="social-icon" src={KakaoLoginIcon} />
                  </SocialLoginButton>
                </FlexDiv>
              </Box>
            </SignInFormBox>
          </Grid>
        </Grid>
      </ThemeProvider>
    </SignInDiv>
  );
});

export default SignInSide;
