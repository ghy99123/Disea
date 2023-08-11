import * as React from "react";
import GroupIcon from "@mui/icons-material/Groups";
import { MainContainer, MainPageButton } from "./style";

export interface ISideBarProps {}

export default function SideBar(props: ISideBarProps) {
  return (
    <MainContainer>
      <MainPageButton variant="contained">
        <GroupIcon />
      </MainPageButton>
    </MainContainer>
  );
}
