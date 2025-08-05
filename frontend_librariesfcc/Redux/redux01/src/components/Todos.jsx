import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removetodo } from '../features/todo/todoSlice';

const Todos = () => {
  const todos = useSelector((state) => state.todos); 
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-3">Todo List</h2>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 p-3 rounded shadow"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => dispatch(removetodo(todo.id))}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
