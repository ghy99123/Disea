import { Typography } from "@mui/material";
import React, { FC } from "react";

export interface IAppProps {
  name?: string;
}

const ChosenOptionLabel: FC<IAppProps> = (props: IAppProps) => {
  const { name } = props;
  return (
    <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
      {name ?? ""}
    </Typography>
  );
};

export default ChosenOptionLabel;
