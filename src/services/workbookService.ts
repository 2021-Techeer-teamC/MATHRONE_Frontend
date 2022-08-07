import bookItem from "../types/bookItem";
import bookContent from "../types/bookContent";
import axios from "axios";


class WorkbookService{

//Books.txs

    //1. 출판사를 보내면 출판사 별 문제집을 반환
    getWorkbook(publisher : string, sortType: string, pageNum: number, category: string){
        return axios.get<bookItem[]>(
            `/workbook?publisher=${publisher}&sortType=${sortType}&category=${category}&pageNum=${pageNum}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
                },
            }
        );
        //url+/publisher
    }

    //2.모든 문제집을 반환
    getWorkbookList(){
        return axios.get<bookItem[]>(
            "/workbook",
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
                },
            }
        );
    }

    //3. 문제집 리스트를 반환
    //보류(어떤 api인지 확인 필요)
    getAllBookContent(){
        return axios.get<bookContent[]>("");
    }
}

export default new WorkbookService();
