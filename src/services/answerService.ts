import answersList from '../types/answers';
import axios from '../utils/axios';

class gradingService {
  postAnswer(answer: any) {
    console.log(answer);
    return axios.post<answersList>(
      `${process.env.REACT_APP_IP}/answer`, // api 주소
      answer,
    );
  }
}
export default new gradingService();
