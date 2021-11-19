import React, { FC } from "react";
import { Product } from "../../../models/Product/product.model";
import ProductImage from "../../../assets/images/product2.png";
import "./listProducts.scss";
import { Col, Row } from "antd";
import ProductCard from "../ProductCard";

interface ListProductsProps {
  count?: number;
}

const ListProducts: FC<ListProductsProps> = (props) => {
  const products: Product[] = Array(12).fill({
    id: 1,
    name: "Diclofenac Sodium + Misoprostol Arthro.",
    productUrl: ProductImage,
    strips: 10,
    brand: "Teva",
    price: "₹32.00",
    discountPrice: "₹28.00",
    offer: 30,
  });

  const { count = 0 } = props;
  products.splice(0, count);
  return (
    <div className="list-products mt-5">
      <Row gutter={[20, 40]}>
        {products.map((product, index) => (
          <Col lg={4} md={6} sm={8} xs={12}>
            <ProductCard product={product} key={index} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ListProducts;
