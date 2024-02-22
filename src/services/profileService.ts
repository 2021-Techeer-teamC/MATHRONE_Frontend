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
}
export default new profileService();
