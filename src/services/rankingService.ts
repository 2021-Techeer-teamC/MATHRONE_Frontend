import rankData from '../types/rankData';
import myRankData from '../types/myRankData';
import axios from '../utils/axios';

class rankingService {
  getMyRanking() {
    return axios.get<myRankData>('http://localhost:8080/rank/rank');
  }
  getAllRankings() {
    return axios.get<rankData[]>('http://localhost:8080/rank/total-rank');
  }
}
export default new rankingService();
