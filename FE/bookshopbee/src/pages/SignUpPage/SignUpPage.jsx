import React from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import InputForm from "../../component/InputForm/InputForm";
import ButtonComponent from "../../component/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import imageLogo from "../../assets/images/theme-login.jpg";
import { useState } from "react";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [isShowPassword, setShowPassword] = useState(false);
  const [isShowConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };

  const handleOnchangePassword = (value) => {
    setPassword(value);
  };

  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value);
  };

  const navigate = useNavigate();
  const handleNavigateSignIn = () => {
    navigate("/Sign-In");
  };

  const handleSignUp = () => {
    console.log("sign up", email, password, confirmPassword);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ccc",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          background: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>What's up</h1>
          <p>Login or Sign up</p>
          <InputForm
            style={{ marginBottom: "13px" }}
            placeholder="duy@gmail"
            value={email}
            onChange={handleOnchangeEmail}
          />

          <div style={{ position: "relative" }}>
            <span
              onClick={() => setShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
              }}
            >
              {isShowPassword ? (
                <EyeFilled></EyeFilled>
              ) : (
                <EyeInvisibleFilled></EyeInvisibleFilled>
              )}
            </span>

            <InputForm
              placeholder="password"
              style={{ marginBottom: "10px" }}
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChange={handleOnchangePassword}
            ></InputForm>
          </div>
          <div style={{ position: "relative" }}>
            <span
              onClick={() => setShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
              }}
            >
              {isShowConfirmPassword ? (
                <EyeFilled></EyeFilled>
              ) : (
                <EyeInvisibleFilled></EyeInvisibleFilled>
              )}
            </span>

            <InputForm
              placeholder="confirm password"
              style={{ marginBottom: "10px" }}
              type={isShowConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleOnchangeConfirmPassword}
            ></InputForm>
          </div>
          <ButtonComponent
            disabled={
              !email.length || !password.length || !confirmPassword.length
            }
            onClick={handleSignUp}
            size={40}
            styleButton={{
              background: "rgb(225,57,69)",
              height: "48px",
              width: "100%",
              borderRadius: "5px",
              margin: "26px 0 10px",
            }}
            textButton={"Sign Up"}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>
          <p>
            You have an account ?
            <WrapperTextLight onClick={handleNavigateSignIn}>
              Sign In
            </WrapperTextLight>
          </p>
        </WrapperContainerLeft>

        <WrapperContainerRight>
          <Image
            src={imageLogo}
            preview={false}
            alt="image-logo"
            width="200px"
            height="200px"
          ></Image>
          <h4>Mua sắm tại BookShopBee</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignUpPage;
