import { makeAutoObservable, runInAction } from 'mobx';
import profileService from '../../services/profileService';
import userService from '../../services/userService';
import profileItem from '../../types/profileItem';

class UserStore {
  account: profileItem = {
    userId: -1, // ex) userId: 17
    id: '', // ex) accountId: tester
    password: '',
    profileImg: '',
    exp: 0,
    premium: false,
    email: '',
    phoneNum: null,
    userImg: null,
    role: null,
    rankInfo: {
      rank: null,
      score: null,
      trycnt: null,
    },
  };

  constructor() {
    makeAutoObservable(this);
  }

  submitSignIn = async (id: string, password: string) => {
    try {
      userService.signIn(id, password).then((res) => {
        localStorage.setItem('accessToken', res.data.accessToken);
        runInAction(() => {
          this.account = {
            ...this.account,
            userId: Number(res.data.userInfo.userId),
            id: res.data.userInfo.accountId,
          };
        });
      });
    } catch (error) {
      console.error('Error: ', error);
      return error;
    }
  };

  submitSignUp = async (id: string, email: string, password: string) => {
    try {
      const res = userService.signUp(id, email, password);
      console.log(id, email, password);
      return res;
    } catch (error) {
      console.error('Error: ', error);
      return error;
    }
  };

  submitLogout = async () => {
    try {
      const res = userService.logOut().then(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('thirdParty');
        localStorage.removeItem('snsAccessToken');
        // account 초기화
        runInAction(() => {
          this.account = {
            userId: -1, // ex) userId: 17
            id: '', // ex) accountId: tester
            password: '',
            profileImg: '',
            exp: 0,
            premium: false,
            email: '',
            phoneNum: null,
            userImg: null,
            role: null,
            rankInfo: {
              rank: null,
              score: null,
              trycnt: null,
            },
          };
        });
      });
      return res;
    } catch (error) {
      console.error('Error: ', error);
      return error;
    }
  };

  getProfile = async () => {
    try {
      profileService.getMyProfile().then((res) => {
        const profileRes = res.data;
        runInAction(() => {
          this.account = profileRes;
        });
      });
      return true;
    } catch (error) {
      console.error('Error: ', error);
      return error;
    }
  };
}

export default UserStore;
