import React from "react";
import OurServices from "./OurServices";
import BannerImage from "./BannerImage";
import FeatureBrands from "./FeatureBrands";
import BrowserCategory from "./BrowserCategory";
import Banner from "../../assets/images/banner.png";
import "./home.scss";
import TopProducts from "./TopProducts";
import BannerCarousel from "./BannerCarousel";

const Home = () => {

  return (
    <div>
      <BannerCarousel />
      <OurServices />
      <BannerImage />
      <FeatureBrands />
      <div className="banner-screen__wrapper">
        <img src={Banner} alt="" />
      </div>
      <TopProducts />
      <BrowserCategory />
    </div>
  );
};

export default Home;
