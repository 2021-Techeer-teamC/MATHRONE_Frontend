import React from "react";
import { observer } from "mobx-react-lite";
import { Alert } from "@mui/material";
import { useStore } from "../../store";
import { StyledSnackbar } from "./style";

const SnackbarAlert = observer(() => {
  const { alertStore } = useStore();
  const { alertOpen, message, serverity, setAlertClose } = alertStore;

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    setAlertClose();
  };

  return (
    <StyledSnackbar
      open={alertOpen}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={serverity}
        color={serverity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </StyledSnackbar>
  );
});

export default SnackbarAlert;
