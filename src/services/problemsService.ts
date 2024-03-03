import problemData from '../types/problems';
import axios from '../utils/axios';

class problemsService {
  getProblems(workbookId: string | undefined, chapterId: string | undefined) {
    return axios.get<problemData[]>(
      `${process.env.REACT_APP_IP}/problem?workbookId=${workbookId}&chapterId=${chapterId}`, // api 주소
      //"http://localhost:8080/problem/detail-page/all?workbookId=02&chapterId=01",
    );
  }

  getTriedProblems(onlyIncorrect: boolean) {
    return axios.get<problemData[]>(
      `${process.env.REACT_APP_IP}/problem/try?onlyIncorrect=${onlyIncorrect}`,
    );
  }
}
export default new problemsService();
