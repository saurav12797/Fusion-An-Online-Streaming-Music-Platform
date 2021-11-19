import { Breadcrumb } from "antd";
import React, { FC } from "react";
import "./breadCrum.scss";

const paths = ["Home", "All Categories", "Covid Essentials"];

interface BreadCrumProps {}

const BreadCrum: FC<BreadCrumProps> = (props) => {
  const {} = props;

  return (
    <Breadcrumb separator=">" className="mb-5">
      {paths.map((path, i) => (
        <Breadcrumb.Item className={(i + 1) === paths.length ? "text-primary" : ""}>{path}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadCrum;
