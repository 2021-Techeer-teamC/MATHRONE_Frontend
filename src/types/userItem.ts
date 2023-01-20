export interface signInUserItem {
  grantType: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: number;
  userInfo: {
    userId: string;
    accountId: string;
  };
  snsInfo :  {
    snsAccessToken:string,
  };
}


export interface signUpUserItem {
  accountId: string;
}
