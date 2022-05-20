import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import todosReducer from "./slices/todos";

export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});
