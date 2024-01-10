import { makeAutoObservable, runInAction } from 'mobx';
import problemService from '../../services/problemsService';
import problemItem from '../../types/problems';

class ProblemStore {
  triedProblems: problemItem[] | [] = [];

  constructor() {
    makeAutoObservable(this);
  }

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
