// 리다이렉트될 화면
// OAuth2RedirectHandeler.js
import { useLayoutEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import snsLoginService from '../../services/snsLoginService';
import userService from '../../services/userService';
import { ConstructionTwoTone } from '@mui/icons-material';

export default function Oauth2KakaoRedirect(props: { sections: any }) {
  // Ouathcode
  const code = new URL(window.location.href).searchParams.get('code');
  
  useLayoutEffect(() => {
    try {
      snsLoginService.signInWithKakao(code).then((res) => {
        console.log(JSON.stringify(res));

        window.location.href = '/';

        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('nickname', res.data.userInfo.nickname);
        console.log(res.data.snsInfo.accessToken);
        localStorage.setItem('snsAccessToken', res.data.snsInfo.accessToken);
        localStorage.setItem('thirdParty', 'kakao'); //로그아웃이나 정보 요청시 필요
        return res;
      });
    } catch (error) {
      console.log('login error');
    }
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}
