import { makeAutoObservable, runInAction } from 'mobx';
import workbookService from '../../services/workbookService';
import {
  workbookItem,
  workbookDetail,
  workbookFilter,
  workbookCategoryItem,
} from '../../types/workbookItem';

class WorkbookStore {
  workbookList: workbookItem[] = [];

  workbookListTotalCount: number = 0;

  categories: workbookCategoryItem[] = [];

  currentWorkbook: workbookDetail | null = null;

  triedWorkbooks: workbookItem[] | null = [];

  starWorkbooks: workbookItem[] | null = [];

  constructor() {
    makeAutoObservable(this);
  }

  getWorkbookList = async (workbookFilter: workbookFilter) => {
    try {
      const { publisher, category, sortType, pageNum } = workbookFilter;
      workbookService
        .getWorkbookList(publisher, sortType, category, pageNum)
        .then((res) => {
          runInAction(() => {
            this.workbookList = res.data;
          });
        });
      workbookService.getWorkbookCount(publisher, category).then((res) => {
        runInAction(() => {
          console.log(res.data);
          this.workbookListTotalCount = res.data;
        });
      });
    } catch (error) {
      console.error('Error: ', error);
      return error;
    }
  };

  getWorkbookCategories = async () => {
    try {
      workbookService.getWorkbookListSummary().then((res) =>
        runInAction(() => {
          this.categories = res.data;
        }),
      );
    } catch (error) {
      console.error('Error: ', error);
      return error;
    }
  };

  getCurrentWorkbook = async (workbookId: string) => {
    try {
      workbookService.getCurrentWorkbookDetail(workbookId).then((res) => {
        runInAction(() => {
          this.currentWorkbook = res.data;
        });
      });
    } catch (error) {
      console.error('Error: ', error);
      return error;
    }
  };

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
