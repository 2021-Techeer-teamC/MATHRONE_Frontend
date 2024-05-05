import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  FormControl,
  Grid,
  Box,
  Typography,
} from "@mui/material/";
import LoadingButton from '@mui/lab/LoadingButton';
import Logo from "../../../components/Logo";
import { useStore } from "../../../store";
import userService from "../../../services/userService";
import { validateEmail } from "../../../utils/Validator";
import { FormBox, SignupButton, IdCheckButton, EmailSendingButton } from "../style";

export default function SignUP() {
  const navigate = useNavigate();
  const { userStore, alertStore } = useStore();
  const { setAlertOpen } = alertStore;
  const { submitSignUp } = userStore;
  const [passwordConfirmError, setPasswordConfirmError] =
    useState<boolean>(false);
  const [isNicknameChecked, setIsNicknameChecked] = useState<boolean>(false);
  const [isEmailVerificationSending, setIsEmailVerificationSending] =
    useState<boolean>(false);
  const [emailSendingTried, setEmailSendingTried] = useState<boolean>(false);
  const nicknameRef = useRef<any>(null);
  const emailRef = useRef<any>(null);
  const emailCodeRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isNicknameChecked) {
      setAlertOpen("error", "닉네임 중복 확인은 필수입니다");
      return;
    }
    if (!emailSendingTried) {
      setAlertOpen(
        "error",
        "이메일 인증은 필수입니다.\n이메일 입력 후 [코드전송] 버튼을 눌러 이메일 인증 코드를 확인해주세요.",
      );
      return;
    }
    try {
      const user_data: any = new FormData(event.currentTarget);
      const userData = {
        email: user_data.get("email"),
        emailVerifyCode: emailCodeRef.current.value,
        nickname: user_data.get("nickname"),
        password: user_data.get("password"),
      };
      await submitSignUp(userData);
      setAlertOpen("success", "회원가입 되었습니다.");
      navigate("/account/signin");
    } catch (error) {
      console.log("error");
    }
  };

  const handleNicknameValidationButton = async (
    _event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    try {
      if (nicknameRef.current) {
        await userService
          .isNicknameValid(nicknameRef.current.value)
          .then(() => {
            setAlertOpen("success", "사용가능한 닉네임입니다.");
            setIsNicknameChecked(true);
          });
      } else {
        setAlertOpen("error", "사용할 닉네임을 입력해주세요.");
      }
    } catch (error) {
      setAlertOpen(
        "error",
        "같은 닉네임이 이미 존재하거나 유효하지 않은 닉네임입니다.",
      );
      console.log(error);
    }
  };

  const handleEmailValidationButtonClick = async (
    _event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    try {
      setIsEmailVerificationSending(true);
      if (emailRef.current) {
        if (!validateEmail(emailRef.current.value || "")) throw new Error();
        await userService
          .requestSendingEmailCode(emailRef.current.value)
          .then(() => {
            setAlertOpen(
              "success",
              "이메일이 전송되었습니다.\n이메일로 전송된 인증코드를 넣어 인증해주세요.",
            );
            setEmailSendingTried(true);
            setIsEmailVerificationSending(false);
          });
      } else {
        setAlertOpen("error", "사용할 이메일을 입력해주세요.");
      }
    } catch (error) {
      setAlertOpen("error", "유효하지 않은 이메일입니다.");
      console.log(error);
    }
  };

  const handlePasswordConfirmChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (passwordRef.current && passwordRef.current.value !== e.target.value) {
      setPasswordConfirmError(true);
    } else setPasswordConfirmError(false);
  };

  return (
    <FormBox>
      <Logo />
      <Typography component="h1" variant="h5">
        회원가입
      </Typography>
      <Box className="formbox__inputs" component="form" onSubmit={handleSubmit}>
        <FormControl component="fieldset" variant="standard">
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={10} style={{ display: "flex" }}>
              <TextField
                required
                autoFocus
                fullWidth
                type="string"
                id="nickname"
                name="nickname"
                label="닉네임"
                autoComplete="new-nickname"
                inputRef={nicknameRef}
                size="small"
              />
              <IdCheckButton
                variant="contained"
                size="small"
                onClick={handleNicknameValidationButton}
                disabled={isNicknameChecked}
              >
                중복확인
              </IdCheckButton>
            </Grid>
            <Grid item xs={10} style={{ display: "flex" }}>
              <TextField
                required
                fullWidth
                type="email"
                id="email"
                name="email"
                label="이메일 주소"
                inputRef={emailRef}
                size="small"
              />
              <EmailSendingButton
                variant="contained"
                size="small"
                loading={isEmailVerificationSending}
                onClick={handleEmailValidationButtonClick}
              >
                <span>코드전송</span>
              </EmailSendingButton>
            </Grid>
            <Grid item xs={10} style={{ display: "flex" }}>
              <TextField
                required
                fullWidth
                type="text"
                id="email_code"
                name="email_code"
                label="이메일 인증코드"
                inputRef={emailCodeRef}
                size="small"
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                required
                fullWidth
                type="password"
                id="password"
                name="password"
                autoComplete="new-password"
                inputRef={passwordRef}
                label="비밀번호 (숫자+영문자+특수문자 8자리 이상)"
                size="small"
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                required
                fullWidth
                type="password"
                id="password-confirm"
                name="password-confirm"
                label="비밀번호 재확인"
                onChange={handlePasswordConfirmChange}
                error={passwordConfirmError}
                helperText={
                  passwordConfirmError && "비밀번호가 일치하지 않습니다"
                }
                size="small"
              />
            </Grid>
            <Grid item xs={10}>
              <SignupButton
                id="signup_button"
                type="submit"
                variant="contained"
                size="large"
                fullWidth
              >
                회원가입
              </SignupButton>
            </Grid>
          </Grid>
        </FormControl>
        <Link to="/account/signin">
          <Button className="signup__button" size="medium">
            로그인
          </Button>
        </Link>
      </Box>
    </FormBox>
  );
}
