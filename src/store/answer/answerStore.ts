import { makeAutoObservable, runInAction } from 'mobx';
import { userAnswerItem, userAnswerSubmitItem } from '../../types/answers';
import problemItem from '../../types/problems';
import answerService from '../../services/answerService';

class AnswerStore {
  alertStore;

  userAnswerList: userAnswerItem[] | [] = [];

  constructor({alertStore}: any) {
    makeAutoObservable(this);
    this.alertStore = alertStore;
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

  submitAnswerList = async (checkAll: boolean) => {
    try {
      const answerObj: userAnswerSubmitItem = {
        answerSubmitList:
          checkAll ? 
            this.userAnswerList.map((answer: userAnswerItem) => {
              // TEMP: myAnswer non empty value
              if(answer.myAnswer === "") return { problemId: answer.problemId, myAnswer: "999" }
              else return answer;
            })
            : this.userAnswerList.filter((answer)=> answer.myAnswer !== ""),
      };
      const res = await answerService.postAnswer(answerObj, checkAll);
      return res;
    } catch (error) {
      // console.log(error.response);
      this.alertStore.setAlertOpen('error', '채점에 문제가 생겼습니다.');
      throw error;
    }
  };
}

export default AnswerStore;
