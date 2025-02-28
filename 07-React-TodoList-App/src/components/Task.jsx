import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Task = ({ task, id, handleDelete, handleEdit, handleComplete }) => {
  
  return (
    <div className="flex items-center justify-between gap-5 px-2 py-2 mb-2 rounded-md bg-cyan-300">
      <div className="flex items-center gap-2 sm:gap-4">
        <input onClick={() => handleComplete(id)} type="checkbox" />

        <p
          className={`${
            task.isCompleted && "line-through text-red-600"
          } font-medium`}
        >
          {task.todo}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleEdit(id)}
          className="px-2 py-1 bg-cyan-100 rounded-md"
        >
          <FaEdit size={18} />
        </button>
        <button
          onClick={() => handleDelete(id)}
          className="px-2 py-1 bg-cyan-100 rounded-md"
        >
          <MdDelete size={18} />
        </button>
      </div>
    </div>
  );
};

export default Task;
