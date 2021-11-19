import { Row } from 'antd';
import React, { FC } from 'react'
import BreadCrum  from '../../shared/components/BreadCrum';
import ProductView from "./ProductView";
import RelatedProducts from "./RelatedProducts";
import ProductInfo from "./ProductInfo";
import "./productDetail.scss"
import ListProducts from '../../shared/components/ListProducts';

interface ProductDetailProps {

}

const ProductDetail: FC<ProductDetailProps> = (props) => {
    const { } = props;

    return (
        <div className="product-detail">
            <BreadCrum />
            <ProductView />
            <ProductInfo />
            <RelatedProducts />
        </div>
    )
}

export default ProductDetail;