import { Button, Col, Divider, Row } from "antd";
import { Formik, Form, FormikValues } from "formik";
import React, { FC } from "react";
import { validation } from "./validation";
import InputField from "../InputField";
import AppStore from "../../../assets/icons/appstore.png";
import PlayStore from "../../../assets/icons/playstore.png";
import facebook from  "../../../assets/icons/Facebook.svg";
import instagram from  "../../../assets/icons/instagram.svg";
import quora from  "../../../assets/icons/quora.svg";
import youtube from  "../../../assets/icons/youtube.svg";
import medium from  "../../../assets/icons/medium.svg";
import twitter from  "../../../assets/icons/twitter.svg";
import "./appFooter.scss";

const links = [
  {
    title: "Home",
  },
  {
    title: "About Us",
  },
  {
    title: "FAQ",
  },
  {
    title: "Orders",
  },
  {
    title: "Privacy Policy",
  },
  {
    title: "Privacy Policy",
  },
  {
    title: "Shopping Cart",
  },
  {
    title: "Refund policy",
  },
  {
    title: "Health Articles",
  },
  {
    title: "Cart",
  },
  {
    title: "Term and Conditions",
  },
  {
    title: "Cancellation & Returns",
  },
  {
    title: "Contact Us",
  },
  {
    title: "Offers / Coupons",
  },
];

const socialMedia = [
 facebook,
 twitter,
 youtube,
 instagram,
 medium,
 quora,
];

interface AppFooterProps {}

const AppFooter: FC<AppFooterProps> = (props) => {
  const {} = props;

  const handleSubmit = (values: FormikValues) => {};

  return (
    <div className="app-footer">
      <i className="icon-Group-43205"></i>
      <Row>
        <Col span={12}>
          <Row gutter={[0, 30]}>
            {links.map(({ title }) => (
              <Col span={8} className="link">
                {title}
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={12}>
          <Row>
            <Col span={12}>
              <div className="news-letter__subscription">
                <label htmlFor="">Subscribe to our Newsletter</label>
                <Formik
                  initialValues={{ mobileNumber: "" }}
                  validationSchema={validation}
                  onSubmit={handleSubmit}
                >
                  {({ isValid, dirty }) => (
                    <Form className="form">
                      <InputField
                        type="text"
                        name="mobileNumber"
                        placeholder="Your Email"
                        noError
                        size="large"
                      />
                      <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        className="ml-3"
                        //   disabled={!isValid || !dirty}
                      >
                        Subscribe
                      </Button>
                    </Form>
                  )}
                </Formik>
                <label htmlFor="">Follow Us</label>
                <div className="social-media">
                  {socialMedia.map((icon) => (
                    <img src={icon} />
                  ))}
                </div>
              </div>
            </Col>
            <Col span={12} className="download-app">
                <label htmlFor="">Download App</label>
                <img src={PlayStore} alt="" />
                <img src={AppStore} alt="" />
            </Col>
          </Row>
        </Col>
      </Row>

      <Divider />
      <p className="copy-rights">Copyright© 2021 Mr Medicine Ltd.</p>
    </div>
  );
};

export default AppFooter;
