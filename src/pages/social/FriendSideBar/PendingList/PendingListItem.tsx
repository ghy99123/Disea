import React, { useState } from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { Check, Clear } from "@mui/icons-material";
import { Avatar } from "../../../../components";

export interface IPendingListItem {
  username: string;
  id: string;
  email: string;
  acceptFriendInvitation: (friend: { id: string }) => void;
  rejectFriendInvitation: (friend: { id: string }) => void;
}

export default function PendingListItem(props: IPendingListItem) {
  const {
    id,
    username,
    email,
    acceptFriendInvitation,
    rejectFriendInvitation,
  } = props;

  const [btnDisabled, setBtnDisabled] = useState<boolean>(false);

  const handleAcceptInvitation = () => {
    acceptFriendInvitation({ id });
    setBtnDisabled(true);
  };

  const handleRejectInvitation = () => {
    rejectFriendInvitation({ id });
    setBtnDisabled(true);
  };

  return (
    <Tooltip title={email}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{ marginLeft: "7px", fontWeight: 700, flexGrow: 1 }}
            variant="subtitle1"
          >
            {username}
          </Typography>
          <Box>
            <IconButton
              sx={{ color: "white" }}
              disabled={btnDisabled}
              onClick={handleAcceptInvitation}
            >
              <Check />
            </IconButton>
            <IconButton
              sx={{ color: "white" }}
              disabled={btnDisabled}
              onClick={handleRejectInvitation}
            >
              <Clear />
            </IconButton>
          </Box>
        </Box>
      </div>
    </Tooltip>
  );
}
