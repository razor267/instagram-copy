import { combineReducers, createStore } from "redux";
import { directReduser } from "./redusers/directReducer";
import { postsCardReducer } from "./redusers/postsCardReducer";

const reducers = combineReducers({
  postsCard: postsCardReducer,
  directReducer: directReduser,
});
let store = createStore(reducers);

window.store = store;

export default store;

// утановить ReduxToolkit и использовать его функции, чтобы в дальнейшем уменьшить код
