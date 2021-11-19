import React, { FC } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { appRoutes } from "./routeConstants/appRoutes";
import AppFooter from "../shared/components/AppFooter";

import ProductList from "../views/ProductList";
import Cart from "../views/Cart";
import { RouterProps } from "../shared/types/route.type";
import Navbar from "../shared/components/Navbar";
import { Layout } from "antd";

import ProductDetail from "../views/ProductDetail";

const { Header, Content, Footer } = Layout;

export const appHistory = createBrowserHistory();

const AppRoutes = () => {
  const routes: RouterProps[] = [
    { exact: true, path: appRoutes.LIST_PRODUCTS, component: ProductList },
    { exact: true, path: appRoutes.PRODUCT_DETAILS, component: ProductDetail },
    { exact: true, path: appRoutes.CART, component: Cart },
  ];

  return (
    <Router history={appHistory}>
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content>
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} {...route} component={route.component as FC} />
            ))}
            <Route path="*" render={() => <Redirect to={appRoutes.HOME} />} />
          </Switch>
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
