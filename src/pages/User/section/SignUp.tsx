import React from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, FormControl, Grid, Box, Typography } from '@mui/material/';
import Logo from '../../../components/Logo';
import { useStore } from '../../../store';
import { FormBox } from '../style';

export default function SignUP() {
  const { userStore } = useStore();
  const { submitSignUp } = userStore;

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
    <FormBox>
      <Logo />
      <Typography component="h1" variant="h5">
        회원가입
      </Typography>
      <Box className="formbox__inputs"  component="form" onSubmit={handleSubmit}>
        <FormControl component="fieldset" variant="standard">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                autoFocus
                fullWidth
                type="string"
                id="accountId"
                name="accountId"
                label="사용자 ID"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="email"
                id="email"
                name="email"
                label="이메일 주소"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              required
              fullWidth
              type="password"
              id="password"
              name="password"
              label="비밀번호 (숫자+영문자+특수문자 8자리 이상)"
            />
            </Grid>
          </Grid>
          <Button id="signup_button" type="submit" fullWidth variant="contained" size="large">
            회원가입
          </Button>
        </FormControl>
        <Link to="/account/signin">
          <Button className="signup__button" size="medium">
            로그인
          </Button>
        </Link>
      </Box>
    </FormBox>
  );
}
