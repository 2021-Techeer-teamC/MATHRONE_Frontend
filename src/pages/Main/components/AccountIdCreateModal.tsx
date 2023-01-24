import { useState, useEffect } from "react";
import {
  Button,
  Grid,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material/";

export default function AccountIdCreateModal() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [idCheck, setIdCheck] = useState<boolean>(false);

  useEffect(() => {
    return setModalOpen(localStorage.getItem("accountId")?.slice(0, 1) === "@");
  }, []);

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="account-id-modal">
      <Dialog open={modalOpen} fullWidth maxWidth="md">
        <DialogTitle>ACCOUNT ID</DialogTitle>
        <DialogContent dividers>
          <div className="dialog-description">
            SNS 계정으로 가입되었습니다. <br />
            MATHRONE 페이지에서 표시될 Account ID를 생성한 후, 서비스 이용이
            가능합니다.
          </div>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item md={8} lg={8}>
              <TextField
                autoFocus
                error={true}
                margin="dense"
                id="name"
                label="사용할 Account ID"
                type="email"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item md={4} lg={4}>
              <Button variant="contained" id="id-check-button">
                중복확인
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button className="accountId-submit-button" onClick={handleClose}>
            AccountID 제출
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
