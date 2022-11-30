import qs from "qs";

const CLIENT_ID = "510387731827-nn7phkh1dd5oi8fdvjc7g5dv0sdq28i7.apps.googleusercontent.com";
const REDIRECT_URI = "http://localhost:3000/oauth/callback/google";
const SCOPE = "https://www.googleapis.com/auth/userinfo.profile,https://www.googleapis.com/auth/userinfo.email".replaceAll(","," ");

//google 인증
export const GOOGLE_OAUTH_URI = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}`;


