import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LogoIcon from '../../components/Logo';
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Box,
  Grid,
  Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useStore } from '../../store';
import { observer } from 'mobx-react-lite';
import { GOOGLE_OAUTH_URI, KAKAO_AUTH_URL } from '../Oauth/OauthData';
import { SignInDiv, FormBox } from './style';

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
      const res = await submitSignIn(
        user_data.get('accountId'),
        user_data.get('password'),
      ).then(() => {
        navigate('/');
        setLoading(false);
      });
      return res;
    } catch (error) {
      console.log('error');
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
              backgroundColor: (t) =>
                t.palette.mode === 'light'
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <FormBox id="signin-formbox">
              <LogoIcon />
              <Typography component="h1" variant="h5">
                로그인
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="accountId"
                  label="Account ID"
                  name="accountId"
                  autoComplete="text"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="로그인 정보 유지하기"
                />
                <LoadingButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  id="login_button"
                  loading={loading}
                >
                  로그인
                </LoadingButton>
              </Box>
              <Box component="form" noValidate>
                <Button
                  className="sns_login_button"
                  fullWidth
                  variant="contained"
                  href={GOOGLE_OAUTH_URI}
                >
                  구글아이디로 로그인/회원가입
                </Button>
                <Button
                  className="sns_login_button"
                  fullWidth
                  variant="contained"
                  href={KAKAO_AUTH_URL}
                >
                  카카오아이디로 로그인
                </Button>
              </Box>
              <Box component="form" noValidate></Box>
            </FormBox>
          </Grid>
        </Grid>
      </ThemeProvider>
    </SignInDiv>
  );
});

export default SignInSide;
