import { signInUserItem, signUpUserItem } from '../types/userItem';
import axios from '../utils/axios';

class UserService {
  //Signin.tsx
  signIn(accountId: string | null, password: string | null) {
    return axios.post<signInUserItem>(
      `${process.env.REACT_APP_IP}/user/login`,
      { accountId: accountId, password: password },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );
  }
  //SignUp.tsx
  signUp(accountId: string | null, email: string | null, password: string | null) {
    return axios.post<signUpUserItem>(
      `${process.env.REACT_APP_IP}/user/signup`,
      { accountId: accountId, email: email, password: password },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );
  }

  logOut() {
    return axios.post<signUpUserItem>(`${process.env.REACT_APP_IP}/user/logout`);
  }
}

export default new UserService();
