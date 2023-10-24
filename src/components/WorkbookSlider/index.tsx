import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Pencil from '../../assets/image/pencil.png';
import { workbookItem } from '../../types/workbookItem';
import { WorkbookSliderData, WorkbookSliderNoneData } from './style.js';
import Workbook from '../../components/Workbook';

type WorkbookSliderProps = {
  id: string;
  workbooks: workbookItem[] | null;
};

const WorkbookSlider = ({ id, workbooks }: WorkbookSliderProps) => {
  const [firstIdx, setFirstIdx] = useState<number>(0);
  //defalut로 보여질 갯수 + 1개
  const [lastIdx, setLastIdx] = useState<number>(
    Math.floor((window.innerWidth - 200) / 280),
  );
  const [filteredWorkbooks, setFilteredWorkbooks] = useState<
    workbookItem[] | null
  >([]);

  const [disableBtnF, setDisableBtnF] = useState<boolean>(true);
  const [disableBtnB, setDisableBtnB] = useState<boolean>(false);

  useEffect(() => {
    const workbookItems = workbooks?.slice(firstIdx, lastIdx) || [];
    setFilteredWorkbooks(workbookItems);
    if (firstIdx === 0) setDisableBtnF(true);
    if (workbooks && lastIdx + 1 > workbooks.length) setDisableBtnB(true);
  }, [workbooks, firstIdx, lastIdx]);

  useEffect(() => {
    const resize = () => {
      let value = Math.floor(firstIdx + (window.innerWidth - 200) / 280);
      if (value <= 4 && value >= 1) {
        //최대 범위
        setLastIdx(value);
        const tmp = workbooks?.slice(firstIdx, lastIdx) || null;
        setFilteredWorkbooks(tmp);
      }
    };
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  });

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
          <IconButton
            aria-label="arrow"
            size="large"
            onClick={moveForward}
            disabled={disableBtnF}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          {filteredWorkbooks?.map((item) => (
            <Workbook workbook={item} type="workbook-slider" />
          ))}
          <IconButton
            aria-label="arrow"
            size="large"
            onClick={moveBackward}
            disabled={disableBtnB}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </WorkbookSliderData>
      ) : (
        <WorkbookSliderNoneData>
          <img src={Pencil} width="100px" alt="no-img" />
          <label>등록된 문제집이 없습니다.</label>
        </WorkbookSliderNoneData>
      )}
    </>
  );
};

export default WorkbookSlider;
