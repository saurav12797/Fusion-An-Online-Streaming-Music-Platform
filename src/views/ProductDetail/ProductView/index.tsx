import { Button, Col, Row } from "antd";
import { Formik, Form, FormikValues } from "formik";
import React, { FC } from "react";
import Tag from "../../../shared/components/Tag";
import InputField from "../../../shared/components/InputField";
import ImageView from "./ImageView";
import "./productView.scss";

interface ProductViewProps {}

const ProductView: FC<ProductViewProps> = (props) => {
  const {} = props;

  const handleSubmit = (values: FormikValues) => {};

  return (
    <Row className="product-view">
      <Col span={10}>
        <ImageView />
      </Col>
      <Col span={14}>
        <h1>
          Paracip 500mg Tablet <Tag type="in-stock" className="ml-2" />{" "}
          <Tag type="prescription" />
        </h1>
        <p className="brand mb-2">
          <span>
            By <span className="link">CIPLA GX</span>{" "}
          </span>{" "}
          10 Tablet(s) in Strip
        </p>
        <p className="salt mb-4">
          <span>Salt Composition:</span>Paracetomal
        </p>
        <p className="price mb-2">
          <span className="nrml-price">₹ 32.00</span>₹ 25.60{" "}
          <Tag type="offer" offer="30" />
        </p>
        <p className="tax mb-3">Inclusive of all taxes</p>

        <div className="product-controller">
          <label htmlFor="">Strips</label>
          <Formik initialValues={{ qty: 1 }} onSubmit={handleSubmit}>
            {({ setFieldValue, values }) => (
              <Form className="ml-3">
                <InputField
                  inputType="add-item"
                  name="qty"
                  placeholder=""
                  type="text"
                  setFieldValue={setFieldValue}
                  currentValue={values.qty}
                />
              </Form>
            )}
          </Formik>
          <Button type="primary" className="ml-3">
            <i className="icon-ic_shopping_cart-top mr-3" />
            Add To Cart
          </Button>
        </div>
        <Row className="pickup">
          <Col span={1}>
            <i className="icon-home-delivery" />
          </Col>
          <Col span={23}>
            <p className="estimated">
              Estimated delivery to 600 091 <span>Change</span>
            </p>
            <p>May 14, 2021</p>
          </Col>
        </Row>
        <Row className="policy">
          <Col span={3}>
            <i className="icon-Layer--1">
              <i className="path1"></i>
              <i className="path2"></i>
              <i className="path3"></i>
            </i>
            <p>No Return Policy</p>
          </Col>
          <Col span={3}>
            <i className="icon-storage" />
            <p>Cold Storage Enabled</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ProductView;
