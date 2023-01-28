import { signInUserItem, signUpUserItem } from "../types/userItem";
import userCheckItem from "../types/statusItem";
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
  //snsAccountId.tsx
  checkAccountId(accountId: string) {
    return axios.get<userCheckItem>(
      `http://localhost:8080/user/check/accountId?userAccountId=${accountId}`
    );
  }
  //snsAccountId.tsx
  updateAccountId(accountId: string) {
    return axios.put(
      "http://localhost:8080/user/accountId",
        {accountId: accountId},
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
      }
    );
  }
}

export default new UserService();
