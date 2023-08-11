import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { registerUser } from "../../../redux/reducers/auth/authAction";
import { jumpToLogin } from "../../../redux/reducers/auth/authSlice";
import { Input, RedirectInfo } from "../../../components";
import { useNotification } from "../../../hooks/useNotification";
import { BoxWrapper, Box, TitleContainer } from "../style";

export default function Register() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { loading, success } = useAppSelector((state) => state.auth);

  const { display } = useNotification();

  const emailRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleRegister = () => {
    const email = emailRef.current?.value;
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    const data = {
      email,
      username,
      password,
    };

    dispatch(registerUser(data));
  };

  useEffect(() => {
    if (success) {
      display({
        message: "Successfully register! Please login",
        severity: "success",
      });
      dispatch(jumpToLogin());
      navigate("/");
    }
  }, [dispatch, navigate, success, display]);

  return (
    <>
      <BoxWrapper>
        <Box>
          <TitleContainer>
            <Typography variant="h5">Create an account</Typography>
          </TitleContainer>
          <Input ref={emailRef} label="email" />
          <Input ref={usernameRef} label="username" />
          <Input ref={passwordRef} label="password" type="password" />
          <LoadingButton
            loading={loading}
            variant="contained"
            onClick={handleRegister}
            sx={{ marginTop: "24px", marginBottom: "12px" }}
          >
            Continue
          </LoadingButton>
          {/* <span>Need an account? </span> */}
          <RedirectInfo
            redirectText="Already have an account?"
            redirectHandler={() => navigate("/")}
          />
        </Box>
      </BoxWrapper>
    </>
  );
}
