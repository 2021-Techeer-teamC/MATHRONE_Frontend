// 리다이렉트될 화면
// OAuth2RedirectHandeler.js

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {useEffect} from "react";
import snsLoginService from "../../services/snsLoginService";
import userService from "../../services/userService";

export default function Oauth2RedirectLoading(props: { sections: any }) {

    // Ouathcode
    let code = new URL(window.location.href).searchParams.get("code");

    // @ts-ignore
    useEffect(async () => {

        try {

            const res = await snsLoginService.signInWithGoogle(code);

            window.location.href = "/";

            localStorage.setItem("accessToken", res.data.accessToken);
            localStorage.setItem("accountId", res.data.userInfo.accountId);
            localStorage.setItem("snsAccessToken", res.data.snsInfo.snsAccessToken);
            localStorage.setItem("thirdParty","google"); //로그아웃이나 정보 요청시 필요


            return res;
        } catch (error) {

            window.location.href = `/Error`;
        }

    },[]);






    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    );

};


