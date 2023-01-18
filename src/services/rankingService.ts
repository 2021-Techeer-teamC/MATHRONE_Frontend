import rankData from "../types/rankData";
import myRankData from "../types/myRankData"
import axios from "axios";

class rankingService {
    getMyRanking(){
        return axios.get<myRankData>(
            "http://localhost:8080/rank/rank",
            {
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  "accessToken": `${localStorage.getItem("accessToken")}`
                },
            }
        )
    }    
    getAllRankings(){
        return axios.get<rankData[]>(
            "http://localhost:8080/rank/total-rank",
            {
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                },
            }
        )
    }
}
export default new rankingService();