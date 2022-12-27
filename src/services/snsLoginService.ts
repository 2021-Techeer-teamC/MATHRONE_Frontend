import axios from "axios";
import {signInUserItem} from "../types/userItem";
import qs from "qs";
import bookItem from "../types/bookItem";
import {googleAccessDTOtmp} from "../types/googleAccessDTOtmp";
import {kakaoAccessDTO} from "../types/kakaoAccessDTO";

class snsLoginService {
    //Signin.tsx


    //get방식 안됨 data parpametre로 보내는 방식으로는 넘어가지 않음 ?code=${code} : nono
    signInWithGoogle( code : null | string ){
        return axios.post<googleAccessDTOtmp>(
            "http://localhost:8080/user/oauth/callback/google",
            { 'code': code },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
            }
        );
    }


    signInWithKakao( code : null | string ){
        return axios.post<kakaoAccessDTO>(
            "http://localhost:8080/user/oauth/callback/kakao",
            { 'code': code },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
            }
        );
    }

}
export default new snsLoginService();
