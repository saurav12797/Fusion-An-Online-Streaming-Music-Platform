import React, { FC } from "react";
import Product1 from "../../../assets/images/product1.png";
import Carousel from "../../../shared/components/AppCarousel";
import { Product } from "../../../models/Product/product.model";
import ProductCard from "../../../shared/components/ProductCard";
import "./topProducts.scss";

const products: Product[] = Array(10).fill({
  id: 1,
  name: "Diclofenac Sodium + Misoprostol Arthro.",
  productUrl: Product1,
  strips: 10,
  brand: "Teva",
  price: "₹32.00",
  discountPrice: "₹28.00",
});

interface TopProductsProps {}

const TopProducts: FC<TopProductsProps> = (props) => {
  const {} = props;

  return (
    <div className="top-products">
      <div className="title">
        <h1>Top Products</h1>
      </div>
      <Carousel
        list={products}
        render={(product: Product) => <ProductCard product={product} />}
      />
    </div>
  );
};

export default TopProducts;
