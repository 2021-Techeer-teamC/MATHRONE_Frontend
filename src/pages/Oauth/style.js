import styled from "styled-components";
import { Grid, CircularProgress } from "@mui/material/";

export const SNSLoadingWrapper = styled(Grid)`
  min-height: 100vh;
  justify-content: center;
  aligh-items: center;
`;

export const LoadingCircular = styled(CircularProgress)`
  margin-top: 16px;
  color: #315c72 !important;
`;
