import { makeAutoObservable, runInAction } from 'mobx';
import profileService from '../../services/profileService';
import userService from '../../services/userService';
import { profileItem, profileEditRequestItem } from '../../types/profileItem';

class UserStore {
  alertStore;

  account: profileItem = {
    userId: -1, // ex) userId: 17
    nickname: '', // ex) accountId: tester
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

  constructor({alertStore}: any) {
    makeAutoObservable(this);
    this.alertStore = alertStore;
  }

  submitSignIn = async (id: string, password: string) => {
    try {
      const res = await userService.signIn(id, password);
      localStorage.setItem('accessToken', res.data.accessToken);
      runInAction(() => {
        this.account = {
          ...this.account,
          userId: Number(res.data.userInfo.userId),
          nickname: res.data.userInfo.nickname,
        };
      });
      await this.getProfile();
      return res;
    } catch (error) {
      this.alertStore.setAlertOpen('error', '로그인에 실패하였습니다')
      console.error(error);
      throw error;
    }
  };

  submitSignUp = async (userData: any) => {
    try {
      const res = userService.signUp(userData);
      return res;
    } catch (error) {
      this.alertStore.setAlertOpen('error', '회원가입에 실패하였습니다')
      console.error('Error: ', error);
      throw error;
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
            nickname: '', // ex) accountId: tester
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
      throw error;
    }
  };

  editProfile = async (newProfile: profileEditRequestItem) => {
    try {
      if(newProfile?.nickname !== this.account.nickname || newProfile?.phoneNum !== this.account.phoneNum) {
        await profileService.updateProfile(newProfile);
        this.getProfile();
      }
      return true;
    } catch (error) {
      console.error('Error: ', error);
      this.alertStore.setAlertOpen('error', '프로필 수정에 실패하였습니다')
      throw error;
    }
  };

  editProfileImg = async (newProfileImg: File | null) => {
    try {
      await profileService.updateProfileImg(newProfileImg);
      this.getProfile();
      this.alertStore.setAlertOpen('success', '프로필 수정에 성공하였습니다')
    } catch (error) {
      console.error('Error: ', error);
      this.alertStore.setAlertOpen('error', '프로필 수정에 실패하였습니다')
      throw error;
    }
  };

}

export default UserStore;
