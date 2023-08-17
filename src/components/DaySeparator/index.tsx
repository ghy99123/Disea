import * as React from "react";
import { Separator, DateLabel } from "./style";

export interface IDaySeparatorProps {
  date: string;
}

export default function DaySeparator({ date }: IDaySeparatorProps) {
  return (
    <Separator>
      <DateLabel>{date}</DateLabel>
    </Separator>
  );
}
