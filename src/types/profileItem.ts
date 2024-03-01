export interface profileItem {
  userId: number | null;
  nickname: string | null;
  password: string;
  profileImg: string | null;
  exp: number;
  premium: boolean;
  email: string;
  phoneNum: string | null;
  userImg: string | null;
  role: string | null;
  rankInfo: {
    rank: number | null;
    score: number | null;
    trycnt: number | null;
  };
}

export interface profileEditRequestItem {
  nickname: string | null;
  phoneNum: string | null;
}
