import problems from "../types/problems";
import axios from "axios";

class problemsService {
    getProblems(workbookId : string|undefined, chapterId: string|undefined){
        console.log(workbookId, chapterId);
        return axios.get<problems[]>(
            `http://localhost:8080/problem/detail-page/all?workbookId=${workbookId}&chapterId=${chapterId}`, // api 주소
            //"http://localhost:8080/problem/detail-page/all?workbookId=02&chapterId=01",
            {
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                  //"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
                },
            }
        )
    }
}
export default new problemsService();