import React, { FC, useRef } from "react";
import Feature1 from "../../../assets/images/feature1.png";
import Feature2 from "../../../assets/images/feature2.png";
import Feature4 from "../../../assets/images/feature4.png";
import Carousel from "../../../shared/components/AppCarousel";
import "./featureBrands.scss";

const features = [
  Feature1,
  Feature2,
  Feature4,
  Feature1,
  Feature2,
  Feature4,
  Feature1,
  Feature2,
  Feature4,
  Feature1,
  Feature2,
  Feature4,
];

interface FeatureBrandsProps {}

const FeatureBrands: FC<FeatureBrandsProps> = (props) => {
  const {} = props;

  return (
    <div className="feature-brands">
      <h1>Featured brands</h1>
      <Carousel list={features} render={(img: any) => <img src={img} />} />
    </div>
  );
};

export default FeatureBrands;
