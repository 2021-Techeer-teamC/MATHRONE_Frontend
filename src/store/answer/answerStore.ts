import { makeAutoObservable, runInAction } from 'mobx';
import { userAnswerItem, userAnswerSubmitItem } from '../../types/answers';
import problemItem from '../../types/problems';
import answerService from '../../services/answerService';

class AnswerStore {
  userAnswerList: userAnswerItem[] | [] = [];

  constructor() {
    makeAutoObservable(this);
  }

  initializeAnswerList = async (problemList: problemItem[]) => {
    try {
      const initialAnswerList = problemList.map((problem) => ({
        problemId: problem.problemId,
        myAnswer: '',
      }));
      runInAction(() => {
        this.userAnswerList = initialAnswerList;
      })
      return true;
    } catch (error) {
      console.error('Error: ', error);
      return error;
    }
  };

  changeAnswer = async (input: number | string, problemId: string) => {
    try {
      const newAnswerArr: userAnswerItem[] = this.userAnswerList.map((answer: userAnswerItem) => {
        return answer.problemId === problemId ? { ...answer, myAnswer: input.toString() } : answer
      });
      runInAction(() => {
        this.userAnswerList = newAnswerArr;
      })
      return true;
    } catch (error) {
      console.error('Error: ', error);
      return error;
    }
  };

  submitAnswerList = async (isAll: boolean) => {
    try {
      const answerObj: userAnswerSubmitItem = {
        answerSubmitList: this.userAnswerList,
        isAll: isAll
      };
      answerService.postAnswer(answerObj).then((res) => {
        console.log(res);
        return res.data;
      })
    } catch (error) {
      console.error('Error: ', error);
      return error;
    }
  };
}

export default AnswerStore;
