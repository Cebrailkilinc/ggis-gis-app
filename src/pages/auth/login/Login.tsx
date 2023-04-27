import React, { FC, useState } from "react";
import { Col, Row, Input, Button, Checkbox, Spin, Layout } from "antd";
import { FcGoogle } from "react-icons/fc";
import loginImg from "../../../assets/loginImg.jpg";
import "./login.css";

const Login: FC = () => {
  const [loginSpin, setLoginSpin] = useState<boolean>(true);
  return (
    <Row className="login-page-container">
      <Col className="login-image" lg={12}>
        <img className="login-img" src={loginImg} alt="" />
      </Col>
      <Col lg={12}>
        <div className="login-container">
          <div className="login-right-area">
            <h1>Login to your Account</h1>
            <div className="login-with-google">
              <FcGoogle />
              <div>Continue with Google</div>
            </div>
            <div className="sign-email-divider">
              <span className="left-divider"></span>
              <div>or Sing in With Email</div>
              <span className="right-divider"></span>
            </div>
            <div className="login-input-area">
              <div className="login-component">
                <span>Email :</span>
                <Input placeholder="Email" />
              </div>
              <div className="login-component">
                <span>Password :</span>
                <Input.Password placeholder="Password" />
                <div className="password-bottom-area">
                  <div className="remember-me">
                    <Checkbox className="checkbox" />
                    <h6>Remember me</h6>
                  </div>
                  <div>
                    <h6 className="forgot-password-text">Forgot Password</h6>
                  </div>
                </div>
              </div>
              <Button type="primary">
                {loginSpin ? <Spin className="login-spin" /> : "Login"}
              </Button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
