import { combineReducers, createStore } from "redux";

const reducers = combineReducers({
  //наши редьюсеры
});

let store = createStore(reducers);

window.store = store;

export default store;
