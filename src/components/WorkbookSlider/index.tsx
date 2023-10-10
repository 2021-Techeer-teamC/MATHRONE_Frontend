import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
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
    Number((window.innerWidth - 200) / 280),
  );
  const [filteredWorkbooks, setFilteredWorkbooks] = useState<
    workbookItem[] | null
  >([]);
  const [btnR, setBtnR] = useState<boolean>(false);
  const [btnL, setBtnL] = useState<boolean>(true);

  const moveBackward = () => {
    let f_idx = firstIdx;
    let l_idx = lastIdx;

    if (workbooks && l_idx + 1 <= workbooks?.length) {
      //범위를 넘어가지 않을 때만
      f_idx += 1;
      l_idx += 1;
      setBtnL(false);
    } else {
      setBtnR(true);
    }
    setFirstIdx(f_idx);
    setLastIdx(l_idx);
    const selectedworkbooks = workbooks?.slice(firstIdx, lastIdx) || null;
    setFilteredWorkbooks(selectedworkbooks);
  };

  const moveForward = () => {
    let f_idx = firstIdx;
    let l_idx = lastIdx;

    if (f_idx - 1 >= 0) {
      f_idx -= 1;
      l_idx -= 1;
      setBtnR(false);
    } else {
      setBtnL(true);
    }
    setFirstIdx(f_idx);
    setLastIdx(l_idx);
    const tmp = workbooks?.slice(firstIdx, lastIdx) || null;
    setFilteredWorkbooks(tmp);
  };

  useEffect(() => {
    const workbookItems = workbooks?.slice(firstIdx, lastIdx) || null;
    setFilteredWorkbooks(workbookItems);
  }, [workbooks, firstIdx, lastIdx]);

  useEffect(() => {
    const resize = () => {
      let value = Number(firstIdx + (window.innerWidth - 200) / 280);
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

  return (
    <>
      {workbooks?.length ? (
        <WorkbookSliderData>
          <IconButton
            aria-label="arrow"
            size="large"
            onClick={moveForward}
            disabled={btnL}
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
            disabled={btnR}
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
