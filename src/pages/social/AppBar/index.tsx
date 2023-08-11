import * as React from "react";
import { AppBarContainer } from "./style";
import DropDownMenu from "./DropdownMenu";

export interface IAppBarProps {}

export default function AppBar(props: IAppBarProps) {
  return (
    <AppBarContainer>
      <DropDownMenu />
    </AppBarContainer>
  );
}
