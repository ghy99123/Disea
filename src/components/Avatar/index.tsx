import { styled } from "@mui/material";

export interface IAvatarProps {
  username: string;
  large?: boolean;
}

const AvatarPreview = styled("div")({
  height: "42px",
  width: "42px",
  background: "#5865f2",
  borderRadius: "42px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: "700",
  marginLeft: "5px",
});

export default function Avatar(props: IAvatarProps) {
  const { username, large } = props;
  return (
    <AvatarPreview style={large ? { height: "80px", width: "80px" } : {}}>
      {username.slice(0, 2).toUpperCase()}
    </AvatarPreview>
  );
}
