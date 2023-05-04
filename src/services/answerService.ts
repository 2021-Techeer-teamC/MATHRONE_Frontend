import answersList from "../types/answers";
import axios from "axios";

class gradingService {
    postAnswer(answer: any){
        return axios.put<answersList>(
            "http://localhost:8080/answer/problem", // api 주소
            answer,
            {
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  "accessToken": `${localStorage.getItem("accessToken")}`
                },
            } // header 정의
        )
    }
}
export default new gradingService();