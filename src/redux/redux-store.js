import { combineReducers, createStore } from "redux";
import postsCardReducer from "./redusers/postsCardReducer";

const reducers = combineReducers({
  //наши редьюсеры
  postsCard: postsCardReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;

// утановить ReduxToolkit и использовать его функции, чтобы в дальнейшем уменьшить код
