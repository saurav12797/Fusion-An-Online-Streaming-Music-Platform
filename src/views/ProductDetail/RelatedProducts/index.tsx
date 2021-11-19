import React, { FC } from "react";
import Product1 from "../../../assets/images/product1.png";
import { Product } from "../../../models/Product/product.model";
import AppCarousel from "../../../shared/components/AppCarousel";
import ProductCard from "../../../shared/components/ProductCard";
import "./relatedProducts.scss";

const products: Product[] = Array(10).fill({
  id: 1,
  name: "Diclofenac Sodium + Misoprostol Arthro.",
  productUrl: Product1,
  strips: 10,
  brand: "Teva",
  price: "₹32.00",
  discountPrice: "₹28.00",
});

interface RelatedProductsProps {
}

const RelatedProducts: FC<RelatedProductsProps> = (props) => {
  const {  } = props;

  return (
    <div className="related-products">
      <h1>Related Products</h1>
      <AppCarousel
        list={products}
        noArrow
        render={(product: Product) => <ProductCard product={product} />}
      />
    </div>
  );
};

export default RelatedProducts;
