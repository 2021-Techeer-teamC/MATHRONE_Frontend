import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Pencil from '../../assets/image/pencil.png';
import { workbookSliderItem } from '../../types/workbookItem';
import './style.css';

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
  const [btnR, setBtnR] = useState(false);
  const [btnL, setBtnL] = useState(true);

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
      {posts.length !== 0 ? (
        <div className="slider-div">
          <div>
            <IconButton
              aria-label="arrow"
              size="large"
              onClick={moveForward}
              disabled={btnL}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          </div>
          <div>
            {data.map((item) => (
              <div className="slider-img-div">
                <Rating
                  className="slider-rating"
                  name="size-large"
                  defaultValue={item.star === true ? 1 : 0}
                  max={1}
                  size="large"
                  color="red"
                />
                <div className="slider-styled-div" />
                <img
                  className="slider-img"
                  src={item.img}
                  width={'200px'}
                  height={'300px'}
                  alt="workbook img"
                />
                <text className="slider-img-title">{item.title}</text>
              </div>
            ))}
          </div>
          <div>
            <IconButton
              aria-label="arrow"
              size="large"
              onClick={moveBackward}
              disabled={btnR}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </div>
      ) : (
        <div className="slider-none-div">
          <img src={Pencil} width="100px" alt="no-img" />
          <label>등록된 문제집이 없습니다.</label>
        </div>
      )}
    </>
  );
};

export default WorkbookSlider;
