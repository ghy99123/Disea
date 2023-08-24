import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { logout } from "../../../utils/auth";
import { useAppSelector } from "../../../redux/hooks";
import { setAudioOnly } from "../../../redux/reducers/room/roomSlice";
import { useDispatch } from "react-redux";

export default function BasicMenu() {
  const dispatch = useDispatch();
  const { audioOnly } = useAppSelector((state) => state.room);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAudioOnlyClick = () => {
    dispatch(setAudioOnly(!audioOnly));
  };

  return (
    <div>
      <IconButton onClick={handleMenuOpen} style={{ color: "white" }}>
        <MoreVert />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={logout} style={{ color: "black" }}>
          Logout
        </MenuItem>
        <MenuItem onClick={handleAudioOnlyClick} style={{ color: "black" }}>
          {audioOnly ? "Audio Only Enabled" : "Audio Only Disabled"}
        </MenuItem>
      </Menu>
    </div>
  );
}
