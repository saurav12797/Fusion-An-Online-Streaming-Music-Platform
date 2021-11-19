import { Col, Row, Tabs } from "antd";
import React, { FC } from "react";
import ProductDetails from "./Detail";
import Interactions from "./Interaction";
import ExpertAdvice from "./ExpertAdvice";
import AlternateBrand from "../AlternateBrand";
import FAQ from "./FAQ";

import "./productInfo.scss";

const { TabPane } = Tabs;

const tabs = [
  {
    title: "Product Details",
    component: <ProductDetails />,
  },
  {
    title: "Interactions",
    component: <Interactions />,
  },
  {
    title: "Expert Advice",
    component: <ExpertAdvice />,
  },
  {
    title: "Faq",
    component: <FAQ />,
  },
];

interface ProductInfoProps {}

const ProductInfo: FC<ProductInfoProps> = (props) => {
  const {} = props;

  return (
    <div className="product-info">
      <Row gutter={[40, 40]} justify="space-between">
        <Col span={16}  className="info">
          <Tabs className="tabs">
            {tabs.map((tab, index) => (
              <TabPane tab={tab.title} key={index}>
                {tab.component}
              </TabPane>
            ))}
          </Tabs>
        </Col>
        <Col span={8} className="alternate-brands">
          <AlternateBrand />
        </Col>
      </Row>
    </div>
  );
};

export default ProductInfo;
