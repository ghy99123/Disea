import { Typography } from "@mui/material";
import { RedirectText, MainText } from "./style";

export interface IRedirectInfoProps {
  /** info text */
  text?: string;

  /** redirect text */
  redirectText: string;

  /** callback function when clicking redirect text */
  redirectHandler: () => void;
}

export default function RedirectInfo(props: IRedirectInfoProps) {
  const { text, redirectText, redirectHandler } = props;

  return (
    <Typography variant="subtitle2">
      {text && <MainText>{text}</MainText>}
      <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
    </Typography>
  );
}
