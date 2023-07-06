import { Container, Grid, styled } from '@mui/material';

export const PaymentContainer = styled(Container)(
  () => `
    margin-top: 200px;
    
    .MuiSvgIcon-root {
      font-size: 100px;
    }
    
    .success_icon {
      color: #009688;
    }
    .success_button {
      background-color: #009688 !important;
    }

    .fail_icon {
      color: red;
    }
    .fail_button {
      background-color: red !important;
    }

    .MuiTypography-root {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  `,
);

export const ResultHeaderBox = styled(Grid)(
  () => `
    padding: 10px;
    margin-bottom: 32px;
    
    .circle_div {
      display: flex;
      margin-left: 16px;
      margin-right: 16px;
      .circle {
        margin: 0px 10px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #009688;
      }
    }
    
    img {
      width: 117px;
    }
  `,
);
