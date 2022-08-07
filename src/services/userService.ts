import {signInUserItem, signUpUserItem} from "../types/userItem";
import axios from "axios";

class UserService{
    //Signin.tsx
    signIn(email : string | null, password: string | null){
        return axios.post<signInUserItem>(
        "http://localhost:8080/user/login",
        { 'email': email, 'password': password },
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        }
      );
    }
    //SignUp.tsx
    signUp(id : string | null, email: string | null, password: string | null){
        return axios.post<signUpUserItem>(
        "http://localhost:8080/user/signup",
        { 'id': id, 'email': email, 'password': password },
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        }
      );
    }
}

export default new UserService();
