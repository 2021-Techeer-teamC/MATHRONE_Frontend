import rankData from '../types/rankData';
import myRankData from '../types/myRankData';
import axios from '../utils/axios';

class rankingService {
  getMyRanking() {
    return axios.get<myRankData>(`${process.env.REACT_APP_IP}/rank/rank`);
  }
  getAllRankings() {
    return axios.get<rankData[]>(`${process.env.REACT_APP_IP}/rank/total-rank`);
  }
}
export default new rankingService();
