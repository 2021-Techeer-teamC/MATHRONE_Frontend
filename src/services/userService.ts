import { signInUserItem, signUpUserItem } from '../types/userItem';
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

  // accountId(accountId: string | null, email: string | null, password: string | null) {
  //   return axios.post<signUpUserItem>(
  //     `${process.env.REACT_APP_IP}/user/signup`,
  //     { nickname: accountId, email: email, password: password },
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //     },
  //   );
  // }

  logOut() {
    return axios.post<signUpUserItem>(`${process.env.REACT_APP_IP}/user/logout`);
  }
}

export default new UserService();
