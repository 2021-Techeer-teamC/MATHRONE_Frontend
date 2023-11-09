import React, { useEffect, useState } from 'react';
import {
  Grid,
  Paper,
  FormControl,
  NativeSelect,
  Pagination,
  CircularProgress,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import Header from '../../components/Header/index.js';
import NavBar from '../../components/NavBar/index.js';
import Footer from '../../components/Footer/index.js';
import CategorySidebar from './components/CategorySidebar';
import SearchBar from './components/SearchBar';
import WorkbookImgList from './components/WorkbookImgList';
import { workbookFilter } from '../../types/workbookItem';
import { WorkbookListContainer } from './style';

const WorkbookList = observer(() => {
  const { workbookStore } = useStore();
  const {
    workbookList,
    getWorkbookList,
    workbookListTotalCount,
    categories,
    getWorkbookCategories,
  } = workbookStore;

  const [workbookFilter, setWorkbookFilter] = useState<workbookFilter>({
    publisher: 'all',
    sortType: 'star',
    category: 'all',
    pageNum: 1,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeWorkbookFilter({ sortType: event.target.value });
  };

  const changeWorkbookFilter = (newValue: object) => {
    const newFilter = { ...workbookFilter, ...newValue };
    setWorkbookFilter(newFilter);
  };

  const handleCategoryChange = (publisher: string, category: string) => {
    changeWorkbookFilter({
      publisher: publisher,
      category: category,
      pageNum: 1,
    });
    return;
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    changeWorkbookFilter({ pageNum: page });
  };

  useEffect(() => {
    setLoading(true);
    getWorkbookList(workbookFilter).then(() => {
      setLoading(false);
    });
    getWorkbookCategories();
  }, [workbookFilter, getWorkbookList, getWorkbookCategories]);

  return (
    <div>
      <Header />
      <NavBar />
      <Grid>
        <SearchBar />
      </Grid>
      <WorkbookListContainer container spacing={3}>
        <Grid item md={2} sx={{ mr: 2 }}>
          <CategorySidebar
            onCategoryClick={handleCategoryChange}
            categories={categories}
          />
        </Grid>
        <Grid item md={9} container>
          <Grid item md={12} className="workbook-sort-div">
            <span className="count-span">
              {`${
                workbookFilter.publisher === 'all'
                  ? '전체'
                  : workbookFilter.publisher
              } (${workbookListTotalCount})`}
            </span>
            <FormControl className="sortType-form">
              <NativeSelect
                defaultValue={'star'}
                inputProps={{
                  name: 'category',
                  id: 'uncontrolled-native',
                }}
                onChange={handleFilterChange}
              >
                <option value={'star'}>인기순</option>
                <option value={'level'}>난이도순</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item md={12}>
            <div>
              <Paper className="workbook-img-list-paper" elevation={16}>
                {loading ? (
                  <CircularProgress />
                ) : (
                  <WorkbookImgList workbookList={workbookList} />
                )}
              </Paper>
            </div>
            <div className="dummy-div"></div>
            <div className="pagination-div">
              <Pagination
                count={Math.ceil(workbookListTotalCount / 9)}
                defaultPage={1}
                page={workbookFilter.pageNum}
                onChange={handlePageChange}
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
});

export default WorkbookList;
