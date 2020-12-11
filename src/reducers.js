import { combineReducers } from "redux";
import load from "./Component/Loader/Reducer";
import AuthReducer from "./Screen/SignUp/reducer";
import Category from "./Screen/ViewCategory/reducer";

const reducers = combineReducers({
  load,
  AuthReducer,
  Category,
});

export default reducers;
