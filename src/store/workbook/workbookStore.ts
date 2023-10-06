import { makeAutoObservable, runInAction } from 'mobx';
import workbookService from '../../services/workbookService';

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

  constructor() {
    makeAutoObservable(this);
  }

  getTriedWorkbook = async () => {
    try {
      console.log('get tried workbook');
    } catch (error) {
      console.error('Error: ', error);
      return error;
    }
  };
}

export default WorkbookStore;
