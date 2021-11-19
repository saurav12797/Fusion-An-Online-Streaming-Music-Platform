import React, { FC } from "react";
import ProductImage from "../../../assets/images/product2.png";
import { Product } from "../../../models/Product/product.model";
import ProductCard from "../../../shared/components/ProductCard";
import "./alternateBrand.scss";

const products: Product[] = Array(4).fill({
  id: 1,
  name: "Diclofenac Sodium + Misoprostol Arthro.",
  productUrl: ProductImage,
  strips: 10,
  brand: "Teva",
  price: "₹32.00",
  discountPrice: "₹28.00",
});

interface AlternateBrandProps {}

const AlternateBrand: FC<AlternateBrandProps> = (props) => {
  const {} = props;

  return (
    <div className="alternate-brand">
      <p className="title">Alternate Brands</p>
      <div className="list-products">
        {products.map((product) => (
          <ProductCard product={product} horizontal />
        ))}
      </div>
    </div>
  );
};

export default AlternateBrand;
