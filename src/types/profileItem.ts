export default interface profileItem {
  userId: number;
  id: string;
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
