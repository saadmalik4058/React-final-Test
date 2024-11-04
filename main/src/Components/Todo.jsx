import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../Features/Todos/TodoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  function handleEdit(id) {
    dispatch(updateTodo({ id, text: editText }));
    setEditId(null);
    setEditText("");
  }

  const dispatch = useDispatch();
  return (
    <div className=" p-4">
      <h1 className="text-2xl font-bold text-center ">Todos</h1>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-3 bg-white rounded shadow-md hover:bg-gray-100 transition"
          >
            {editId == todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="text-gray-700 text-lg border rounded px-2"
              />
            ) : (
              <span className="text-gray-700 text-lg">{todo.text}</span>
            )}
            <div
              className="flex
             gap-3 "
            >
              {editId == todo.id ? (
                <button
                  onClick={() => handleEdit(todo.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditId(todo.id);
                    setEditText(todo.text);
                  }}
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
