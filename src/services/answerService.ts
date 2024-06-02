import answersList, { userAnswerSubmitItem } from '../types/answers';
import axios from '../utils/axios';


class answerService {
  postAnswer(answer: userAnswerSubmitItem, checkAll: boolean) {
    // console.log(answer);
    return axios.post<answersList>(
      `${process.env.REACT_APP_IP}/answer?checkAll=${checkAll}`,
      answer,
    );
  }
}
export default new answerService();
