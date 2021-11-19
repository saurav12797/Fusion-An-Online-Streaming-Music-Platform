import React, { FC, Fragment } from "react";
import AppDrawer from "../../shared/components/AppDrawer";
import AuthContainer from "../../store/container/AuthContainer";
import { AuthReducerProps } from "../../store/reducers/authReducer";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import ChangePassword from "./ChangePassword";
import { AuthTypes } from "../../enums/auth.enum";
import "./auth.scss";

export const DRAWER_DELAY = 200;

interface AuthProps extends AuthReducerProps {}

const Auth: FC<AuthProps> = (props) => {
  const {
    login,
    signup,
    forgotPassword,
    changePassword,
    showLogin,
    showCreateAccount,
    showForgotPassword,
    showForgotPasswordChange,
  } = props;

  const handleClose = (type: AuthTypes) => {
    switch (type) {
      case AuthTypes.LOGIN:
        showLogin(false);
        return;
      case AuthTypes.REGISTER:
        showCreateAccount(false);
        return;
      case AuthTypes.FORGOT_PASSWORD:
        showForgotPassword(false);
        return;
      case AuthTypes.CHANGE_PASSWORD:
        showForgotPasswordChange(false);
        return;
      default:
        return;
    }
  };

  const AuthComponents = [
    {
      component: <Login />,
      visibility: login,
      close: AuthTypes.LOGIN,
    },
    {
      component: <Register />,
      visibility: signup,
      close: AuthTypes.REGISTER,
    },
    {
      component: <ForgotPassword />,
      visibility: forgotPassword,
      close: AuthTypes.FORGOT_PASSWORD,
    },
    {
      component: <ChangePassword />,
      visibility: changePassword,
      close: AuthTypes.CHANGE_PASSWORD,
    },
  ];

  return (
    <Fragment>
      {AuthComponents.map(({ visibility, component, close }, index) => (
        <AppDrawer visible={visibility} onClose={() => handleClose(close)} key={index}>
          {component}
        </AppDrawer>
      ))}
    </Fragment>
  );
};

export default AuthContainer(Auth);
