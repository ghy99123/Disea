import React from "react";
import { Snackbar, Alert } from "@mui/material";

type Props = {
  open?: boolean;
  message?: string;
  severity?: "error" | "info" | "success" | "warning";
  duration?: number;
  handleClose?: () => void;
};

const Notification = (props: Props) => {
  const {
    open,
    message,
    handleClose,
    duration = 3000,
    severity = "info",
  } = props;

  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
