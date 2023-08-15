import answersList from '../types/answers';
import axios from '../utils/axios';

class gradingService {
  postAnswer(answer: any) {
    return axios.put<answersList>(
      `${process.env.REACT_APP_IP}/answer/problem`, // api 주소
      answer,
    );
  }
}
export default new gradingService();
