import { Typography, Link, styled } from '@mui/material';

export const Subtitle = styled(Typography)(
  () => `
  font-family: NotoSans-Bold;
  padding: 5px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.334;
  letter-spacing: 0em;
  text-align: left;
    `,
);

export const UnderlinedSubtitle = styled(Typography)(
  () => `
  font-family: NotoSans-Bold;
  border-bottom: 2px solid #bcdcc4;
  padding: 5px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.334;
  letter-spacing: 0em;
  text-align: left;
    `,
);

export const ViewMoreLink = styled(Link)(
  () => `
  color: #009688 !important;
  padding-left: 30px;
  cursor: pointer;
    `,
);
