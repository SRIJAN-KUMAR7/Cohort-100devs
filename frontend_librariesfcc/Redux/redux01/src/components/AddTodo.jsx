import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtodo } from '../features/todo/todoSlice';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addtodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      dispatch(addtodo(input));
      setInput('');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">Add Todo</h2>
      <form onSubmit={addtodoHandler} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
