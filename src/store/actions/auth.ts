import { User } from "../../models/user.model";

import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  FORGET_PASSWORD,
  FORGET_PASSWORD_CHANGE,
  SHOW_LOGIN,
  CREATE_ACCOUNT,
  OTP_VERIFICATION,
  PLAY,
  ISPLAYING,
} from "../definitions/authConstants";
import { ActionProps } from "../../shared/types/action.type";

export const setAuthenticated = (user: User): ActionProps => ({
  type: AUTHENTICATED,
  payload: {
    authenticated: true,
    user,
  },
});

export const setPlay = (track: any): ActionProps => ({
  type: PLAY,
  payload: {
    track,
  },
});
export const setisPlay = (user: User): ActionProps => ({
  type: ISPLAYING,
  payload: {
    authenticated: true,
    user,
  },
});

export const setUnAuthenticated = (): ActionProps => {
  return {
    type: UNAUTHENTICATED,
    payload: {
      authenticated: false,
      user: null,
    },
  };
};

export const showCreateAccount = (show: boolean): ActionProps => {
  return {
    type: CREATE_ACCOUNT,
    payload: {
      show,
    },
  };
};

export const showOtpVerification = (show: boolean): ActionProps => {
  return {
    type: OTP_VERIFICATION,
    payload: {
      show,
    },
  };
};

export const showLogin = (show: boolean): ActionProps => {
  return {
    type: SHOW_LOGIN,
    payload: {
      show,
    },
  };
};

export const showForgotPassword = (show: boolean): ActionProps => {
  return {
    type: FORGET_PASSWORD,
    payload: {
      show,
    },
  };
};

export const showForgotPasswordChange = (show: boolean): ActionProps => {
  return {
    type: FORGET_PASSWORD_CHANGE,
    payload: {
      show,
    },
  };
};
