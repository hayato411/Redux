import { combineReducers } from "redux"; //reducerの中身を複数ストアに入れる時に使用する
import isLoginReducer from "./isLogin";
import counterReducer from "./counter";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogin: isLoginReducer,
});

export default allReducers;
