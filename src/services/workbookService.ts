import { workbookItem, workbookSidebarItem } from '../types/workbookItem';
import axios from '../utils/axios';

class WorkbookService {
  //1. 출판사를 보내면 출판사 별 문제집을 반환
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
    return axios.get<workbookSidebarItem[]>(
      `${process.env.REACT_APP_IP}/workbook/summary`,
    );
  }

  getWorkbookTry() {
    return axios.get<workbookItem[]>(
      `${process.env.REACT_APP_IP}/workbook/try`,
    );
  }
}

export default new WorkbookService();
