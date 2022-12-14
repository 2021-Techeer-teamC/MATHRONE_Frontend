export interface signInUserItem {
  grantType: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: number;
  userInfo: {
    accountId: string;
  };
  snsInfo :  {
    tokenType:string,
    accessToken:string,
    idToken:string,
    expiresIn:number,
    refreshToken:string,
    refreshTokenExpiresIn:number,
    scope:string;
  };
}

export interface signUpUserItem {
  accountId: string;
}
