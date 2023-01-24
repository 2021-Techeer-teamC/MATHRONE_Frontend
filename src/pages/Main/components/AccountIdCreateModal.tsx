import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  IconButton,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
  DialogTitle,
} from "@mui/material/";
import CloseIcon from "@mui/icons-material/Close";

// export default function AccountIdCreateModal() {
//   const [modalOpen, setModalOpen] = useState<boolean>(false);
//   const [idCheck, setIdCheck] = useState<boolean>(false);

//   useEffect(() => {
//     return setModalOpen(localStorage.getItem("accountId")?.slice(0, 1) === "@");
//   }, []);

//   const handleClose = () => {
//     setModalOpen(false);
//   };

//   return (
//     <div>
//       <Dialog open={modalOpen} onClose={handleClose}>
//         <DialogTitle>ACCOUNT ID</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             SNS 계정으로 가입되었습니다. <br />
//             MATHRONE 페이지에서 표시될 Account ID가 필요합니다.
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="사용할 Account ID"
//             type="email"
//             fullWidth
//             variant="standard"
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>취소</Button>
//           <Button onClick={handleClose}>AccountID 제출</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

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
      <Dialog onClose={handleClose} open={modalOpen}>
        <DialogTitle>ACCOUNT ID</DialogTitle>
        <DialogContent dividers>
          SNS 계정으로 가입되었습니다. <br />
          MATHRONE 페이지에서 표시될 Account ID가 필요합니다.
          <Typography gutterBottom>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="사용할 Account ID"
              type="email"
              fullWidth
              variant="standard"
            />
          </Typography>
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
