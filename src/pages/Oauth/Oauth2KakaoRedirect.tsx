// 리다이렉트될 화면
// OAuth2RedirectHandeler.js

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {useEffect, useState} from "react";
import snsLoginService from "../../services/snsLoginService";
import userService from "../../services/userService";

export default function Oauth2KakaoRedirect(props: { sections: any }) {

    // Ouathcode
    let code = new URL(window.location.href).searchParams.get("code");
    const [access,setAccess] = useState<string>('');
    // @ts-ignore
    useEffect(async () => {

        console.log(code)

       // try {
            await snsLoginService.signInWithKakao(code)
                .then(res => {


                    localStorage.setItem("accessToken", res.data.accessToken);
                    localStorage.setItem("accountId", res.data.userInfo.accountId);
                    setAccess(res.data.accessToken);
                    localStorage.setItem("snsAccessToken", res.data.snsInfo.accessToken);

                    localStorage.setItem("thirdParty","kakao"); //로그아웃이나 정보 요청시 필요


                })   ;
           // console.log(JSON.stringify(res));

            window.location.href = "/";


            //엑세스토큰저장을 못하는중


            //console.log(localStorage.getItem("accessToken"))

        // } catch (error) {
        //     console.log("login error");
        // }

    },[]);






    return (
        <Box sx={{ display: 'flex' }}>
    <CircularProgress />
            <h1>{access}</h1>
    </Box>
);

};


