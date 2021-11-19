import { Col, Row } from "antd";
import React, { FC } from "react";
import ListCart from "./ListCart";
import CartDetails from "./CartDetails";
import ProductImage from "../../assets/images/product2.png";
import { Product } from "../../models/Product/product.model";
import RecommendedProducts from "./RecommendedProducts";
import "./cart.scss";

const products: Product[] = Array(4).fill({
  id: 1,
  name: "Diclofenac Sodium + Misoprostol Arthro.",
  productUrl: ProductImage,
  strips: 10,
  brand: "Teva",
  price: "₹32.00",
  discountPrice: "₹28.00",
  offer: 30,
});

interface CartProps {}

const Cart: FC<CartProps> = (props) => {
  const {} = props;

  return (
    <div className="cart">
      <Row gutter={[20, 0]}>
        <Col span={16}>
          <ListCart products={products} />
        </Col>
        <Col span={8}>
          <CartDetails />
        </Col>
      </Row>
      <RecommendedProducts />
    </div>
  );
};

export default Cart;
