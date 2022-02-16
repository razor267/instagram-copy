import { combineReducers, createStore } from "redux";
import { directReduser } from "./redusers/directReducer";
import {postsCardReducer} from "./redusers/postsCardReducer";

const reducers = combineReducers({
  //наши редьюсеры
<<<<<<< HEAD
  postsCardReducer: postsCardReducer,
  directReducer: directReduser
=======
  postsCard: postsCardReducer,
>>>>>>> d37391e18e5cb3131216548ac58eecdc96c93fcc
});

let store = createStore(reducers);

window.store = store;

export default store;

// утановить ReduxToolkit и использовать его функции, чтобы в дальнейшем уменьшить код
