import { Col, Row } from "antd";
import React, { FC, useEffect } from "react";
import MetaService from "../../../services/metaService/meta.service";
import "./ourServices.scss";

const services = [
  {
    icon: "icon-PHARMACY",
    title: "Pharmacy",
    description: "1Lakh+ items",
  },
  {
    icon: "icon-LAB-TEST",
    title: "Lab test",
    description: "20+ tests",
  },
  {
    icon: "icon-SCAN",
    title: "Scan",
    description: "NABL accredited labs",
  },
  {
    icon: "icon-DOCTOR",
    title: "Doctor Appointments",
    description: "300+ Certified Doctors",
  },
  {
    icon: "icon-Layer-2",
    title: "Physiotherapy",
    description: "Trained Professionals",
  },
];

interface OurServicesProps {}

const OurServices: FC<OurServicesProps> = (props) => {
  const {} = props;

  /* const { services, loading, getServices } = MetaService(); */

  /* useEffect(() => {
    getServices();
  }, []); */

  return (
    <div className="our-services">
      <div className="title">
        <h1>Our Services</h1>
      </div>
      <div className="service__wrapper">
        {/* {services?.map(({ icon, title, description }, key) => (
          <div  className="service" key={key}>
            <i className={icon} />
            <p className="content">{title}</p>
            <p className="description">{description}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default OurServices;
