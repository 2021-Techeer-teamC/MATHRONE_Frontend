import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { useParams } from 'react-router-dom';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import {
  Grid,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  ListItemButton,
  ListItemText,
  List,
  Collapse,
  LinearProgress,
} from '@mui/material';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar/index.js';
import './style.css';
import Workbook from './Workbook';
import Test from './Test';

const BookDetail = observer(() => {
  const params = useParams();
  const { workbookStore } = useStore();
  const { getCurrentWorkbook, currentWorkbook } = workbookStore;
  const [workbookId, setWorkbookId] = useState<string>('');

  useEffect(() => {
    setWorkbookId(params.id || '');
  }, [params.id]);

  useEffect(() => {
    getCurrentWorkbook(workbookId);
  }, [getCurrentWorkbook, workbookId]);

  useEffect(() => {
    console.log(currentWorkbook);
  }, [currentWorkbook]);

  return (
    <>
      <Header />
      <NavBar />
      { currentWorkbook?.type === 'workbook'? <Workbook /> : <Test /> }
    </>
  );
});

export default BookDetail;
