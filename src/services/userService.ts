import { signInUserItem, signUpUserItem, nicknameValidationRequestItem } from '../types/userItem';
import axios from '../utils/axios';

class UserService {
  signIn(accountId: string | null, password: string | null) {
    return axios.post<signInUserItem>(
      `${process.env.REACT_APP_IP}/user/login`,
      { nickname: accountId, password: password },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );
  }
  signUp(accountId: string | null, email: string | null, password: string | null) {
    return axios.post<signUpUserItem>(
      `${process.env.REACT_APP_IP}/user/signup`,
      { nickname: accountId, email: email, password: password },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );
  }

  isNicknameValid(nickname: string) {
    return axios.get<nicknameValidationRequestItem>(
      `/user/check/accountId?userAccountId=${nickname}`,
    );
  }

  logOut() {
    return axios.post<signUpUserItem>(`${process.env.REACT_APP_IP}/user/logout`);
  }
}

export default new UserService();
