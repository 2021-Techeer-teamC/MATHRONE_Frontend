import { Grid, List, styled } from '@mui/material';

export const WorkbookListContainer = styled(Grid)(
  () => `
  padding: 40px;

  .workbook-sort-div{
    margin-bottom: 40px;
    
    .MuiFormControl-root {
      min-width: 120;
      float: right;
    }

  }
  
  .count-span {
    min-width: 120;
    float: left;
  }
  
  .pagination-div {
    display: flex;
    justify-content: center;
  }
  
  .workbook-img-list-paper {
    min-height: 400px;
    margin-bottom: 20px;

    .MuiCircularProgress-root  {
      margin-top: 150px;
    }
  }

  /* WorkbookImgList */
  .workbook-img-list-div {
    padding: 16px;
    margin-bottom: 24px;
    
    a {
      text-decoration-line: none !important;
    }

    .workbook-item {
      margin-bottom: 8px !important;
    }

    .workbook-img-div {
      position: relative;
      .workbook-star {
        position: absolute !important;
        bottom: 30px;
        right: 60px;
        // transform: translate(530%, 800%);
        z-index: 3;
      }
    }

    .workbook-img {
      width: 80%;
      height: 80%;
      border-radius: 20px;
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.4); /* 그림자효과 */
      
      :hover {
        filter: brightness(70%); 
      }
    }

    .MuiTypography-root {
      margin: 0px !important;
    }

    .workbook-desc {
      margin-top: 8px;
    }

    .workbook-title-div {
      padding-left: 60px;
      padding-right: 60px;
      justify-content: center;
      width: 200px;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      .workbook-title {
        color: #315c72 !important;
        font-weight: bold !important;
      }
      .workbook-title:hover {
        text-decoration-line: underline !important;
      }
    }
    .workbook-publisher {
      color: #009688 !important;
    }
  }
  
  /* SearchBar */
  .searchbar-div {
    margin: 20px;
    padding: 20px;
  }
  `,
);

export const SidebarList = styled(List)(
  () => `
    margin-right: 16px;
    margin-top: 40px;

    .MuiListItemIcon-root {
      margin-left: 0px !important;
      color: red;
    }

    .subWorkbook-button {
      padding-left: 32px;
    }

    .subWorkbook-title span {
      font-size: 0.9em !important;
    }
  `,
);
