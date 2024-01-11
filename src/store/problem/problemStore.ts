import { makeAutoObservable, runInAction } from 'mobx';
import problemService from '../../services/problemsService';
import problemItem from '../../types/problems';

class ProblemStore {
  problemList: problemItem[] = [];

  currentProblem: problemItem | null = null;

  currentProblemIdx: number = 0;

  triedProblems: problemItem[] | [] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getProblemList = async (workbookId: string, chapterId: string) => {
    try {
      problemService.getProblems(workbookId, chapterId).then((res) => {
        runInAction(() => {
          this.problemList = res.data;
          this.currentProblem = res.data[this.currentProblemIdx];
        })
      })
      return true;
    } catch (error) {
      console.error('Error: ', error);
      return error;
    }
  };

  setCurrentProblem = async (moveToIdx: number) => {
    try {
      runInAction(() => {
        this.currentProblem = this.problemList[moveToIdx];
        this.currentProblemIdx = moveToIdx;
      })
      return true;
    } catch (error) {
      console.error('Error: ', error);
      return error;
    }
  };

  getTriedProblems = async (onlyIncorrect: boolean, length: number) => {
    try {
      problemService.getTriedProblems(onlyIncorrect).then((res) => {
        runInAction(() => {
          this.triedProblems = res.data.splice(0, length);
        });
      });
      return true;
    } catch (error) {
      console.error('Error: ', error);
      return error;
    }
  };
}

export default ProblemStore;
