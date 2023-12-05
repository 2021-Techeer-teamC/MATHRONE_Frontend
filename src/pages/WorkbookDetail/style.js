import styled from 'styled-components';
import { LinearProgress } from '@mui/material';

export const WorkbookDetailDiv = styled.div`
  padding-bottom: 40px;

  .detail-card-div {
    align-items: center;
    justify-content: center;
    background-color: #e2e2e2 !important;
    width: 100%;
  }

  .detail-img {
    margin-right: 20px;
  }

  .detail-content {
    text-align: left !important;
  }

  .detail-difficulty {
    color: gray;
  }

  .detail-chapter-div {
    background-color: white;
  }

  .detail-chapter-paper {
    width: 80%;
    margin: auto;
  }
`;

export const TestDetialDiv = styled.div`
  padding-bottom: 40px;

  .detail__img--test {
    height: 400px;
    overflow: hidden;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.5) 3px 3px 10px inset;
    
    img {
      position: absolute;
      z-index: -1;
      top: -100px;
      left: 0;
      width: 100%;
    }
  }

  .detail__description {
    text-align: left;
    width: 60%;
    margin: auto;
    padding: 40px;
  }

  .detail__startBtn {
    margin: 8px 0px;
    float: right;

    .MuiButton-root {
      background-color: #315c72;
      font-weight: bold;
    }
  }

  .detail__level--test {
    margin-top: 40px;

    .detail__level__button {
      border: 2px solid #009688;
      color: rgba(0, 0, 0, 0.6);
    }

    .detail__level__button--selected {
      background-color: #009688;
      color: white;
    }
  }
  
`;

export const Progressbar = styled(LinearProgress)(
  () => `
  margin-top: 16px;
  margin-bottom: 4px;
  border-radius: 10px;
  height: 8px !important;
  background-color: #c2e8e4;
  .MuiLinearProgress-bar {
    background-color: #009688;
  }
  `,
);
