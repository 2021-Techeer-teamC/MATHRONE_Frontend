import qs from 'qs';

const CLIENT_ID =
  '510387731827-nn7phkh1dd5oi8fdvjc7g5dv0sdq28i7.apps.googleusercontent.com';
const REDIRECT_URI = 'http://localhost:3000/oauth/callback/google';
const SCOPE =
  'https://www.googleapis.com/auth/userinfo.profile,https://www.googleapis.com/auth/userinfo.email'.replaceAll(
    ',',
    ' ',
  );

//google 인증
export const GOOGLE_OAUTH_URI = `https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}`;

//kakao
const KAKAO_CLIENT_ID = 'b05cd2c325a6d15c882233502e21a1fc'; //REST API KEY (CLIENT ID)
const KAKAO_REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';
const KAKAO_LOGOUT_REDIRECT_URI = 'http://localhost:3000';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code&scope=account_email,openid,profile_image`;

export const KAKAO_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${KAKAO_CLIENT_ID}&logout_redirect_uri=${KAKAO_LOGOUT_REDIRECT_URI}`;
