import { useState, useEffect } from "react";
import {
  Button,
  Grid,
  TextField,
  FormControl,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material/";
import userService from "../../../services/userService";

export default function AccountIdCreateModal() {
  const [newId, setNewId] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isIdChecked, setIsIdChecked] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    return setModalOpen(localStorage.getItem("accountId")?.slice(0, 1) === "@");
  }, []);

  const handleClose = () => {
    setModalOpen(false);
  };

  const onClickCheckId = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsIdChecked(true);
    const data: any = new FormData(event.currentTarget);

    try {
      console.log(data.get("accountId"));
      const res = await userService.checkAccountId(data.get("accountId"));
      console.log(JSON.stringify(res));
      setNewId(data.get("accountId"));
      setError(false);
      return true;
    } catch (error) {
      setError(true);
      console.log(error);
      console.log("error");
    }
  };

  const onSubmitAccountId = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    try {
      const res = await userService.updateAccountId(newId);
      console.log(JSON.stringify(res));
      localStorage.setItem("accountId", newId);
      handleClose();
      return true;
    } catch (error) {
      console.log(error);
      console.log("error");
    }
  };

  return (
    <div className="account-id-modal">
      <Dialog open={modalOpen} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>ACCOUNT ID</DialogTitle>
        <FormControl onSubmit={onClickCheckId} component="form">
          <DialogContent dividers>
            <div className="dialog-description">
              SNS 계정으로 가입되었습니다. <br />
              MATHRONE 페이지에서 표시될 Account ID를 생성한 후, <br />
              서비스 이용이 가능합니다.
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
                  margin="dense"
                  id="accountId"
                  name="accountId"
                  label="사용할 Account ID"
                  type="text"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item md={4} lg={4}>
                <Button
                  variant="contained"
                  id="id-check-button"
                  type="submit"
                  fullWidth
                >
                  중복확인
                </Button>
              </Grid>
              <Grid
                item
                md={12}
                lg={12}
                className={`
                  ${isIdChecked ? "show" : "non-show"} ${
                  error ? " error-helper" : " correct-helper"
                }
                  `}
              >
                {error ? "중복된 아이디입니다." : "사용가능한 아이디입니다."}
              </Grid>
            </Grid>
          </DialogContent>
        </FormControl>
        <DialogActions>
          <Button
            className="accountId-submit-button"
            type="button"
            onClick={onSubmitAccountId}
          >
            AccountID 생성
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
