import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  FORGET_PASSWORD,
  FORGET_PASSWORD_CHANGE,
  SHOW_LOGIN,
  CREATE_ACCOUNT,
  OTP_VERIFICATION,
  ISPLAYING,
  PLAY,
} from "../definitions/authConstants";
import { CreateReducer } from "../../shared/utils/createReducer";
import { User } from "../../models/user.model";
import { ActionProps } from "../../shared/types/action.type";

export interface AuthState {
  authenticated: boolean;
  user?: User;
  login: boolean;
  signup: boolean;
  otp: boolean;
  forgotPassword: boolean;
  changePassword: boolean;
  setPlay: object;
  setisPlaying: boolean;
}

export interface AuthReducerProps extends AuthState {
  setAuthenticated: (user: User) => ActionProps;
  setUnAuthenticated: () => ActionProps;
  showCreateAccount: (show: boolean) => ActionProps;
  showOtpVerification: (show: boolean) => ActionProps;
  showLogin: (show: boolean) => ActionProps;
  showForgotPassword: (show: boolean) => ActionProps;
  showForgotPasswordChange: (show: boolean) => ActionProps;
}

const initState: AuthState = {
  authenticated: false,
  user: undefined,
  login: false,
  otp: false,
  changePassword: false,
  forgotPassword: false,
  signup: false,
  setPlay: [],
  setisPlaying: false,
};

const authReducer = CreateReducer(initState, {
  [AUTHENTICATED](state: AuthState, action: ActionProps): AuthState {
    const { authenticated, user } = action?.payload;
    return {
      ...state,
      authenticated,
      user,
    };
  },
  [UNAUTHENTICATED](state: AuthState, action: ActionProps): AuthState {
    const { authenticated } = action?.payload;
    return { ...state, authenticated };
  },
  [SHOW_LOGIN](state: AuthState, action: ActionProps): AuthState {
    const { show } = action.payload;
    return {
      ...state,
      login: show,
      otp: false,
      changePassword: false,
      forgotPassword: false,
      signup: false,
    };
  },
  [OTP_VERIFICATION](state: AuthState, action: ActionProps): AuthState {
    const { show } = action.payload;

    return {
      ...state,
      login: false,
      otp: show,
      changePassword: false,
      forgotPassword: false,
      signup: false,
    };
  },
  [FORGET_PASSWORD](state: AuthState, action: ActionProps): AuthState {
    const { show } = action.payload;

    return {
      ...state,
      login: false,
      otp: false,
      changePassword: false,
      forgotPassword: show,
      signup: false,
    };
  },
  [FORGET_PASSWORD_CHANGE](state: AuthState, action: ActionProps): AuthState {
    const { show } = action.payload;

    return {
      ...state,
      login: false,
      otp: false,
      changePassword: show,
      forgotPassword: false,
      signup: false,
    };
  },
  [CREATE_ACCOUNT](state: AuthState, action: ActionProps): AuthState {
    const { show } = action.payload;

    return {
      ...state,
      login: false,
      otp: false,
      changePassword: false,
      forgotPassword: false,
      signup: show,
    };
  },
});

export default authReducer;
