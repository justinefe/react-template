// import { ToastProvider, useToasts } from 'react-toast-notifications'
import { axiosCall, saveToLocalStorage } from "../../Utility";
import { useToasts } from "react-toast-notifications";

export const signUpPending = () => ({
  type: "SIGNUP",
  payload: {
    isLoading: true,
    isCompleted: false,
    error: null,
  },
});

export const signUpError = (error) => ({
  type: "SIGNUP_ERROR",
  payload: {
    error,
    isLoading: false,
    isCompleted: false,
  },
});

export const signUpSuccess = (user) => ({
  type: "SIGNUP_SUCCESS",
  payload: {
    error: null,
    user,
    isLoading: false,
    isCompleted: true,
    isAuthenticated: true,
  },
});

export const cleanUpAuth = () => ({
  type: "CLEAN_UP",
  payload: {
    error: null,
    isCompleted: false,
    isLoading: false,
  },
});

export const setUpUser = (payload) => ({
  type: "SETUP_USER",
  payload,
});

export const signUpAction = (values) => async (dispatch) => {
  dispatch(cleanUpAuth());
  await dispatch(signUpPending());

  const details = { ...values };
  try {
    const result = await axiosCall({
      path: "register",
      payload: details,
      method: "post",
    });
    dispatch(signUpSuccess(result.data));
    saveToLocalStorage(result.data);
  } catch (error) {
    const { response } = error;
    if (!response) {
      dispatch(signUpError("Network Error. Please try again"));
      return;
    }
    const message = response.data.message || response;
    dispatch(signUpError(message));
  }
};

export const getUser = () => async (dispatch) => {
  /* istanbul ignore next */
  // if (localStorage.token && localStorage.user) {
  try {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    if (user) {
      const result = await axiosCall({
        method: "get",
        path: `/api/v1/profiles/${user.username}`,
      });
      const payload = {
        user: result.user,
        isAuthenticated: true,
      };
      dispatch(setUpUser(payload));
    } else {
      // eslint-disable-next-line no-throw-literal
      throw null;
    }
  } catch (error) {
    const payload = {
      user: {},
      isAuthenticated: false,
    };
    dispatch(setUpUser(payload));
  }
  // }
};
