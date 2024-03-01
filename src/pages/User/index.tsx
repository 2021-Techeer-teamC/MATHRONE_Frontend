import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { CssBaseline, Paper, Grid, Divider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useStore } from '../../store';
import { observer } from 'mobx-react-lite';
import SignIn from './section/SignIn';
import SignUp from './section/SignUp';
import { SocialLogin } from './section/SocialLogin';

const theme = createTheme();

const User = observer(() => {
  const location = useLocation();
  const childPath = location.pathname.split('/')[2];

  return (
    <div>
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
            { childPath === 'signin'? <SignIn /> : <SignUp />}
		    <Divider flexItem />
		    <SocialLogin />
		  </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
});

export default User;
