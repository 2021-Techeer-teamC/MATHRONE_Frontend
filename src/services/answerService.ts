import answersList from "../types/answers";
import axios from "axios";

class gradingService {
    postAnswer(answer: any){
        return axios.post<answersList>(
            "http://localhost:8080/problem/detail-page/grade", // api 주소
            {answer},   // body에 들어갈 데이터
            {
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
                },
            } // header 정의
        )
    }
}
export default new gradingService();