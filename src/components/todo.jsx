import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "../slices/todoSlice";

const Todo = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-semibold tracking-tight text-black mb-4">
        Todo App
      </h1>
      <div className="flex items-center gap-2 mb-6">
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Add a new todo"
          className="flex-1 h-9 px-3 rounded-md border border-gray-300 text-gray-700 shadow-sm focus:outline-none focus:ring-2 "
        />
        <button
          className="px-4 py-2 bg-black text-white font-medium text-sm rounded-md shadow-sm"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="p-4 border border-gray-200 rounded-md shadow-sm flex justify-between items-center bg-white"
          >
            <span
              className={`text-sm font-medium ${
                todo.completed ? "line-through text-gray-400" : "text-gray-900"
              }`}
            >
              {todo.text}
            </span>
            <div className="flex items-center gap-2">
              <button
                className={`px-3 py-1 text-sm rounded-md font-medium shadow-sm ${
                  todo.completed
                    ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
                onClick={() => handleToggleComplete(todo.id)}
              >
                {todo.completed ? (<i className="fa fa-pencil-square"></i>) : (<i className="fa fa-square-check"></i>)}
              </button>
              <button
                className="px-3 py-1 bg-red-500 text-white text-sm rounded-md shadow-sm hover:bg-red-600"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
