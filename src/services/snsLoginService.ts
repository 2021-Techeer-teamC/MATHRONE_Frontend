import axios from "axios";
import {signInUserItem} from "../types/userItem";
import qs from "qs";
import bookItem from "../types/bookItem";

class snsLoginService {
    //Signin.tsx
    // signInWithGoogle(code : null | string ){
    //     // @ts-ignore
    //     return axios.post<signInUserItem>(
    //         `/user/signin/google?code=${code}`,
    //         {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Accept": "application/json",
    //             },
    //         }
    //     )
    // }

    //Signin.tsx
    signInWithGoogle( code : null | string ){
        return axios.post<signInUserItem>(
            "http://localhost:8080/user/login/google",
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
