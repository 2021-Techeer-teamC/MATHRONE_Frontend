import { makeAutoObservable, runInAction } from 'mobx';
import profileService from '../../services/profileService';
import userService from '../../services/userService';
import profileItem from '../../types/profileItem';

class UserStore {
  account: profileItem = {
    userId: null,
    id: '',
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
        localStorage.setItem('userId', res.data.userInfo.userId);
        localStorage.setItem('accountId', res.data.userInfo.accountId);
      });
      return true;
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
