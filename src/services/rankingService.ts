import rankData from "../types/rankData";
import myRankData from "../types/myRankData"
import axios from "axios";

class rankingService {
    getMyRanking(){
        return axios.get<myRankData>(
            "http://localhost:8080/myrankdata",
            {
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
                },
            }
        )
    }    
    getAllRankings(){
        return axios.get<rankData[]>(
            "http://localhost:8080/rankdata",
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