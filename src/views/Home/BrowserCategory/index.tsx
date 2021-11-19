import React, { FC, useEffect } from "react";
import { Tabs } from "antd";
import ListProducts from "../../../shared/components/ListProducts";
import "./browserCategory.scss";
import MetaService from "../../../services/metaService/meta.service";

const { TabPane } = Tabs;

const tabs = [
  {
    title: "Covid 19",
    icon: "icon-virus",
    component: <ListProducts count={2} />,
  },
  {
    title: "Diabetes",
    icon: "icon-glucose-meter--1",
    component: <ListProducts count={5} />,
  },
  {
    title: "Medicines",
    icon: "icon-PHARMACY",
    component: <ListProducts count={10} />,
  },
  {
    title: "Homeopathy",
    icon: "icon-homeopathy",
    component: <ListProducts count={1} />,
  },
  {
    title: "Supplements",
    icon: "icon-supplement-1",
    component: <ListProducts count={8} />,
  },
];

interface BrowserCategoryProps {}

const BrowserCategory: FC<BrowserCategoryProps> = (props) => {
  const {} = props;

  return (
    <div className="browser-category">
      <h1 className="text-center">Browse medicines & products by category</h1>
      <Tabs>
        {tabs.map(({ title, icon, component }, index) => (
          <TabPane
            tab={
              <span className="tab-title">
                <i className={icon} />
                {title}
              </span>
            }
            key={index}
          >
            {component}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default BrowserCategory;
