import { directReduser } from "./redusers/directReducer";
import { postsCardReducer } from "./redusers/postsCardReducer";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    postsCard: postsCardReducer,
    directReducer: directReduser,
  },
});

// утановить ReduxToolkit и использовать его функции, чтобы в дальнейшем уменьшить код
