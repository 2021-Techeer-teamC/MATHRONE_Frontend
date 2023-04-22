import { Box, styled } from '@mui/material';

export const HeaderBox = styled(Box)(
  () => `
  width: 100%;
  
  .header {
    background-color: none;
    border: none;
  }
  
  .header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px;
  
    position: static;
    top: 0px;
  
    background-image: linear-gradient(
      to bottom,
      #c7c9cd,
      #d5d6d9,
      #e3e4e6,
      #f1f1f2,
      #ffffff
    );
  
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 0px;
  }
  
  .header-link {
    text-decoration: none;
  }
  
  #register-button {
    width: 90px;
    border-radius: 100px;
    color: #000000de;
    background-color: #bcdcc4;
  }
  #register-button:hover {
    background-color: #009688;
  }
  
  #login-button {
    width: 70px;
    border-radius: 100px;
    color: white;
    background-color: #315c72;
  }
  #login-button:hover {
    background-color: #009688;
  }
  `,
);
