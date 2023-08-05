import profile from '../types/profileItem';
import axios from '../utils/axios';

class profileService {
  getMyProfile() {
    return axios.get<profile>('http://localhost:8080/profile/my-profile');
  }
}
export default new profileService();
