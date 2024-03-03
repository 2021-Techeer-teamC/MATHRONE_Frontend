import { profileItem, profileEditRequestItem } from '../types/profileItem';
import axios from '../utils/axios';

class profileService {
  getMyProfile() {
    return axios.get<profileItem>('/profile/my-profile');
  }

  updateProfile(newProfile: profileEditRequestItem) {
    return axios.post(
      '/profile/edit',
      { nickname: newProfile.nickname, phoneNum: newProfile.phoneNum },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );
  }

  updateProfileImg(newProfileImg: File | null) {
    if(newProfileImg) {
      const formData = new FormData();
      formData.append(
          "profileImg",
          newProfileImg
      );
      return axios.post(
        '/profile/img',
        formData,
      );
    }
  }
}
export default new profileService();
