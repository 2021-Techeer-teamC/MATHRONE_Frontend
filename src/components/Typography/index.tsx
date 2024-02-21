import { Link, styled } from '@mui/material';
import styledc from 'styled-components';

export const TitleBase = styledc.span`
  font-family: "NotoSans-Medium";
  font-weight: 300;
`;

export const Subtitle = styledc(TitleBase)`
  font-size: 20px;
  line-height: 1.334;
  text-align: left;
`;

export const SmallSubtitle = styledc(TitleBase)`
  font-size: 15px;
  line-height: 1.334;
  text-align: center;
`;

export const UnderlinedSubtitle = styledc(TitleBase)`
  border-bottom: 2px solid #bcdcc4;
  font-size: 20px;
  line-height: 1.334;
  text-align: left;
`;

export const ViewMoreLink = styled(Link)(
  () => `
    color: #009688 !important;
    padding-left: 30px;
    cursor: pointer;
  `,
);
