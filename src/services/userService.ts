import { signInUserItem, signUpUserItem } from "../types/userItem";
import axios from "axios";

class UserService {
  //Signin.tsx
  signIn(accountId: string | null, password: string | null) {
    return axios.post<signInUserItem>(
      "http://localhost:8080/user/login",
      { accountId: accountId, password: password },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  }
  //SignUp.tsx
  signUp(
    accountId: string | null,
    email: string | null,
    password: string | null
  ) {
    return axios.post<signUpUserItem>(
      "http://localhost:8080/user/signup",
      { accountId: accountId, email: email, password: password },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  }
}

export default new UserService();
