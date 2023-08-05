import { makeAutoObservable, runInAction } from 'mobx';
import profileService from '../../services/profileService';
import profileItem from '../../types/profileItem';

class AccountStore {
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

export default AccountStore;
