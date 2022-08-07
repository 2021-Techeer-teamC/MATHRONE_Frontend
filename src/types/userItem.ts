export interface signInUserItem {
    grantType: string;
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresIn: number;
    userInfo: {
      id: string;
    };
}

export interface signUpUserItem {
    id: string;
}