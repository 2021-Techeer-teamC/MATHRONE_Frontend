import { makeAutoObservable, runInAction } from 'mobx';
import problemService from '../../services/problemsService';
import problemItem from '../../types/problems';

class ProblemStore {
  problemList: problemItem[] = [];
  triedProblems: problemItem[] | [] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getProblemList = async (workbookId: string, chapterId: string) => {
    try {
      problemService.getProblems(workbookId, chapterId).then((res) => {
        runInAction(() => {
          this.problemList = res.data;
        })
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
