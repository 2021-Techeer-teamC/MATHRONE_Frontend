import problems from "../types/problems";
import axios from "axios";

class problemsService {
    getProblems(workbookId : string, chapterId: string){
        return axios.get<problems[]>(
            "http://localhost:8080/problem/detail-page/all?workbookid=${workbookId}&chapterid=${chapterId}", // api 주소
            {
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
                },
            }
        )
    }
}
export default new problemsService();