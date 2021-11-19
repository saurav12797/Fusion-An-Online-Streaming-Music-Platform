import { Carousel, Col, Row } from "antd";
import { CarouselRef } from "antd/lib/carousel";
import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import "./appCarousel.scss";

interface AppCarouselProps {
  list: any[];
  render: (listItem: any) => any;
  noArrow?: boolean;
}

const getItemsItems = (list: any[]) => {
  const listItems = [];
  while (list.length) {
    listItems.push(list.splice(0, 6));
  }
  return listItems;
};

const AppCarousel: FC<AppCarouselProps> = (props) => {
  const { list, render, noArrow } = props;
  let carouselRef: CarouselRef | null = null;

  return (
    <div className="app-carousel">
      <Row>
        {!noArrow && (
          <Col lg={1} md={1} sm={1} xs={1} className="controller">
            <LeftOutlined onClick={() => carouselRef?.prev()} />
          </Col>
        )}
        <Col span={noArrow ? 24 : 22}>
          <Carousel
            dots={false}
            draggable
            slickGoTo={1}
            ref={(ref) => {
              carouselRef = ref;
            }}
          >
            {getItemsItems(list).map((feature) => (
              <Row className="list" gutter={[30, 0]}>
                {feature.map((img, index) => (
                  <Col lg={4}  md={6} sm={2} xs={2} key={index} className="list-item">
                    {render(img)}
                  </Col>
                ))}
              </Row>
            ))}
          </Carousel>
        </Col>
        {!noArrow && (
          <Col lg={1} md={1} sm={1} xs={1} className="controller">
            <RightOutlined onClick={() => carouselRef?.next()} />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default AppCarousel;
