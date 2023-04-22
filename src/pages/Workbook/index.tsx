import React, { Suspense, useMemo, useState } from 'react';
import {
  Grid,
  Paper,
  FormControl,
  NativeSelect,
  Pagination,
  CircularProgress,
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
} from '../../types/workbookItem';
import { WorkbookListContainer } from './style';

export default function WorkBook(props: { sections: any }) {
  //파라미터 (sortType/publisher/pageNum)
  //분류(book nav bar에서의 분류) 선택
  const [workbookFilter, setWorkbookFilter] = useState<workbookListItem>({
    publisher: 'all',
    sortType: 'star',
    category: 'all',
    pageNum: 1,
  });
  const [workbookList, setWorkbookList] =
    useState<workbookItem[] | undefined>();
  const [workbookCount, setWorkbookCount] = useState<number>();
  const [workbookListSummary, setWorkbookListSummary] =
    useState<workbookSidebarItem[] | undefined>();

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
    const workbookListSummaryRes =
      await workbookService.getWorkbookListSummary();

    setWorkbookList(workbookListRes.data);
    setWorkbookCount(workbookCountRes.data);
    setWorkbookListSummary(workbookListSummaryRes.data);
  }, [workbookFilter]);

  const selectSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleChangeWorkbookFilter({ sortType: event.target.value });
  };

  const selectMenuClick = (publisher: string, category: string) => {
    handleChangeWorkbookFilter({
      publisher: publisher,
      category: category,
      pageNum: 1,
    });
    return;
  };

  const selectPage = (event: React.ChangeEvent<unknown>, page: number) => {
    handleChangeWorkbookFilter({ pageNum: page });
  };

  return (
    <div>
      <Header />
      <NavBar sections={props.sections} />
      <Grid>
        <SearchBar />
      </Grid>
      <Suspense fallback={<CircularProgress />}>
        <WorkbookListContainer container spacing={3}>
          <Grid item md={2} sx={{ mr: 4 }}>
            <WorkbookSidebar
              onMenuClick={selectMenuClick}
              workbookListSummary={workbookListSummary}
            />
          </Grid>
          <Grid item md={9} container>
            <Grid item md={12} className="workbook-sort-div">
              <span className="count-span">
                {`${workbookFilter.publisher} (${workbookCount || 0})`}
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
                  page={workbookFilter.pageNum}
                  onChange={selectPage}
                />
              </div>
            </Grid>
          </Grid>
        </WorkbookListContainer>
      </Suspense>

      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </div>
  );
}
