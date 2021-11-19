import { Button, Col, Divider, Row } from "antd";
import React, { FC } from "react";
import OfferBanner from "../../../assets/images/offers-banner.png";
import { RightOutlined } from "@ant-design/icons";
import "./cartDetails.scss";
import { useHistory } from "react-router";

interface CartDetailsProps {}

const CartDetails: FC<CartDetailsProps> = (props) => {
  const {} = props;

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="cart-details">
      <div className="apply-coupon">
        <div>
          <i className="icon-discount percentage-icon" />
          Apply Coupon
        </div>
        <RightOutlined />
      </div>
      <div className="order-summary mt-5">
        <h2 className="order-title">
          Order summary <span>(3 items)</span>
        </h2>
        <Row justify="space-between" className="mb-4 text-light info">
          <Col span={12}>Subtotal</Col>
          <Col className="text-right" span={12}>
            183.66 INR
          </Col>
        </Row>
        <Row justify="space-between" className="mb-4 text-light info">
          <Col span={12}>GST(18 %)</Col>
          <Col className="text-right" span={12}>
            14.36 INR
          </Col>
        </Row>{" "}
        <Row justify="space-between" className="mb-4 text-light info">
          <Col span={12}>Shipping fee</Col>
          <Col className="text-right" span={12}>
            5.00 INR
          </Col>
        </Row>
        <Divider />
        <Row justify="space-between" className="mb-4 total-cost">
          <Col span={12}>Total Cost</Col>
          <Col className="text-right" span={12}>
            ₹206.02
          </Col>
        </Row>
      </div>
      <div className="total-savings">
        <Row justify="space-between">
          <Col span={12}>Total Savings</Col>
          <Col span={12} className="text-right">
            ₹100.02
          </Col>
        </Row>
        <Row  justify="space-between" className="mt-2 hide-detail">
          <Col span={12}>MRP Discount</Col>
          <Col span={12} className="text-right">
            ₹70.01
          </Col>
          <Col  span={12}>Delivery charge waiver</Col>
          <Col span={12} className="text-right">
            ₹30.01
          </Col>
        </Row>
      </div>

      <div className="offers mt-4">
        <img src={OfferBanner} alt="" />
        <p className="continue-shopping" onClick={goBack}>
          Continue Shopping <RightOutlined />
        </p>
      </div>
      <Row className="wallet-balance">
        <Col className="text-primary text-bold" span={12}>
          <i className="icon-empty-wallet-top text-primary" />
          Wallet balance
        </Col>
        <Col className="text-primary text-right text-bold" span={12}>
          ₹206.02
        </Col>
      </Row>

      <Button type="primary" className="mt-4 full-width" size="large">
        Proceed to payment
      </Button>
      <div className="terms">
        By clicking continue, I accept the{" "}
        <span className="cursor-pointer text-primary">Terms & Conditions</span>
      </div>
    </div>
  );
};

export default CartDetails;
