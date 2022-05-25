import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    setIsChecked: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    deleteTodoById: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    deleteAll: (state) => {
      state.todos = state.todos.filter((todo) => todo.completed !== true);
    },
  },
});

export const { addTodo, deleteTodoById, deleteAll, setIsChecked } =
  todosSlice.actions;

export default todosSlice.reducer;
