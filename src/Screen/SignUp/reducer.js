const initState = {
  error: null,
  isLoading: false,
  //   showPassword: false,
  user: {},
  isAuthenticated: false,
  isCompleted: false,
  //   isSubmit: false,
  //   isSettingAuth: true,
};
const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNIN_PENDING":
      return {
        ...state,
        ...action.payload,
      };
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        ...action.payload,
      };
    case "SIGNIN_ERROR":
      return {
        ...state,
        ...action.payload,
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        ...action.payload,
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        ...action.payload,
      };
    case "SIGNUP":
      return {
        ...state,
        ...action.payload,
      };
    case "CLEAN_UP":
      return {
        ...state,
        ...action.payload,
      };
    case "SETUP_USER":
      return {
        ...state,
        ...action.payload,
      };
    case "SIGN_OUT":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
