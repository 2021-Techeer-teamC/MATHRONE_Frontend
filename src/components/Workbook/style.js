import { styled } from '@mui/material';

export const WorkbookDiv = styled('div')(
  () => `
    display: flex;
    position: relative;
    width: 200px;
    height: 300px;
    cursor: pointer;
    float: left;
    margin-right: 30px;
    margin-left: 30px;

    &:hover .workbook-thumbnail-overlay {
        opacity: 1;
    }

    .workbook-thumbnail {
        width: 200px;
        height: 300px;
        transition: .5s ease;
        border-radius: 20px;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.4); /* 그림자효과 */
    }


    .workbook-thumbnail-overlay {
        border-radius: 20px;
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        width: 200px;
        height: 300px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
        background-color: rgb(0, 0, 0, 0.5);
    }

    .workbook-title {
        padding: 10px;
        font-size: 20px;
        text-align: left;
        color: white;
    }

    .workbook-star {
        position: absolute !important;
        transform: translate(530%, 800%);
        z-index: 3;
    }

    `,
);
