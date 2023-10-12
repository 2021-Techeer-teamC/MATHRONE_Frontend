import { makeAutoObservable, runInAction } from 'mobx';
import workbookService from '../../services/workbookService';
import { workbookItem } from '../../types/workbookItem';

class WorkbookStore {
  triedWorkbooks: workbookItem[] | null = null;

  starWorkbooks: workbookItem[] | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  getTriedWorkbook = async () => {
    try {
      workbookService.getWorkbookTry().then((res) => {
        runInAction(() => {
          this.triedWorkbooks = res.data;
        });
      });
      return true;
    } catch (error) {
      console.error('Error: ', error);
      return error;
    }
  };

  getStarWorkbook = async () => {
    try {
      workbookService.getWorkbookStar().then((res) => {
        runInAction(() => {
          this.starWorkbooks = res.data;
        });
      });
      return true;
    } catch (error) {
      console.error('Error: ', error);
      return error;
    }
  };

  starWorkbook = async (workbookId: string) => {
    try {
      workbookService.starWorkbook(workbookId).then((res) => {
        console.log(res);
      });
      return true;
    } catch (error) {
      console.error('Error: ', error);
      return error;
    }
  };

  unStarWorkbook = async (workbookId: string) => {
    try {
      workbookService.unStarWorkbook(workbookId).then((res) => {
        console.log(res);
      });
      return true;
    } catch (error) {
      console.error('Error: ', error);
      return error;
    }
  };
}

export default WorkbookStore;
