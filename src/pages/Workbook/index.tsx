import React, { useEffect } from 'react';
import {
  Grid,
  Paper,
  FormControl,
  NativeSelect,
  Pagination,
} from '@mui/material';
import Header from '../../components/Header/index.js';
import NavBar from '../../components/NavBar/index.js';
import Footer from '../../components/Footer/index.js';
import WorkbookSidebar from './components/WorkbookSidebar.js';
import SearchBar from './components/SearchBar';
import WorkbookImgList from './components/WorkbookImgList';
import workbookService from '../../services/workbookService';
import { workbookSidebarItem, workbookItem } from '../../types/workbookItem';
import { WorkbookListContainer } from './style';

// dummy data
const workbookList: workbookItem[] = [
  {
    workbookId: '01',
    title: '책 01',
    profileImg: 'https://storage.googleapis.com/mathrone-bucket/test/01.jpg',
    publisher: '교육청',
    level: '1',
    star: 2,
  },
  {
    workbookId: '02',
    title: '책 02',
    profileImg: 'https://storage.googleapis.com/mathrone-bucket/test/01.jpg',
    publisher: 'EBS',
    level: '3',
    star: 3,
  },
  {
    workbookId: '03',
    title: '책 03',
    profileImg: 'https://storage.googleapis.com/mathrone-bucket/test/01.jpg',
    publisher: '교육청',
    level: '1',
    star: 2,
  },
  {
    workbookId: '04',
    title: '책 04',
    profileImg: 'https://storage.googleapis.com/mathrone-bucket/test/01.jpg',
    publisher: 'EBS',
    level: '2',
    star: 1,
  },
  {
    workbookId: '05',
    title: '책 05',
    profileImg: 'https://storage.googleapis.com/mathrone-bucket/test/01.jpg',
    publisher: 'EBS',
    level: '2',
    star: 6,
  },
  {
    workbookId: '06',
    title: '책 06',
    profileImg: 'https://storage.googleapis.com/mathrone-bucket/test/01.jpg',
    publisher: '평가원',
    level: '2',
    star: 10,
  },
  {
    workbookId: '07',
    title: '책 07',
    profileImg: 'https://storage.googleapis.com/mathrone-bucket/test/01.jpg',
    publisher: '평가원',
    level: '2',
    star: 7,
  },
  {
    workbookId: '08',
    title: '책 08',
    profileImg: 'https://storage.googleapis.com/mathrone-bucket/test/01.jpg',
    publisher: 'EBS',
    level: '3',
    star: 12,
  },
  {
    workbookId: '09',
    title: '책 09',
    profileImg: 'https://storage.googleapis.com/mathrone-bucket/test/01.jpg',
    publisher: 'EBS',
    level: '2',
    star: 6,
  },
];

const workbookListSummary: workbookSidebarItem[] = [
  {
    id: 0,
    publisher: 'EBS',
    categories: ['수능완성', '수능특강'],
  },
  {
    id: 1,
    publisher: '교육청',
    categories: ['4월 모의고사', '10월 모의고사'],
  },
  {
    id: 2,
    publisher: '평가원',
    categories: ['9월 모의고사', '11월 모의고사'],
  },
];

export default function WorkBook(props: { sections: any }) {
  //책 토글 관련
  //책 리스트 토글마다 열림/닫힘 상태를 저장함
  const [open, setOpen] = React.useState<boolean[]>([false]); //각 토글들의 상태를 배열로 관리함

  const handleClick = (value: number) => () => {
    //value : 토글의 인덱스를 받아옴(몇번째 토글이 눌렸는지)
    const newOpen: boolean[] = [...open]; //상태를 저장한 open배열을 복사해옴
    const currentBool: boolean | undefined = open[value]; //현재 눌린 토글의 상태를 받아옴

    if (currentBool === undefined) {
      //존재하지 않음-> 누른적이 없음(닫힌상태)
      newOpen.push(true); //새로 true(열린상태)로 추가함
    } else {
      newOpen.splice(value, 1, !currentBool); //이미 배열에 존재하면, 상태를 반전시킴
    }

    setOpen(newOpen); //변경된 배열을 open배열에 복사해서 상태를 변경
  };

  //파라미터 (sortType/publisher/pageNum)
  //분류(book nav bar에서의 분류) 선택
  const [publisher, setPublisher] = React.useState<string>('all'); //출판사
  const [sortType, setSortType] = React.useState<string>('star');
  const [category, setCategory] = React.useState<string>('all');
  const [pageNum, setPageNum] = React.useState<number>(1);

  // const [result, setResult] = React.useState<workbookItem[] | undefined>();

  // useEffect( () => {
  //   getWorkbookList();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const getWorkbookList = async () => {
  //     try {
  //       const res = await workbookService.getWorkbookList(publisher,sortType,category,pageNum,);
  //       console.log(res.data);
  //       setResult(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  // };

  // const getWorkbooks =
  //   (publisher: string, sortType: string, pageNum: number, category: string) =>
  //   async () => {
  //     console.log("start2");
  //     try {
  //       const res = await workbookService.getWorkbook(
  //         publisher,
  //         sorted,
  //         currentPage,
  //         category
  //       );
  //       //res 가 없어서 현재 error
  //       // setResult(res.data.workbooks);
  //       // setResultCnt(res.data.resultNumber);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //     console.log("end2");
  //   };
  // }

  //setting parameter
  //정렬기준(난이도순, 인기순 등)
  // sortType 변경시 변수 수정
  const selectSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortType = event.target.value;
    setSortType(sortType);
  };

  const selectPublisher = (publisher: string) => {
    setPublisher(publisher);
    setCategory('all');
  };

  const selectPage = (event: React.ChangeEvent<unknown>, page: number) => {
    setPageNum(page);
  };

  const selectCategory = (publisher: string, category: string) => {
    setCategory(category);
    setPublisher(publisher);
  };

  //get result
  /*
  case 1. book page 최초 입장시
  ~/workbook
    1) bookItem[]
    publisher=all
    page = 1
    category = all
    sort = star(좋아요/인기순)
    디폴트로 하는 9개의 고정 결과
    2) 해당 디폴트 값에서 결과의 수
    3) bookList : bookContents[]
    왼쪽의 북 리스트


  case 2. 변경되는 파라미터 값에 따른 결과
  ~/workbook?publisher=${publisher}&sortType=${sortType}&category=${category}&pageNum=${pageNum}
      1) bookItem[]
      publisher=??
      page = ??
      category = ??
      sort = ??
      달라지는 파라미터에 대한 결과 9
    2) 해당 파라미터 값에서 결과의 수

   */

  const [resultCnt, setResultCnt] = React.useState<number>(10);
  // const [itemDatas, setItemDatas] = React.useState<bookItem[]>([]); //axios결과 임시용
  const [result, setResult] = React.useState<workbookItem[]>(workbookList);
  const [bookContents, setBookContents] =
    React.useState<workbookSidebarItem[]>(workbookListSummary); //empty bookList

  //case 2. 파라미터 변경시 마다 실행
  // const getWorkbooks =
  //   (publisher: string, sortType: string, pageNum: number, category: string) =>
  //   async () => {
  //     console.log("start2");
  //     try {
  //       const res = await workbookService.getWorkbookList(
  //         publisher,
  //         sortType,
  //         category,
  //         pageNum
  //       );
  //       //res 가 없어서 현재 error
  //       // setResult(res.data.workbooks);
  //       // setResultCnt(res.data.resultNumber);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //     console.log("end2");
  //   };

  // case 1) 최초 1회 실행
  // const getWorkList =
  //   (publisher: string, sortType: string, pageNum: number, category: string) =>
  //   async () => {
  //     console.log("start2");
  //     try {
  //       const res = await workbookService.getWorkbookList();
  //       // res가 없어서 에러 일단 주석
  //       // setResult(res.data.workbooks);
  //       // setResultCnt(res.data.resultNumber);
  //       // setBookContents(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //     console.log("end2");
  //   };

  // useEffect(() => {
  //   /*
  //   정렬 방법이나 페이지가 변경된 경우에 페이지를 1로 변경하지 않음
  //    */
  //   getWorkbooks(publisher, sorted, currentPage, category);
  // }, [sorted, currentPage]);

  return (
    <div>
      <Header />
      <NavBar sections={props.sections} />
      <Grid>
        <SearchBar />
      </Grid>
      <WorkbookListContainer container spacing={3}>
        <Grid item md={2}>
          <WorkbookSidebar
          // lists={bookContents}
          // onPublisherClick={selectPublisher}
          // onCategoryClick={selectCategory}
          />
        </Grid>
        <Grid item md={9} container>
          <Grid item md={12} className="workbook-sort-div">
            <span className="count-span">
              {category === 'all' ? publisher : category}({resultCnt})
            </span>
            <FormControl sx={{ minWidth: 120, float: 'right' }}>
              <NativeSelect
                defaultValue={'star'}
                inputProps={{
                  name: 'category',
                  id: 'uncontrolled-native',
                }}
                onChange={selectSort}
              >
                <option value={'star'}>인기순</option>
                <option value={'level'}>난이도순</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item md={12}>
            <div>
              <Paper>
                <WorkbookImgList posts={result} />
              </Paper>
            </div>
            <div className="dummy-div"></div>
            <div className="pagination-div">
              <Pagination
                count={Math.ceil(resultCnt / 9)}
                defaultPage={1}
                page={pageNum} //current page와 버튼상 보여지는 page를 동기화
                onChange={selectPage}
              />
            </div>
          </Grid>
        </Grid>
      </WorkbookListContainer>
      {/* <WorkbookListContainer>
        <div className="container sorting-div">
          <div className="dummy-div" />
          <div style={{ marginBottom: '20px' }} className="workbook-sort-div">
            <span className="count-span">
              {category === 'all' ? publisher : category}({resultCnt})
            </span>
            <FormControl sx={{ minWidth: 120, float: 'right' }}>
              <NativeSelect
                defaultValue={'star'}
                inputProps={{
                  name: 'category',
                  id: 'uncontrolled-native',
                }}
                onChange={selectSort}
              >
                <option value={'star'}>인기순</option>
                <option value={'level'}>난이도순</option>
              </NativeSelect>
            </FormControl>
          </div>

          <WorkbookSidebar
            lists={bookContents}
            onPublisherClick={selectPublisher}
            onCategoryClick={selectCategory}
          />

          <div>
            <Paper>
              <WorkbookImgList posts={result} />
            </Paper>
          </div>
          <div className="dummy-div"></div>
          <div className="pagination-div">
            <Pagination
              count={Math.ceil(resultCnt / 9)}
              defaultPage={1}
              page={pageNum} //current page와 버튼상 보여지는 page를 동기화
              onChange={selectPage}
            />
          </div>
        </div>
      </WorkbookListContainer> */}
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </div>
  );
}
