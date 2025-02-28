import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Task from "./components/Task";
import { v4 as uuidv4 } from "uuid";
// uuidv4();

const App = () => {
  const [input, setInput] = useState("");
  const [userTasks, setUserTasks] = useState([]);
  const [editId, setEditId] = useState(0);
  // console.log(userTasks);

  // Load tasks from local storage on app load //
  useEffect(() => {
    const allTasks = JSON.parse(localStorage.getItem("allTasks"));

    allTasks?.length > 0 && setUserTasks(allTasks);
  }, []);

  // Save tasks to local storage whenever userTasks changes //
  useEffect(() => {
    localStorage.setItem("allTasks", JSON.stringify(userTasks));
  }, [userTasks]);

  // -------- add task ---------- //
  function handleSubmit(e) {
    e.preventDefault();

    if (editId) {
      setUserTasks((prevTasks) =>
        prevTasks.map((item) => {
          if (item.id === editId) {
            return { ...item, todo: input };
          } else {
            return item;
          }
        })
      );

      setEditId(0);
    } else {
      setUserTasks([
        ...userTasks,
        { id: uuidv4(), todo: input, isCompleted: false },
      ]);
    }

    setInput("");
  }

  // edit task //
  function handleEdit(id) {
    userTasks.find((item) => {
      if (!item.isCompleted && item.id === id) {
        setInput(item.todo);
        setEditId(id);
      }
    });
  }

  // delete task //
  function handleDelete(id) {
    setUserTasks(userTasks.filter((item) => item.id !== id));
  }

  // toggle complete task //
  function handleComplete(id) {
    setUserTasks(
      userTasks.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <div>
      <Navbar />

      {/* // Creating UI part // */}

      <div className="flex justify-center">
        <div className="max-w-3xl w-full m-5 bg-cyan-100 p-5 rounded-md">
          <div className="text-center">
            <h1 className="mb-5 text-2xl font-bold">
              TaskTree - Your Personal Task Manager
            </h1>
          </div>

          <h2 className="text-xl font-semibold mb-2">Add a Task</h2>

          <div className="mb-5">
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex items-center gap-4"
            >
              <input
                className="flex-1 border border-gray-700 outline-none px-4 py-2 rounded-full"
                type="text"
                required
                placeholder="Enter a Task here"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                className="px-4 py-2 bg-cyan-400 rounded-full text-white font-medium"
                type="submit"
              >
                {editId ? "Edit" : "Save"}
              </button>
            </form>
          </div>

          <hr className="h-[2px] mb-4 bg-gray-400 rounded-full mx-8" />

          <h2 className="text-xl font-semibold mb-4">Your Tasks</h2>

          {/* // Displaying all the tasks //  */}

          {userTasks?.length > 0 &&
            userTasks.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                task={task}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleComplete={handleComplete}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
