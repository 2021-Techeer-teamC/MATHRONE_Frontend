import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Pencil from '../../assets/image/pencil.png';
import { workbookItem } from '../../types/workbookItem';
import Workbook from '../../components/Workbook';
import { WorkbookSliderData, WorkbookSliderNoneData } from './style.js';

type WorkbookSliderProps = {
  id: string;
  workbooks: workbookItem[] | null;
};

const WorkbookSlider = ({ id, workbooks }: WorkbookSliderProps) => {
  const [firstIdx, setFirstIdx] = useState<number>(0);
  //defalut로 보여질 갯수 + 1개
  const [lastIdx, setLastIdx] = useState<number>(Math.floor((window.innerWidth - 200) / 280));
  const [filteredWorkbooks, setFilteredWorkbooks] = useState<workbookItem[] | null>([]);
  const [disableBtnF, setDisableBtnF] = useState<boolean>(true);
  const [disableBtnB, setDisableBtnB] = useState<boolean>(false);

  useEffect(() => {
    const workbookItems = workbooks?.slice(firstIdx, lastIdx) || [];
    setFilteredWorkbooks(workbookItems);
  }, [workbooks, firstIdx, lastIdx]);

  useEffect(() => {
    if (firstIdx === 0) setDisableBtnF(true);
    if (workbooks && lastIdx >= workbooks.length) {
      setDisableBtnB(true);
    } else setDisableBtnB(false);
  }, [workbooks, firstIdx, lastIdx]);

  const moveForward = () => {
    if (firstIdx - 1 >= 0) {
      setFirstIdx(firstIdx - 1);
      setLastIdx(lastIdx - 1);
      setDisableBtnB(false);
    } else {
      setDisableBtnF(true);
    }
    setFilteredWorkbooks(workbooks?.slice(firstIdx, lastIdx) || []);
  };

  const moveBackward = () => {
    if (workbooks && lastIdx + 1 <= workbooks?.length) {
      //범위를 넘어가지 않을 때만
      setFirstIdx(firstIdx + 1);
      setLastIdx(lastIdx + 1);
      setDisableBtnF(false);
    } else {
      setDisableBtnB(true);
    }
    setFilteredWorkbooks(workbooks?.slice(firstIdx, lastIdx) || []);
  };

  return (
    <>
      {workbooks?.length ? (
        <WorkbookSliderData>
          <IconButton aria-label="arrow" size="large" onClick={moveForward} disabled={disableBtnF}>
            <ArrowBackIosNewIcon />
          </IconButton>
          {filteredWorkbooks?.map((item) => <Workbook workbook={item} type="workbook-slider" />)}
          <IconButton aria-label="arrow" size="large" onClick={moveBackward} disabled={disableBtnB}>
            <ArrowForwardIosIcon />
          </IconButton>
        </WorkbookSliderData>
      ) : (
        <WorkbookSliderNoneData>
          <img src={Pencil} width="50px" alt="no-img" />
          <label>등록된 문제집이 없습니다.</label>
        </WorkbookSliderNoneData>
      )}
    </>
  );
};

export default WorkbookSlider;
