import { profileItem } from '../types/profileItem';
import axios from '../utils/axios';

class profileService {
  getMyProfile() {
    return axios.get<profileItem>(`${process.env.REACT_APP_IP}/profile/my-profile`);
  }
}
export default new profileService();
