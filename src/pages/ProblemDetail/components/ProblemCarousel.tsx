import * as React from 'react';
import { Box, IconButton } from '@mui/material';
import problemItem from '../../../types/problems';
import { ProblemCarouselBox } from '../style';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export interface Props {
  posts: problemItem;
  setNum: React.Dispatch<React.SetStateAction<number>>;
  num: number;
  len: number;
}

const ProblemCarousel = ({ posts, setNum, num, len }: Props) => {
  return (
    <ProblemCarouselBox>
      <IconButton onClick={() => (num === 1 ? null : setNum(num - 1))}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <Box component="img" src={posts.problemImg}></Box>
      <IconButton onClick={() => (num === len ? null : setNum(num + 1))}>
        <ArrowForwardIosIcon />
      </IconButton>
    </ProblemCarouselBox>
  );
};

export default ProblemCarousel;
