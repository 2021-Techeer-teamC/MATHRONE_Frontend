export interface signInUserItem {
  grantType: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: number;
  userInfo: {
    userId: string;
    nickname: string;
  };
  snsInfo: {
    tokenType: string;
    accessToken: string;
    idToken: string;
    expiresIn: number;
    refreshToken: string;
    refreshTokenExpiresIn: number;
    scope: string;
  };
}

export interface signUpUserItem {
  nickname: string;
  email: string;
  emailVerifyCode: string;
  password: string;
}

export interface nicknameValidationRequestItem {
  userAccountId: string;
}

export interface sendingEmailRequestItem {
  email: string;
}
