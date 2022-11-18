export interface signInUserItem {
  grantType: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: number;
  userInfo: {
    accountId: string;
  };
}

export interface signUpUserItem {
  accountId: string;
}
