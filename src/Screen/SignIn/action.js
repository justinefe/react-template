import {
  axiosCall,
  saveToLocalStorage,
  clearLocalStorage,
} from "../../Utility";

export const signInPending = () => ({
  type: "SIGNIN_PENDING",
  payload: {
    isCompleted: false,
    isLoading: true,
    error: null,
  },
});

export const signInEmail = () => ({
  type: "SIGNIN_EMAIL",
  payload: {
    isCompleted: false,
    isLoading: false,
    error: null,
    showPassword: true,
  },
});

export const signInSuccess = (user) => ({
  type: "SIGNIN_SUCCESS",
  payload: {
    isLoading: true,
    user,
    isCompleted: true,
    isAuthenticated: true,
  },
});
export const signInError = (error) => ({
  type: "SIGNIN_ERROR",
  payload: {
    error,
    isCompleted: false,
    isLoading: false,
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
export const signOut = () => ({
  type: "SIGN_OUT",
  payload: {
    error: null,
    isCompleted: false,
    isLoading: false,
    isAuthenticated: false,
  },
});

export const signInAction = (values) => async (dispatch) => {
  await dispatch(signInPending());
  try {
    const result = await axiosCall({
      path: "login",
      payload: values,
      method: "post",
    });
    saveToLocalStorage(result.data);
    dispatch(signInSuccess(result.data));
  } catch (error) {
    const { response } = error;
    if (!response) {
      dispatch(signInError("Network Error. Please try again"));
      return;
    }
    const message = response.data.message || response;
    dispatch(signInError(message));
  }
};

export const signOutAction = () => async (dispatch) => {
  try {
    clearLocalStorage();
    dispatch(signOut());
  } catch (error) {
    clearLocalStorage();
    dispatch(signOut());
    dispatch(signInError("Network Error. Please try again"));
  }
};
