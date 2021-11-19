import { Button } from "antd";
import { Formik, Form } from "formik";
import React, { FC } from "react";
import { Customer } from "../../../models/Customer/customer.model";
import InputField from "../../../shared/components/InputField";
import "./changePassword.scss";

interface ChangePasswordProps {}

const ChangePassword: FC<ChangePasswordProps> = (props) => {
  const {} = props;

  const formikProps = {
    initialValues: new Customer(),
    onSubmit: (values: Customer) => {
      console.log(values);
    },
  };

  return (
    <div className="change-password">
      <h2>Forgot password</h2>
      <Formik {...formikProps}>
        {() => (
          <Form>
            <InputField
              title="New Password"
              inputType="primary"
              name="password"
              placeholder="Enter new password"
              type="password"
              className="full-width mt-5 field-height"
            />
            <InputField
              title="Confirm password"
              inputType="primary"
              name="confirmPassword"
              placeholder="Enter confirm password"
              type="password"
              className="full-width mt-5 field-height"
            />
            <Button
              type="primary"
              htmlType="submit"
              className="full-width mt-5"
              size="middle"
            >
              Confirm
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;
