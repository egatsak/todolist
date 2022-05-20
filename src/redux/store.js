import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import todosReducer from "./slices/todos";
import tabsReducer from "./slices/tabs";

export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    tabs: tabsReducer
  },
});
