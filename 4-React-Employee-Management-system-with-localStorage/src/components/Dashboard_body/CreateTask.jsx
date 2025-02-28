import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

function CreateTask() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const addNewTask = {
      taskTitle,
      taskDate,
      category,
      taskDescription,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const employeesData = JSON.parse(localStorage.getItem("employees"));
    // console.log(employeesData);

    employeesData.forEach((el) => {
      if (el.firstName.toLowerCase() === assignTo.toLowerCase()) {
        el.tasks.push(addNewTask);
        el.taskCounts.newTask += 1;
      }
    });
    console.log(employeesData);

    localStorage.setItem("employees", JSON.stringify(employeesData));

    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setTaskDescription("");
  };

  return (
    <div className="mt-10 rounded bg-[#1C1C1C] p-5">
      <form className="flex items-start justify-between gap-5">
        <div className="flex w-1/2 flex-col">
          <label htmlFor="task_title" className="mb-1 text-sm text-gray-300">
            Task Title
          </label>
          <input
            onChange={(e) => setTaskTitle(e.target.value)}
            value={taskTitle}
            id="task_title"
            className="mb-3 w-4/5 rounded border-[1px] border-gray-400 bg-transparent px-2 py-1 text-sm outline-none"
            placeholder="Make a UI design"
            type="text"
          />

          <label htmlFor="date" className="mb-1 text-sm text-gray-300">
            Date
          </label>
          <input
            onChange={(e) => setTaskDate(e.target.value)}
            value={taskDate}
            id="date"
            className="mb-3 w-4/5 rounded border-[1px] border-gray-400 bg-transparent px-2 py-1 text-sm text-gray-300 outline-none"
            type="date"
          />

          <label htmlFor="assignTo" className="mb-1 text-sm text-gray-300">
            Assign To
          </label>
          <input
            onChange={(e) => setAssignTo(e.target.value)}
            value={assignTo}
            id="assignTo"
            className="mb-3 w-4/5 rounded border-[1px] border-gray-400 bg-transparent px-2 py-1 text-sm outline-none"
            placeholder="Employee Name"
            type="text"
          />

          <label htmlFor="category" className="mb-1 text-sm text-gray-300">
            Category
          </label>
          <input
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            id="category"
            className="mb-3 w-4/5 rounded border-[1px] border-gray-400 bg-transparent px-2 py-1 text-sm outline-none"
            placeholder="Design, Development, etc..."
            type="text"
          />
        </div>

        <div className="flex w-2/5 flex-col">
          <label htmlFor="description" className="mb-1 text-sm text-gray-300">
            Description
          </label>
          <textarea
            onChange={(e) => setTaskDescription(e.target.value)}
            value={taskDescription}
            className="h-44 w-full rounded border-[1px] border-gray-400 bg-transparent px-4 py-2 text-sm outline-none"
            id="description"
            cols="30"
            rows="8"
            placeholder="Detailed description of task (Max 500 words)"
          />
          <button
            onClick={submitHandler}
            className="mt-3 w-full rounded bg-red-500 px-3 py-2 text-base font-medium hover:bg-red-600"
            type="submit"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
