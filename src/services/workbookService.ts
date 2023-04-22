import {
  workbookItem,
  workbookCountItem,
  workbookSidebarItem,
} from '../types/workbookItem';
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
      `http://localhost:8080/book/workbook?publisher=${publisher}&sortType=${sortType}&category=${category}&pageNum=${pageNum}`,
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
      `http://localhost:8080/book/workbook/info?publisher=${publisher}&category=${category}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
  }

  //3. 문제집 리스트를 반환
  //보류(어떤 api인지 확인 필요)
  getAllBookContent() {
    return axios.get<workbookItem[]>('');
  }
}

export default new WorkbookService();
