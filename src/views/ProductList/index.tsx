import { Col, Row, Select } from "antd";
import React, { FC } from "react";
import ListProducts from "../../shared/components/ListProducts";
import Filter from "./Filter";
import BreadCrum from "../../shared/components/BreadCrum";
import "./productList.scss";

const { Option } = Select;

interface ProductListProps {}

const ProductList: FC<ProductListProps> = (props) => {
  const {} = props;

  const handleChange = () => {};

  return (
    <div className="product-list">
      <Row>
        <Col span={4}>
          <Filter />
        </Col>
        <Col span={20}>
          <BreadCrum />
          <div className="title">
            <h1>Covid Essentials</h1>
            <div className="sort">
              Sort by
              <Select style={{ width: 160 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
              </Select>
            </div>
          </div>
          <ListProducts />
        </Col>
      </Row>
    </div>
  );
};

export default ProductList;
