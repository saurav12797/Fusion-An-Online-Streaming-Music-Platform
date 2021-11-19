import { Form, Formik } from "formik";
import React, { FC } from "react";
import InputField from "../../../shared/components/InputField";
import { Customer } from "../../../models/Customer/customer.model";
import "./login.scss";
import { Button } from "antd";
import AuthContainer from "../../../store/container/AuthContainer";
import { AuthReducerProps } from "../../../store/reducers/authReducer";
import { DRAWER_DELAY } from "..";
import AuthService from "../../../services/AuthService/auth.service";

interface LoginProps extends AuthReducerProps {}

const Login: FC<LoginProps> = (props) => {
  const { showCreateAccount, showForgotPassword, showLogin } = props;

  /* const { loginUser } = AuthService(); */

  const handleOpenRegister = () => {
    showLogin(false);
    setTimeout(() => {
      showCreateAccount(true);
    }, DRAWER_DELAY);
  };

  const handleOpenForgotPassword = () => {
    showLogin(false);
    setTimeout(() => {
      showForgotPassword(true);
    }, DRAWER_DELAY);
  };

  const formikProps = {
    initialValues: new Customer(),
    onSubmit: (values: Customer) => {
      const customer = Object.assign(new Customer(), values);
      /*  loginUser(customer); */
    },
  };

  return (
    <div className="login">
      <h2>Login into your account</h2>
      <p className="link-create-acc">
        or <span onClick={handleOpenRegister}>Create an account</span>
      </p>
      <Formik {...formikProps}>
        {() => (
          <Form>
            <InputField
              inputType="primary"
              name="email"
              placeholder="Phone Number/ Email"
              type="text"
              className="full-width mt-5 field-height"
            />
            <InputField
              inputType="primary"
              name="password"
              placeholder="Password"
              type="password"
              className="full-width mt-5 field-height"
            />
            <div
              className="text-link mt-1 text-right"
              onClick={handleOpenForgotPassword}
            >
              Forgot password?
            </div>
            <Button
              type="primary"
              htmlType="submit"
              className="full-width mt-5"
              size="middle"
            >
              Continue
            </Button>
            <p className="terms">
              By creating an account,{" "}
              <span>I accept the Terms & Conditions</span>
            </p>
          </Form>
        )}
      </Formik>
      <p className="text-center">Or</p>
      <Button type="dashed" className="full-width">
        Continue as Guest
      </Button>
    </div>
  );
};

export default AuthContainer(Login);
