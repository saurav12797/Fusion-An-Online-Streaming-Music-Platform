import React, { FC } from "react";
import { Badge, Menu } from "antd";
import "./navbar.scss";
import PrescriptionUpload from "../PrescriptionUpload";
import SearchProduct from "../SearchProduct";
import AuthContainer from "../../../store/container/AuthContainer";
import { useHistory } from "react-router-dom";
import { appRoutes } from "../../../routes/routeConstants/appRoutes";
import { AuthReducerProps } from "../../../store/reducers/authReducer";

const links = [
  {
    title: "Pharmacy",
    new: false,
    icon: "icon-PHARMACY-TOP",
  },
  {
    title: "Lab Test",
    new: false,
    icon: "icon-laptest-TOP",
  },
  {
    title: "Scan",
    new: false,
    icon: "icon-Subtraction-4",
  },
  {
    title: "Physiotherapy",
    new: false,
    icon: " icon-physiotherapy",
  },
  {
    title: "Doctor Appointments",
    new: false,
    icon: "icon-doctor-1",
  },
  {
    title: "COVID Essentials",
    new: true,
    icon: "",
  },
];

interface NavbarProps extends AuthReducerProps {}

const Navbar: FC<NavbarProps> = (props) => {
  const { showLogin } = props;

  const histroy = useHistory();

  const handleCart = () => {
    histroy.push(appRoutes.CART);
  };

  const handleLogin = () => {
    showLogin(true);
  };
  return (
    <div className="app-navbar">
      <div className="nav-container">
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>
            <h1 className="logo">Mr.Medicine</h1>
          </Menu.Item>
          <Menu.Item className="search-products">
            <SearchProduct />
          </Menu.Item>
          <Menu.Item className="nav-or">or</Menu.Item>
          <Menu.Item>
            <PrescriptionUpload />
          </Menu.Item>
        </Menu>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>
            <i className="icon-empty-wallet-top" />
            Wallet
          </Menu.Item>
          <Menu.Item onClick={handleCart}>
            <Badge count={3}>
              <i className="icon-ic_shopping_cart-top" />
            </Badge>
            Cart
          </Menu.Item>
          <Menu.Item onClick={handleLogin}>
            {" "}
            <i className="icon-profile-top" />
            Login / Register
          </Menu.Item>
        </Menu>
      </div>
      <div className="link-container">
        {links.map((link) => (
          <p>
            {" "}
            <i className={link.icon} /> {link.title}{" "}
            {link.new && <span className="new">New</span>}{" "}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AuthContainer(Navbar);
