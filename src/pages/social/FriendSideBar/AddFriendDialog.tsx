import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Input } from "../../../components";
import { validateEmail } from "../../../utils/validate";
import { sendFriendInvitation } from "../../../services/api/social/socialApi";
import { useNotification } from "../../../hooks";

export interface IAddFriendDialogProps {
  isOpen: boolean;
  handleClose: () => void;
}

export default function AddFriendDialog(props: IAddFriendDialogProps) {
  const { isOpen, handleClose } = props;

  const { display } = useNotification();

  const [email, setEmail] = useState<string>("");
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);

  const handleSendInvitation = () => {
    sendFriendInvitation(email)
      .then((res) => {
        console.log("success", res);
        if (res.code === 200) {
          display({
            message: "The invitation has been sent!",
            severity: "success",
          });
          onDialogClose();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (validateEmail(event.target.value)) {
      setBtnDisabled(false);
    }
    setEmail(event.target.value);
  };

  const onDialogClose = () => {
    handleClose();
    setEmail("");
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={onDialogClose}>
        <DialogTitle>
          <Typography sx={{ color: "#000" }}>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter email address of friend which you would like to invite
            </Typography>
            <Input
              label="mail"
              type="text"
              placeholder="Enter mail address"
              value={email}
              onChange={onEmailInputChange}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <LoadingButton
            disabled={btnDisabled}
            fullWidth
            onClick={handleSendInvitation}
            variant="contained"
            sx={{
              margin: "0 15px 10px",
            }}
          >
            Send
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
