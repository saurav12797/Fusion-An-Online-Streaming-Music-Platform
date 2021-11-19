import { Button, Col, Row } from "antd";
import { Form, Formik, FormikValues } from "formik";
import React, { FC } from "react";
import { validation } from "./validation";
import InputField from "../../../shared/components/InputField";
import "./whyToChose.scss";

const features = [
  {
    title: "Home Delivery",
    description: "Delivery at your door steps",
    icon: "icon-delivery-cart",
  },
  {
    title: "Money Return",
    description: "30 Days money return",
    icon: "icon-moneys",
  },
  {
    title: "Safe Payment",
    description: "Protect online payment",
    icon: "icon-safe-payment",
  },
  {
    title: "Talk To Us",
    description: "10AM - 7PM (1800 123-761761)",
    icon: "icon-talk-to-us",
  },
];

interface WhyToChoseProps {}

const WhyToChose: FC<WhyToChoseProps> = (props) => {
  const {} = props;

  const handleSubmit = (values: FormikValues) => {};

  return (
    <div>
      <div className="why-to-chose">
        <h1 className="text-center">Why Choose us?</h1>
        <Row className="features">
          {features.map((feature, index) => (
            <Col span={6} className="feature">
              <div className="img-wrapper">
                <i className={feature.icon} />
              </div>
              <div className="content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className="subscription-wrapper">
        <Formik
          initialValues={{ mobileNumber: "" }}
          validationSchema={validation}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty }) => (
            <Form className="subscription">
              <p>Get the link to download App</p>
              <InputField
                type="text"
                name="mobileNumber"
                placeholder="Enter your number"
                noError
                inputType="primary"
                size="large"
              />
              <Button type="primary" htmlType="submit" 
              size="large"
              className="ml-3" 
            //   disabled={!isValid || !dirty}
              >
                Send Link
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default WhyToChose;
