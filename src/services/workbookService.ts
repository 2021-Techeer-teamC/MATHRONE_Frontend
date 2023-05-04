import { workbookItem, workbookSidebarItem } from '../types/workbookItem';
import axios from 'axios';

class WorkbookService {
  //1. 출판사를 보내면 출판사 별 문제집을 반환
  getWorkbookList(
    publisher: string,
    sortType: string,
    category: string,
    pageNum: number,
  ) {
    return axios.get<workbookItem[]>(
      `http://localhost:8080/workbook/list?publisher=${publisher}&sortType=${sortType}&category=${category}&pageNum=${pageNum}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
  }

  getWorkbookCount(publisher: string, category: string) {
    return axios.get<number>(
      `http://localhost:8080/workbook/count?publisher=${publisher}&category=${category}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
  }

  getWorkbookListSummary() {
    return axios.get<workbookSidebarItem[]>(
      `http://localhost:8080/workbook/summary`,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
  }
}

export default new WorkbookService();
