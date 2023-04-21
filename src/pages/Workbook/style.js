import { Grid, styled } from '@mui/material';

export const WorkbookListContainer = styled(Grid)(
  () => `
  padding: 50px;
  // .sorting-div {
  //   display: grid;
  //   grid-template-columns: 1fr 3fr;
  //   grid-template-rows: 0.1fr 5fr 0.1fr;
  // }

  .workbook-sort-div{
    margin-bottom: 40px;
  }
  
  .count-span {
    min-width: 120;
    float: left;
  }
  
  .pagination-div {
    display: flex;
    justify-content: center;
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

    .workbook-img {
      width: 80%;
      border-radius: 20px;
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.4); /* 그림자효과 */
      
      :hover {
        filter: brightness(70%); 
      }
    }

    .MuiTypography-root {
      margin: 0px !important;
      color: black !important;
    }

    .workbook-title {
      color: #315c72 !important;
      font-weight: bold !important;
    }
  }
  
  
  /* WorkbookSlidebar */
  .nested-navbar {
    height: 55px;
    display: flex;
    justify-content: space-between;
  }
  
  .nested-navbar .navbar-item {
    background-color: white;
    padding: 5px 15px;
    border-radius: 5px;
    line-height: 20px;
    margin: 0 10px;
    cursor: pointer;
  }
  
  .items {
    /* background-color: rgb(146, 146, 221); */
    min-width: 100px;
  }
  
  .items .item {
    cursor: pointer;
    margin: 2px 0;
    /* font-size: 20px; */
    color: black;
    padding: 2px 10px;
    width: 100%;
    box-sizing: border-box;
  }
  
  .items .item:hover {
    background-color: #ebebeb;
  }
  
  .items .item span {
    float: right;
  }
  
  /* SearchBar */
  .searchbar-div {
    margin: 20px;
    padding: 20px;
  }

  
  `,
);
