import { Col, Row } from 'antd';
import React, { FC, useEffect, useState } from 'react'
import Product1 from "../../../../assets/images/product1.png";
import Product2 from "../../../../assets/images/product2.png";
import Oximeter from "../../../../assets/images/oximeter.png";
//@ts-ignore
import CursorZoom from "react-cursor-zoom";
import "./imageView.scss"

interface ImageViewProps {

}

const products = [Oximeter, Product2, Product1, Product2, Product1]

const ImageView: FC<ImageViewProps> = (props) => {
    const { } = props;

    const [activeImage, setActiveImage] = useState(0);

    // useEffect(() => {
    //     setTimeout(() => {
    //         debugger;
    //     }, 5000);
    // }, []);

    return (
        <div className="image-view">
            <CursorZoom
                image={{
                    src: products[activeImage],
                    width: 424 ,
                    height: 424 
                }}
                zoomImage={{
                    src: products[activeImage],
                    width: 800,
                    height: 1200
                }}
                cursorOffset={{ x: 500, y: 0 }}
            />
            <Row className="list mt-5" justify="space-between">
                {products.map((img, index) => <Col span={4}><img src={img} alt="" /></Col>)}
            </Row>
        </div>
    )
}

export default ImageView;