import React, { FC, Fragment } from "react";
import { Tag as AntTag } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import StockIcon from "../../../assets/icons/stock.svg";
import "./tag.scss";

type Type = "in-stock" | "prescription" | "offer";

interface TagProps {
  type: Type;
  className?: string;
  offer?: string | number;
}

const Tag: FC<TagProps> = (props) => {
  const { type, offer, ...rest } = props;

  const InStock = (
    <AntTag {...rest} color="success">
      <img src={StockIcon} alt="" /> In stock
    </AntTag>
  );

  const Prescription = (
    <AntTag {...rest} color="red">
      <i className="icon-prescription-2" /> Prescription Requried
    </AntTag>
  );

  const Offer = (
    <AntTag {...rest} color="yellow">
      <i className="icon-discount" /> {offer}% OFF
    </AntTag>
  );
  if (type === "in-stock") {
    return InStock;
  }
  if(type === "offer") {
      return Offer;
  }

  return Prescription;
};

export default Tag;
