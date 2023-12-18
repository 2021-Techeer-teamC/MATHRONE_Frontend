import styled from 'styled-components';
import { LinearProgress } from '@mui/material';

export const WorkbookDetailDiv = styled.div`
  padding-bottom: 40px;

  .detail__card {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e2e2e2 !important;
    width: 100%;
  }

  .detail__img--workbook {
    margin-right: 20px;
    border-radius: 8px;
    box-shadow:
      0px 4px 5px -2px rgba(0, 0, 0, 0.2),
      0px 7px 10px 1px rgba(0, 0, 0, 0.14),
      0px 2px 16px 1px rgba(0, 0, 0, 0.12);
    width: 250px;
  }

  .detail__content {
    text-align: left !important;
    width: 50%;
  }

  .detail__content--publisher {
    font-size: 14px;
  }

  .detail__difficulty {
    color: gray;
  }

  .detail__chapters {
    background-color: white;
    padding: 10px;

    .detail__chapters__paper {
      width: 60%;
      margin: auto;
    }
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
    margin-top: 20px;

    .detail__level__button {
      border: 2px solid #009688;
      color: rgba(0, 0, 0, 0.6);
    }

    .detail__level__button--selected {
      background-color: #009688;
      color: white;
    }
  }

  .detail__tab--test {
    margin-top: 40px;

    .detail__tab__box {
      border-bottom: 1px solid;
      border-color: rgba(0, 0, 0, 0.12);
    }

    .MuiTabs-root {
      .MuiButtonBase-root {
        padding: 12px 0px;
        margin-right: 8px;
        font-weight: bold;
        color: #315c72;
      }
      .MuiTabs-indicator {
        background-color: #315c72;
      }
    }

    .detail__tab__panel {
      padding: 24px 0px;
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
  border: 2px solid #009688;
  
  .MuiLinearProgress-bar {
    background-color: #009688;
  }
  `,
);
