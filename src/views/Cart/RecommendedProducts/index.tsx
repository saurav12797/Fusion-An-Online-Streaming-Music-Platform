import React, { FC } from 'react'
import AppCarousel from '../../../shared/components/AppCarousel';
import ProductImage from "../../../assets/images/product2.png";
import { Product } from '../../../models/Product/product.model';
import "./recommendedProducts.scss"
import ProductCard from '../../../shared/components/ProductCard';

const products: Product[] = Array(8).fill({
    id: 1,
    name: "Diclofenac Sodium + Misoprostol Arthro.",
    productUrl: ProductImage,
    strips: 10,
    brand: "Teva",
    price: "₹32.00",
    discountPrice: "₹28.00",
    offer: 30,
  });
  

interface RecommendedProductsProps {

}

const RecommendedProducts: FC<RecommendedProductsProps> = (props) => {
    const { } = props;

    return (
        <div className="recommended-products">
            <h1>Recommended Products</h1>
            <AppCarousel list={products} noArrow render={(product) => <ProductCard product={product} key={product.id}/>}/>
        </div>
    )
}

export default RecommendedProducts;