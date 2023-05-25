import answersList from '../types/answers';
import axios from 'axios';

class gradingService {
  postAnswer(answer: any) {
    return axios.put<answersList>(
      'http://localhost:8080/answer/problem', // api 주소
      answer,
    );
  }
}
export default new gradingService();
