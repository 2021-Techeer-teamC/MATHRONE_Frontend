import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Pencil from '../../assets/image/pencil.png';
import { workbookSliderItem } from '../../types/workbookItem';
import { WorkbookSliderData, WorkbookSliderNoneData } from './style.js';

type WorkbookSliderProps = {
  id: string;
  posts: workbookSliderItem[];
};

const WorkbookSlider = ({ id, posts }: WorkbookSliderProps) => {
  //시도 중인 문제집
  const [firstIdx, setFirstIdx] = useState<number>(0);
  const [lastIdx, setLastIdx] = useState<number>(
    Number((window.innerWidth - 200) / 280),
  ); //defalut로 보여질 갯수 + 1개
  const [data, setData] = useState<workbookSliderItem[]>([]);
  const [btnR, setBtnR] = useState<boolean>(false);
  const [btnL, setBtnL] = useState<boolean>(true);

  useEffect(() => {
    const workbookItems = posts.slice(firstIdx, lastIdx);
    setData(workbookItems);
  }, [posts, firstIdx, lastIdx]);

  const moveBackward = () => {
    let f_idx = firstIdx;
    let l_idx = lastIdx;

    if (l_idx + 1 <= posts.length) {
      //범위를 넘어가지 않을 때만
      f_idx += 1;
      l_idx += 1;
      setBtnL(false);
    } else {
      setBtnR(true);
    }
    setFirstIdx(f_idx);
    setLastIdx(l_idx);
    const tmp = posts.slice(firstIdx, lastIdx);
    setData(tmp);
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
    const tmp = posts.slice(firstIdx, lastIdx);
    setData(tmp);
  };

  useEffect(() => {
    const resize = () => {
      let value = Number(firstIdx + (window.innerWidth - 200) / 280);
      if (value <= 4 && value >= 1) {
        //최대 범위
        setLastIdx(value);
        const tmp = posts.slice(firstIdx, lastIdx);
        setData(tmp);
      }
    };
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  });

  return (
    <>
      {posts.length ? (
        <WorkbookSliderData>
          <IconButton
            aria-label="arrow"
            size="large"
            onClick={moveForward}
            disabled={btnL}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          {data.map((item) => (
            <div className="workbook-item-div">
              <img
                className="workbook-thumbnail"
                alt="workbook-thumbnail"
                src={item.img}
              />
              <Rating
                className="workbook-star"
                max={1}
                size="large"
                defaultValue={item.star ? 1 : 0}
              />
              <div className="workbook-thumbnail-overlay">
                <div className="workbook-title">{item.title}</div>
              </div>
            </div>
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
