import { Col, Row } from "antd";
import React, { FC } from "react";
import Banner1 from "../../../assets/images/banner1.png";
import Banner2 from "../../../assets/images/banner2.png";
import "./bannerImage.scss";

const banners = [Banner1, Banner2];

interface BannerImageProps {}

const BannerImage: FC<BannerImageProps> = (props) => {
  const {} = props;

  return (
    <div className="banner-image">
      <Row>
        {banners.map((banner) => (
          <Col span={12}>
            <div className="banner">
              <div className="offer-amount">
                <i className="icon-discount percentage-icon" />
                30% OFF
              </div>
              <img src={banner} alt="" />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BannerImage;
