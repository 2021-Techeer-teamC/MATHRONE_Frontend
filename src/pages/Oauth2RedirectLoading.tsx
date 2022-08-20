// 리다이렉트될 화면
// OAuth2RedirectHandeler.js

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Oauth2RedirectLoading(props: { sections: any }) {

    // Ouathcode
    let code = new URL(window.location.href).searchParams.get("code");

    // React.useEffect(async () => {
    //
    // }, []);

    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    );

};


