import { styled, Snackbar } from '@mui/material';

export const StyledSnackbar = styled(Snackbar)(
  () => `
    box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);
	border-radius: 4px;
  `
);