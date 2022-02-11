import { combineReducers, createStore } from "redux";
import postsCardReducer from "./redusers/postsCardReducer";

const reducers = combineReducers({
  //наши редьюсеры
  postsCardReducer: postsCardReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
