// 리다이렉트될 화면
// OAuth2RedirectHandeler.js

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {useEffect} from "react";
import snsLoginService from "../../services/snsLoginService";
import userService from "../../services/userService";

export default function Oauth2KakaoRedirect(props: { sections: any }) {

    // Ouathcode
    let code = new URL(window.location.href).searchParams.get("code");
    // @ts-ignore
    useEffect(async () => {

        try {
            const res = await snsLoginService.signInWithKakao(code);
            console.log(JSON.stringify(res));

            window.location.href = "/";

            localStorage.setItem("accessToken", res.data.accessToken);
            localStorage.setItem("userId", res.data.idToken);

            return res;
        } catch (error) {
            console.log("login error");
        }

    },[]);






    return (
        <Box sx={{ display: 'flex' }}>
    <CircularProgress />
    </Box>
);

};


