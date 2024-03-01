import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import CircularProgress from '@mui/material/CircularProgress';
import { useStore } from '../../store';
import { useParams } from 'react-router-dom';
import { green } from '@mui/material/colors';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar/index.js';
import Workbook from './Workbook';
import Test from './Test';

const WorkbookDetail = observer(() => {
  const params = useParams();
  const { workbookStore } = useStore();
  const { getCurrentWorkbook, initializeCurrentWorkbook, currentWorkbook } = workbookStore;
  const workbookId: string = params.id || '';

  useEffect(() => {
    getCurrentWorkbook(workbookId);
    return () => {
      initializeCurrentWorkbook();
    };
  }, [getCurrentWorkbook, workbookId, initializeCurrentWorkbook]);

  return (
    <>
      <Header />
      <NavBar />
      {currentWorkbook ? (
        currentWorkbook?.type === 'workbook' ? (
          <Workbook />
        ) : (
          <Test />
        )
      ) : (
        /* TODO: 로딩 컴포넌트 구체화 */
        <CircularProgress color="inherit" disableShrink />
      )}
    </>
  );
});

export default WorkbookDetail;
