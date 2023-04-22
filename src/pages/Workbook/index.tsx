import React, { useEffect, useMemo, useState } from 'react';
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
import WorkbookSidebar from './components/WorkbookSidebar';
import SearchBar from './components/SearchBar';
import WorkbookImgList from './components/WorkbookImgList';
import workbookService from '../../services/workbookService';
import {
  workbookSidebarItem,
  workbookItem,
  workbookListItem,
  workbookCountItem,
} from '../../types/workbookItem';
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
  // const [open, setOpen] = React.useState<boolean[]>([false]); //각 토글들의 상태를 배열로 관리함

  // const handleClick = (value: number) => () => {
  //   //value : 토글의 인덱스를 받아옴(몇번째 토글이 눌렸는지)
  //   const newOpen: boolean[] = [...open]; //상태를 저장한 open배열을 복사해옴
  //   const currentBool: boolean | undefined = open[value]; //현재 눌린 토글의 상태를 받아옴

  //   if (currentBool === undefined) {
  //     //존재하지 않음-> 누른적이 없음(닫힌상태)
  //     newOpen.push(true); //새로 true(열린상태)로 추가함
  //   } else {
  //     newOpen.splice(value, 1, !currentBool); //이미 배열에 존재하면, 상태를 반전시킴
  //   }

  //   setOpen(newOpen); //변경된 배열을 open배열에 복사해서 상태를 변경
  // };

  //파라미터 (sortType/publisher/pageNum)
  //분류(book nav bar에서의 분류) 선택
  const [workbookFilter, setWorkbookFilter] = useState<workbookListItem>({
    publisher: 'all',
    sortType: 'star',
    category: 'all',
    pageNum: 1,
  });
  const [workbookList, setWorkbookList] =
    React.useState<workbookItem[] | undefined>();
  const [workbookCount, setWorkbookCount] =
    React.useState<number | undefined>();

  const handleChangeWorkbookFilter = (newValue: object) => {
    const newFilter = { ...workbookFilter, ...newValue };
    setWorkbookFilter(newFilter);
  };

  useMemo(async () => {
    const { publisher, category, sortType, pageNum } = workbookFilter;
    const workbookListRes = await workbookService.getWorkbookList(
      publisher,
      sortType,
      category,
      pageNum,
    );
    const workbookCountRes = await workbookService.getWorkbookCount(
      publisher,
      category,
    );
    setWorkbookList(workbookListRes.data);
    setWorkbookCount(workbookCountRes.data);
  }, [workbookFilter]);

  const selectSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleChangeWorkbookFilter({ sortType: event.target.value });
  };

  const selectPublisher = (publisher: string) => {
    handleChangeWorkbookFilter({ publisher: publisher });
    return;
  };

  const selectPage = (event: React.ChangeEvent<unknown>, page: number) => {
    handleChangeWorkbookFilter({ pageNum: page });
  };
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
        <Grid item md={2} sx={{ mr: 4 }}>
          <WorkbookSidebar
            onPublisherMenuClick={selectPublisher}
            workbookListSummary={workbookListSummary}
            // lists={bookContents}
          />
        </Grid>
        <Grid item md={9} container>
          <Grid item md={12} className="workbook-sort-div">
            <span className="count-span">
              {`${workbookFilter.publisher} (${workbookCount})`}
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
                <WorkbookImgList workbookList={workbookList} />
              </Paper>
            </div>
            <div className="dummy-div"></div>
            <div className="pagination-div">
              <Pagination
                count={Math.ceil((workbookCount || 0) / 9)}
                defaultPage={1}
                page={workbookFilter.pageNum} //current page와 버튼상 보여지는 page를 동기화
                onChange={selectPage}
              />
            </div>
          </Grid>
        </Grid>
      </WorkbookListContainer>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </div>
  );
}
