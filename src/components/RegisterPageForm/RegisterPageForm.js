import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Input, Button } from "@material-ui/core";
import { Form } from "antd";
import { registerUser } from "../../api/authApi";

import { validateEmail } from "../../helpingFunctions";

import "./RegisterPageForm.css";
import "../AuthStyles.css";
import useButtonStyle from "../Header/ButtonStyle";

const validStyleObj = { backgroundColor: "var(--valid-green-color)" };
const invalidStyleObj = { backgroundColor: "var(--invalid-red-color)" };

function RegisterPageForm() {
  const [firstName, setFirstName] = useState("");
  const [firstNameStyle, setFirstNameStyle] = useState({});

  const [lastName, setLastName] = useState("");
  const [lastNameStyle, seLastNameStyle] = useState({});

  const [email, setEmail] = useState("");
  const [emailStyle, setEmailStyle] = useState({});

  const [password, setPassword] = useState("");
  const [passwordStyle, setPasswordStyle] = useState({});

  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [passwordRepeatStyle, setPasswordRepeatStyle] = useState({});

  const [disabled, setDisabled] = useState(false);
  const history = useHistory();

  const firstNameChange = (e) => {
    setFirstName(e.target.value);
    e.target.value !== ""
      ? setFirstNameStyle(validStyleObj)
      : setFirstNameStyle(invalidStyleObj);
  };

  const lastNameChange = (e) => {
    setLastName(e.target.value);
    e.target.value !== ""
      ? seLastNameStyle(validStyleObj)
      : seLastNameStyle(invalidStyleObj);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value)
      ? setEmailStyle(validStyleObj)
      : setEmailStyle(invalidStyleObj);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
    e.target.value !== ""
      ? setPasswordStyle(validStyleObj)
      : setPasswordStyle(invalidStyleObj);
  };

  const passwordRepeatChange = (e) => {
    setPasswordRepeat(e.target.value);
    e.target.value === password
      ? setPasswordRepeatStyle(validStyleObj)
      : setPasswordRepeatStyle(invalidStyleObj);
  };

  useEffect(() => {
    if (
      firstNameStyle === validStyleObj &&
      lastNameStyle === validStyleObj &&
      emailStyle === validStyleObj &&
      passwordStyle === validStyleObj &&
      passwordRepeatStyle === validStyleObj
    )
      setDisabled(false);
    else setDisabled(true);
  }, [
    firstNameStyle,
    lastNameStyle,
    emailStyle,
    passwordStyle,
    passwordRepeatStyle,
    disabled,
  ]);

  const register = () => {
    registerUser(firstName, lastName, email, password)
      .then(() => {
        history.push("/");
        toast.success("Registered in successfully");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const classes = useButtonStyle();

  return (
    <div className="auth-page-form">
      <Form>
        <div>
          <Form.Item>
            <div className="auth-page-input">
              <div className="auth-page-single-input-label">
                {firstNameStyle === invalidStyleObj
                  ? "First name cannot be empty!"
                  : "First name"}
              </div>
              <div className="auth-page-single-input-input">
                <Input
                  placeholder="e.g. John"
                  type="text"
                  value={firstName}
                  onChange={firstNameChange}
                  className="auth-form-input"
                  style={firstNameStyle}
                />
              </div>
            </div>
          </Form.Item>
          <Form.Item>
            <div className="auth-page-input">
              <div className="auth-page-single-input-label">
                {lastNameStyle === invalidStyleObj
                  ? "Last name cannot be empty!"
                  : "Last name"}
              </div>
              <div className="auth-page-single-input-input">
                <Input
                  placeholder="e.g. Doe"
                  type="text"
                  value={lastName}
                  onChange={lastNameChange}
                  className="auth-form-input"
                  style={lastNameStyle}
                />
              </div>
            </div>
          </Form.Item>
        </div>
        <Form.Item>
          <div className="auth-page-input">
            <div className="auth-page-single-input-label">
              {emailStyle === invalidStyleObj ? "Invalid Email!" : "Email"}
            </div>
            <div className="auth-page-single-input-input">
              <Input
                placeholder="e.g. john.doe@gmail.com"
                type="email"
                value={email}
                onChange={emailChange}
                className="auth-form-input"
                style={emailStyle}
              />
            </div>
          </div>
        </Form.Item>
        <Form.Item>
          <div className="auth-page-input">
            <div className="auth-page-single-input-label">
              {passwordStyle === invalidStyleObj
                ? "Password cannot be empty"
                : "Password"}
            </div>
            <div className="auth-page-single-input-input">
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={passwordChange}
                className="auth-form-input"
                style={passwordStyle}
              />
            </div>
          </div>
        </Form.Item>
        <Form.Item>
          <div className="auth-page-input">
            <div className="auth-page-single-input-label">
              {passwordRepeatStyle === invalidStyleObj
                ? "Passwords must match"
                : "Repeat password"}
            </div>
            <div className="auth-page-single-input-input">
              <Input
                placeholder="Repeat password"
                type="password"
                value={passwordRepeat}
                onChange={passwordRepeatChange}
                className="auth-form-input"
                style={passwordRepeatStyle}
              />
            </div>
          </div>
        </Form.Item>
        <Form.Item>
          <div className="auth-page-button">
            <Button
              className={classes.button}
              onClick={register}
              disabled={disabled}
            >
              REGISTER
            </Button>
            <Link to="/login">Already registered? Login now.</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}

export default RegisterPageForm;
