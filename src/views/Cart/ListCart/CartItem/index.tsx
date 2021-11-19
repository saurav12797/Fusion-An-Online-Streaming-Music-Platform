import { Col, Divider, Row } from "antd";
import { Form, Formik } from "formik";
import React, { FC } from "react";
import { Product } from "../../../../models/Product/product.model";
import InputField from "../../../../shared/components/InputField";
import Tag from "../../../../shared/components/Tag";

import "./cartItem.scss";

interface CartItemProps {
  product: Product;
}

const CartItem: FC<CartItemProps> = (props) => {
  const { product } = props;

  const handleRemoveFromCart = () => {
      
  }

  return (
    <Row className="cart-item" justify="space-between">
      <Col span={18} className="product-content">
        <div className="img-wrapper">
          <img src={product.productUrl} alt="" />
        </div>
        <div className="content">
          <h1>{product.name}</h1>
          <p className="strips">
            <span>{product.brand}</span> {product.strips} Tablet(s) in Strip
          </p>
          <Formik initialValues={{ qty: 1 }} onSubmit={() => {}}>
            {({ setFieldValue, values }) => {
              return (
                <Form>
                  <p>Qty </p>
                  <InputField
                    type="text"
                    inputType="add-item"
                    name="qty"
                    placeholder=""
                    setFieldValue={setFieldValue}
                    currentValue={values.qty}
                    disabled
                    onChangeHandler={(value) => {
                      console.log(value);
                    }}
                  />
                  <i className="icon-delete cursor-pointer" onClick={handleRemoveFromCart}></i>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Col>
      <Col span={6}>
          <h2 className="price">{product.discountPrice}</h2>
          <Tag type="prescription"/>
      </Col>
      <Divider />
    </Row>
  );
};

export default CartItem;
