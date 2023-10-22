import axios from '../utils/axios';
import { signInUserItem } from '../types/userItem';
import { googleAccessDTOtmp } from '../types/googleAccessDTOtmp';
import { kakaoAccessDTO } from '../types/kakaoAccessDTO';

class snsLoginService {
  //Signin.tsx

  //get방식 안됨 data parpametre로 보내는 방식으로는 넘어가지 않음 ?code=${code} : nono
  signInWithGoogle(code: null | string) {
    return axios.post<signInUserItem>(
      `${process.env.REACT_APP_IP}/user/oauth/callback/google`,
      { code: code },
    );
  }

  signInWithKakao(code: null | string) {
    return axios.post<signInUserItem>(
      `${process.env.REACT_APP_IP}/user/oauth/callback/kakao`,
      { code: code },
    );
  }

  //엑세스 토큰을 만료시키는 로그아웃 방식 -> 채택하지 않았음
  signOutWithKakao() {
    return axios.post(
        `${process.env.REACT_APP_IP}/user/kakao/logout`,
        {
          headers: {
            Authorization: localStorage.getItem('accessToken')
          },
        },
    );
  }

  signInRequestKakao(){
    return axios.get(`${process.env.REACT_APP_IP}/user/kakao/login-request`)
  }

  signOutRequestKakao(){
    return axios.post(`${process.env.REACT_APP_IP}/user/kakao/logout`,
        {
          headers: {
            Authorization: localStorage.getItem('accessToken')
          },
        }

        );
  }




}
export default new snsLoginService();
