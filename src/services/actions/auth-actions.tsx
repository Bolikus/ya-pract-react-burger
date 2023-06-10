import { authLogin, authLogout, authRegister, getUser, setUser } from "../../utils/api";
import { AppDispatch } from "../../index";
import { IUser } from "../../utils/types";

export const AUTH_REGISTER_REQUEST = "AUTH_REGISTER_REQUEST";
export const AUTH_REGISTER_SUCCESS = "AUTH_REGISTER_SUCCESS";
export const AUTH_REGISTER_FAILED = "AUTH_REGISTER_FAILED";

export const AUTH_LOGIN_REQUEST = "AUTH_LOGIN_REQUEST";
export const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
export const AUTH_LOGIN_FAILED = "AUTH_LOGIN_FAILED";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";
export const GET_USER_CLEAR = "GET_USER_CLEAR";
export const GET_USER_AUTH_CHECKED = "GET_USER_AUTH_CHECKED";

export const AUTH_LOGOUT_REQUEST = "AUTH_LOGOUT_REQUEST";
export const AUTH_LOGOUT_SUCCESS = "AUTH_LOGOUT_SUCCESS";
export const AUTH_LOGOUT_FAILED = "AUTH_LOGOUT_FAILED";

export const CHANGE_USER_REQUEST = "CHANGE_USER_REQUEST";
export const CHANGE_USER_SUCCESS = "CHANGE_USER_SUCCESS";
export const CHANGE_USER_FAILED = "CHANGE_USER_FAILED";

export type TAuthActions =
  | {
      type: typeof AUTH_REGISTER_REQUEST;
    }
  | {
      type: typeof AUTH_REGISTER_SUCCESS;
      payload: IUser | null;
    }
  | {
      type: typeof AUTH_REGISTER_FAILED;
    }
  | {
      type: typeof AUTH_LOGIN_REQUEST;
    }
  | {
      type: typeof AUTH_LOGIN_SUCCESS;
      payload: IUser | null;
    }
  | {
      type: typeof AUTH_LOGIN_FAILED;
    }
  | {
      type: typeof GET_USER_REQUEST;
    }
  | {
      type: typeof GET_USER_SUCCESS;
      payload: IUser | null;
    }
  | {
      type: typeof GET_USER_FAILED;
    }
  | {
      type: typeof GET_USER_CLEAR;
    }
  | {
      type: typeof GET_USER_AUTH_CHECKED;
    }
  | {
      type: typeof AUTH_LOGOUT_REQUEST;
    }
  | {
      type: typeof AUTH_LOGOUT_SUCCESS;
    }
  | {
      type: typeof AUTH_LOGOUT_FAILED;
    }
  | {
      type: typeof CHANGE_USER_REQUEST;
    }
  | {
      type: typeof CHANGE_USER_SUCCESS;
      payload: IUser | null;
    }
  | {
      type: typeof CHANGE_USER_FAILED;
    };

export const sendRegisterForm = (name: string, email: string, password: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: AUTH_REGISTER_REQUEST,
    });
    authRegister(name, email, password)
      .then((response) => {
        if (response && response.success) {
          dispatch({
            type: AUTH_REGISTER_SUCCESS,
            payload: response.user,
          });
          localStorage.setItem("accessToken", response.accessToken);
          localStorage.setItem("refreshToken", response.refreshToken);
        }
      })
      .catch(() => {
        dispatch({
          type: AUTH_REGISTER_FAILED,
        });
      });
  };
};

export const sendLoginForm = (values: { email: string; password: string }) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: AUTH_LOGIN_REQUEST,
    });
    return authLogin(values)
      .then((response) => {
        if (response && response.success) {
          dispatch({
            type: AUTH_LOGIN_SUCCESS,
            payload: response.user,
          });
          localStorage.setItem("accessToken", response.accessToken);
          localStorage.setItem("refreshToken", response.refreshToken);
        }
      })
      .catch(() => {
        dispatch({
          type: AUTH_LOGIN_FAILED,
        });
      });
  };
};

export const getUserAction = () => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_USER_REQUEST,
    });
    return getUser()
      .then((response) => {
        dispatch({
          type: GET_USER_SUCCESS,
          payload: response.user,
        });
        return response;
      })
      .catch(() => {
        dispatch({
          type: GET_USER_FAILED,
        });
      });
  };
};

export const checkUserAuth = () => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_USER_REQUEST,
    });
    if (localStorage.getItem("accessToken")) {
      dispatch(getUserAction())
        //@ts-ignore
        .catch(() => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          dispatch({
            type: GET_USER_CLEAR,
          });
        })
        .finally(() => {
          dispatch({
            type: GET_USER_AUTH_CHECKED,
          });
        });
    } else {
      dispatch({
        type: GET_USER_AUTH_CHECKED,
      });
    }
  };
};

export const logoutUser = () => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: AUTH_LOGOUT_REQUEST,
    });

    authLogout()
      .then((response) => {
        dispatch({ type: AUTH_LOGOUT_SUCCESS });
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      })
      .catch(() => {
        dispatch({ type: AUTH_LOGOUT_FAILED });
      });
  };
};

export const changeUser = (form: { email: string; name: string; password: string }) => {
  return async (dispatch: AppDispatch) => {
    dispatch({
      type: CHANGE_USER_REQUEST,
    });
    return await setUser(form)
      .then((response) => {
        dispatch({
          type: CHANGE_USER_SUCCESS,
          payload: response.user,
        });
      })
      .catch(() => {
        dispatch({
          type: CHANGE_USER_FAILED,
        });
      });
  };
};
