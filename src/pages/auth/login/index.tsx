import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useNotification } from "../../../hooks";
import { loginUser } from "../../../redux/reducers/auth/authAction";
import { Input, RedirectInfo } from "../../../components";
import { BoxWrapper, Box, TitleContainer } from "../style";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { loading, userDetails } = useAppSelector((state) => state.auth);

  const { display } = useNotification();

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleLogin = () => {
    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (userDetails) {
      display({
        message: "Successfully login!",
        severity: "success",
      });
      navigate("/dashboard", { replace: true });
    }
  }, [userDetails, navigate, display]);

  return (
    <>
      <BoxWrapper>
        <Box>
          <TitleContainer>
            <Typography variant="h5">Welcome Back!</Typography>
            <Typography color={(theme) => theme.palette.text.secondary}>
              We are so excited to see you again!
            </Typography>
          </TitleContainer>
          <Input ref={emailInputRef} label="email" />
          <Input ref={passwordInputRef} label="password" type="password" />
          <LoadingButton
            loading={loading}
            variant="contained"
            onClick={handleLogin}
            sx={{ marginTop: "24px", marginBottom: "12px" }}
          >
            Log in
          </LoadingButton>
          {/* <span>Need an account? </span> */}
          <RedirectInfo
            text="Need an account?"
            redirectText="Register"
            redirectHandler={() => navigate("/register")}
          />
        </Box>
      </BoxWrapper>
    </>
  );
};

export default Login;
