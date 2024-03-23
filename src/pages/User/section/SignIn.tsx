import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LogoIcon from '../../../components/Logo';
import { Button, TextField, Box, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useStore } from '../../../store';
import { observer } from 'mobx-react-lite';
import { FormBox } from '../style';

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
    <FormBox>
      <LogoIcon />
      <Typography component="h1" variant="h5">
        로그인
      </Typography>
      <Box className="formbox__inputs" component="form" onSubmit={handleSubmit}>
        <TextField margin="normal" required fullWidth id="accountId" label="Account ID" name="accountId" autoComplete="text" autoFocus />
        <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
        <LoadingButton id="login_button" type="submit" fullWidth variant="contained" sx={{ mt: 2 }} loading={loading}>
          로그인
        </LoadingButton>
        <Link to="/account/signup">
          <Button className="signup__button" size="medium">
            회원가입
          </Button>
        </Link>
      </Box>
    </FormBox>
  );
});

export default SignInSide;
