import { Carousel, Button } from "antd";
import React, { FC } from "react";
import BannerImage from "../../../assets/images/home-banner.png";
import {
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import "./bannerCarousel.scss";
import { CarouselRef } from "antd/lib/carousel";

interface BannerCarouselProps {}

const bannerViews = [
  <div className="banner-container">
    <img src={BannerImage} alt="" />
    <div className="content">
      <p>Limited Offer | Min order Rs.100</p>
      <h1>First medicine order free</h1>
      <Button className="mt-5">
        Shop Now <ArrowRightOutlined />
      </Button>
    </div>
  </div>,
  <div className="banner-container">
    <img src={BannerImage} alt="" />
    <div className="content">
      <p>Limited Offer | Min order Rs.100</p>
      <h1>First medicine order free</h1>
      <Button className="mt-5">
        Shop Now <ArrowRightOutlined />
      </Button>
    </div>
  </div>,
];

const BannerCarousel: FC<BannerCarouselProps> = (props) => {
  const {} = props;
  let carouselRef: CarouselRef | null = null;

  return (
    <div className="banner-carousel">
      <Carousel
        autoplay
        // draggable
        ref={(ref) => {
          carouselRef = ref;
        }}
      >
        {bannerViews.map((banner) => banner)}
      </Carousel>
      <LeftOutlined
        className="left-arrow"
        onClick={() => carouselRef?.next()}
      />
      <RightOutlined
        className="right-arrow"
        onClick={() => carouselRef?.next()}
      />
    </div>
  );
};

export default BannerCarousel;
