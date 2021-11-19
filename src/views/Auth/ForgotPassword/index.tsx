import { Button } from "antd";
import { Formik, Form } from "formik";
import React, { FC, useState } from "react";
import { Customer } from "../../../models/Customer/customer.model";
import InputField from "../../../shared/components/InputField";
import "./forgotPassword.scss";

interface ForgotPasswordProps {}

const ForgotPassword: FC<ForgotPasswordProps> = (props) => {
  const {} = props;

  const [sendOtp, setSendOtp] = useState(false);

  const formikProps = {
    initialValues: new Customer(),
    onSubmit: (values: Customer) => {
      if (sendOtp) {
      } else {
        setSendOtp(true);
      }
    },
  };

  return (
    <div className="forgot-password">
      <h2>Forgot password</h2>
      <p className="link-create-acc">or verify your account</p>
      <Formik {...formikProps}>
        {() => (
          <Form>
            <InputField
              inputType="primary"
              name="mobileNumber"
              placeholder="Phone Number"
              type="text"
              className="full-width mt-5 field-height"
            />
            {sendOtp && (
              <InputField
                inputType="primary"
                name="password"
                placeholder="One time password"
                type="number"
                maxlength="4"
                className="full-width mt-5 field-height"
              />
            )}
            <Button
              type="primary"
              htmlType="submit"
              className="full-width mt-5"
              size="middle"
            >
              {sendOtp ? "Verify" : "Send OTP"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPassword;
