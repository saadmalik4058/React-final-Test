import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/Todos/TodoSlice";
import Todo from "./Todo";
import Products from "./ProductsListing/Products";

function AddTodo() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();


  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask("");
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center max-w-md mx-auto p-4 space-y-4 sm:space-y-0 sm:space-x-4"
      >
        <input
          type="text"
          placeholder="Enter a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 text-gray-700 shadow-sm transition duration-150 ease-in-out"
        />
        <button type="submit" className="px-6 py-2 bg-blue-500 text-white ">
          Add Task
        </button>
      </form>

      <Todo />
      <Products />
    </div>
  );
}

export default AddTodo;
