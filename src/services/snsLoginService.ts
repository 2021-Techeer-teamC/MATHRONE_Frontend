import axios from "axios";
import {signInUserItem} from "../types/userItem";
import qs from "qs";
import bookItem from "../types/bookItem";
import {googleAccessDTOtmp} from "../types/googleAccessDTOtmp";
import {kakaoAccessDTO} from "../types/kakaoAccessDTO";
import httpCommon from "../http-common";

class snsLoginService {
    //Signin.tsx


    //get방식 안됨 data parpametre로 보내는 방식으로는 넘어가지 않음 ?code=${code} : nono
    signInWithGoogle( code : null | string ){
        return axios.post<signInUserItem>(
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
        return axios.post<signInUserItem>(
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


    //엑세스 토큰을 만료시키는 로그아웃 방식 -> 채택하지 않았음
    // signOutWithKakao(){
    //     return axios.post(
    //         "https://kapi.kakao.com/v1/user/logout",
    //         {},
    //         {
    //             headers: {
    //                 "Content-Type": "application/x-www-form-urlencoded",
    //                 "Authorization": `Bearer ${localStorage.getItem("snsAccessToken")}`, // but 형식을 맞춰두기 위해 !
    //             }
    //         }
    //     )
    // }

    //google logout -> token 취소
    signOutFromGoogle(token : string){
        return axios.post(
            `https://oauth2.googleapis.com/revoke?token=${token}`,
            {},
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    // "Authorization": `Bearer ${localStorage.getItem("snsAccessToken")}`, // but 형식을 맞춰두기 위해 !
                }
            }
        )
    }

    //logout
    signOutWithKakao(){
        return axios.post(
            "http://localhost:8080/user/kakao/logout",
            {},
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `${localStorage.getItem("accessToken")}`,
                },
            }
        );
    }


    signOutWithGoogle(){
        return axios.post(
            "http://localhost:8080/user/google/logout",
            {},
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `${localStorage.getItem("accessToken")}`,
                },
            }
        );
    }




}
export default new snsLoginService();
