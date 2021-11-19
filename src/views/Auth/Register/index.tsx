import { Button } from "antd";
import Form from "antd/lib/form/Form";
import { Formik } from "formik";
import React, { FC } from "react";
import { DRAWER_DELAY } from "..";
import { Customer } from "../../../models/Customer/customer.model";
import InputField from "../../../shared/components/InputField";
import AuthContainer from "../../../store/container/AuthContainer";
import { AuthReducerProps } from "../../../store/reducers/authReducer";
import "./register.scss";

interface RegisterProps extends AuthReducerProps{}

const Register: FC<RegisterProps> = (props) => {
  const { showCreateAccount, showLogin } = props;

  const formikProps = {
    initialValues: new Customer(),
    onSubmit: () => {},
  };

  const handleOpenLogin  = () => {
    showCreateAccount(false);
    setTimeout(() => {
        showLogin(true);
    }, DRAWER_DELAY);
  }

  return (
    <div className="register">
      <h2>Create your account</h2>
      <p className="link-create-acc">
        or <span onClick={handleOpenLogin}>login into your account</span>
      </p>
      <Formik {...formikProps}>
        {() => (
          <Form>
            <InputField
              inputType="primary"
              name="fullName"
              placeholder="Full name"
              type="text"
              className="full-width mt-5 field-height"
            />
            <InputField
              inputType="primary"
              name="email"
              placeholder="Email"
              type="text"
              className="full-width mt-5 field-height"
            />
            <InputField
              inputType="primary"
              name="mobileNumber"
              placeholder="Phone Number"
              addonBefore="+91"
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

export default AuthContainer(Register);
