import React, { FC } from "react";
import { Product } from "../../../models/Product/product.model";
import { SmileOutlined } from "@ant-design/icons";
import OfferIcon from "../../../assets/icons/mr-medicine-offer.svg";
import "./productCard.scss";
import { generatePath, useHistory } from "react-router";
import { appRoutes } from "../../../routes/routeConstants/appRoutes";

interface ProductCardProps {
  product: Product;
  horizontal?: boolean;
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const { product, horizontal } = props;

  const history = useHistory();

  const handleProductDetail = () => {
    console.log(product.id);
    
    history.push(generatePath(appRoutes.PRODUCT_DETAILS, {
      id: product?.id ?? ""
    }))
  }

  return (
    <div className={`product-card ${horizontal && "product-horizontal"}`} >
      <div className="img__wrapper" onClick={handleProductDetail}>
        {product.offer && (
          <div className="offer-percentage">
            {" "}
            <i className="icon-discount" /> {product.offer}% OFF
          </div>
        )}
        <img src={product?.productUrl} alt="" />
        <div className="add-to-card">
          <span>
            <i className="icon-ic_shopping_cart-top" />
            &nbsp;Add To Cart
          </span>
        </div>
      </div>
      <div className="product-content mt-2">
        <p className="name">{product?.name}</p>
        <p className="mt-1 detail">
          <span className="strips">Strip of {product.strips} tablets</span>
          <SmileOutlined className="dot" />
          <span className="brand">{product.brand}</span>
        </p>
        <p className={`price mt-1`}>
          <span
            className={`${product.discountPrice && "text-line-through"} mr-2`}
          >
            {product.price}
          </span>
          <span className="discount">{product.discountPrice}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
