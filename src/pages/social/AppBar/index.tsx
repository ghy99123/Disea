import * as React from "react";
import { AppBarContainer } from "./style";
import DropDownMenu from "./DropdownMenu";
import ChosenOptionLabel from "./ChosenOptionLabel";
import { useAppSelector } from "../../../redux/hooks";

export interface IAppBarProps {}

export default function AppBar(props: IAppBarProps) {
  const { chatDetails } = useAppSelector((state) => state.chat);

  return (
    <AppBarContainer>
      <ChosenOptionLabel name={chatDetails?.name} />
      <DropDownMenu />
    </AppBarContainer>
  );
}
