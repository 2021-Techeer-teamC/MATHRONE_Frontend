import {
  workbookItem,
  workbookCategoryItem,
  workbookDetail,
} from '../types/workbookItem';
import axios from '../utils/axios';

class WorkbookService {
  getWorkbookList(
    publisher: string,
    sortType: string,
    category: string,
    pageNum: number,
  ) {
    return axios.get<workbookItem[]>(
      `${process.env.REACT_APP_IP}/workbook/list?publisher=${publisher}&sortType=${sortType}&category=${category}&pageNum=${pageNum}`,
    );
  }

  getWorkbookCount(publisher: string, category: string) {
    return axios.get<number>(
      `${process.env.REACT_APP_IP}/workbook/count?publisher=${publisher}&category=${category}`,
    );
  }

  getWorkbookListSummary() {
    return axios.get<workbookCategoryItem[]>(
      `${process.env.REACT_APP_IP}/workbook/summary`,
    );
  }

  getCurrentWorkbookDetail(workbookId: string) {
    return axios.get<workbookDetail>(
      `${process.env.REACT_APP_IP}/workbook/?id=${workbookId}`,
    );
  }

  getWorkbookTry() {
    return axios.get<workbookItem[]>(
      `${process.env.REACT_APP_IP}/workbook/try`,
    );
  }

  getWorkbookStar() {
    return axios.get<workbookItem[]>(
      `${process.env.REACT_APP_IP}/workbook/star`,
    );
  }

  starWorkbook(workbookId: string) {
    return axios.post(
      `${process.env.REACT_APP_IP}/workbook/star/${workbookId}`,
    );
  }

  unStarWorkbook(workbookId: string) {
    return axios.delete(
      `${process.env.REACT_APP_IP}/workbook/star/${workbookId}`,
    );
  }
}

export default new WorkbookService();
