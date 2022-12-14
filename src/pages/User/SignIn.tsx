import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LogoIcon from "../../components/Logo";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SignInDiv } from "./style";
import userService from "../../services/userService";
import {GOOGLE_OAUTH_URI, KAKAO_AUTH_URL} from "../Oauth/OauthData";

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user_data: any = new FormData(event.currentTarget);

    try {
      const res = await userService.signIn(
        user_data.get("accountId"),
        user_data.get("password")
      );

      console.log(JSON.stringify(res));

      window.location.href = "/";

      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("accountId", res.data.userInfo.accountId);

      return res;
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <SignInDiv>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <LogoIcon />
              <Typography component="h1" variant="h5">
                ?????????
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="accountId"
                  label="Account ID"
                  name="accountId"
                  autoComplete="text"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="????????? ?????? ????????????"
                />
                <Button
                  id="login_button"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  ?????????
                </Button>
              </Box>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <Button
                  id="sns_login_button"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 1 }}
                  href={GOOGLE_OAUTH_URI}
                >
                  ?????????????????? ?????????/????????????
                </Button>
              </Box>
              <Box component="form" noValidate sx={{ mt: 1 }}>
              <Button
                  id="sns_login_button"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 1 }}
                  href={KAKAO_AUTH_URL}
              >
                ????????????????????? ?????????
              </Button>
            </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </SignInDiv>
  );
}
