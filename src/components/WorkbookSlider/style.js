import { styled } from '@mui/material';

export const WorkbookSliderData = styled('div')(
  () => `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding-bottom: 60px;
  border-bottom: 1px solid #e4e4e4;
  `,
);

export const WorkbookSliderNoneData = styled('div')(
  () => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  
  .slider-none-label {
    text-align: center;
    align-items: center;
    color: #434343;
    padding-top: 40px;
  }
  `,
);
