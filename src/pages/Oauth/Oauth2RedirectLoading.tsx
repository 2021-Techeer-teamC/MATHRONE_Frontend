// 리다이렉트될 화면
// OAuth2RedirectHandeler.js
import { Grid, Typography } from "@mui/material/";
import { useEffect } from "react";
import Logo from "../../components/Logo";
import snsLoginService from "../../services/snsLoginService";
import { SNSLoadingWrapper, LoadingCircular } from "./style";

export default function Oauth2RedirectLoading(props: { sections: any }) {
  // Ouathcode
  let code = new URL(window.location.href).searchParams.get("code");

  // @ts-ignore
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      const res = await snsLoginService.signInWithGoogle(code);

      window.location.href = "/";

      localStorage.setItem("accessToken", res.data.accessToken);

      localStorage.setItem("userId", res.data.userInfo.userId);
      localStorage.setItem("accountId", res.data.userInfo.accountId);
      localStorage.setItem("thirdParty", "google");

      return res;
    } catch (error) {
      window.location.href = `/Error`;
    }
  }, []);

  return (
    <SNSLoadingWrapper container direction="column">
      <Grid item style={{ marginTop: "auto", marginBottom: "auto" }}>
        <Logo />
        <Typography component="h2" variant="h5">
          구글 계정을 이용하여 로그인 중입니다...
        </Typography>
        <LoadingCircular />
      </Grid>
    </SNSLoadingWrapper>
  );
}
