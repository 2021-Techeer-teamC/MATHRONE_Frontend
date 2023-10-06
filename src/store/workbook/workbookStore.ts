import { makeAutoObservable, runInAction } from 'mobx';
import workbookService from '../../services/workbookService';
import { workbookItem } from '../../types/workbookItem';

class WorkbookStore {
  //   account: profileItem = {
  //     userId: -1, // ex) userId: 17
  //     id: '', // ex) accountId: tester
  //     password: '',
  //     profileImg: '',
  //     exp: 0,
  //     premium: false,
  //     email: '',
  //     phoneNum: null,
  //     userImg: null,
  //     role: null,
  //     rankInfo: {
  //       rank: null,
  //       score: null,
  //       trycnt: null,
  //     },
  //   };

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
}

export default WorkbookStore;
