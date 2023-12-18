// 리다이렉트될 화면
// OAuth2RedirectHandeler.js

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useEffect, useLayoutEffect } from 'react';
import snsLoginService from '../../services/snsLoginService';
import userService from '../../services/userService';

export default function Oauth2RedirectLoading(props: { sections: any }) {
  // Ouathcode
  const code = new URL(window.location.href).searchParams.get('code');

  useLayoutEffect(() => {
    try {
      snsLoginService.signInWithGoogle(code).then((res) => {
        window.location.href = '/';

        localStorage.setItem('accessToken', res.data.accessToken);

        localStorage.setItem('userId', res.data.userInfo.userId);
        localStorage.setItem('accountId', res.data.userInfo.accountId);
        localStorage.setItem('thirdParty', 'google');
      });
    } catch (error) {
      window.location.href = `/Error`;
    }
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}
