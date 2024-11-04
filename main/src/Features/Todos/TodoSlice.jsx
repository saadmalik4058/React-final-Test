import { createSlice, nanoid } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  todos: [{ id: 1, text: "Hello saad" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const updatingTodo = state.todos.find((todo) => todo.id == id);
      if (updatingTodo) {
        updatingTodo.text = text;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
