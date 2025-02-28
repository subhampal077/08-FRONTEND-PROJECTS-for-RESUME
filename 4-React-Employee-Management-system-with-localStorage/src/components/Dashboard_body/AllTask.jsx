import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTask() {
  const authData = useContext(AuthContext);
  // console.log(authData);

  return (
    <div id="taskList" className="mt-5 rounded bg-[#1c1c1c] p-5">
      <div className="mb-2 flex justify-between rounded bg-red-500 px-4 py-2">
        <h2 className="w-1/5 text-lg font-medium">Employee Name</h2>
        <h3 className="w-1/5 text-lg font-medium">New Task</h3>
        <h5 className="w-1/5 text-lg font-medium">Active Task</h5>
        <h5 className="w-1/5 text-lg font-medium">Completed</h5>
        <h5 className="w-1/5 text-lg font-medium">Failed</h5>
      </div>

      <div>
        {authData.employees.map((elem, i) => {
          return (
            <div
              key={i}
              className="mb-2 flex justify-between rounded border-2 border-emerald-500 px-4 py-2"
            >
              <h2 className="w-1/5 text-lg font-medium">{elem.firstName}</h2>
              <h3 className="w-1/5 text-lg font-medium text-blue-400">
                {elem.taskCounts.newTask}
              </h3>
              <h5 className="w-1/5 text-lg font-medium text-yellow-400">
                {elem.taskCounts.active}
              </h5>
              <h5 className="w-1/5 text-lg font-medium text-white">
                {elem.taskCounts.completed}
              </h5>
              <h5 className="w-1/5 text-lg font-medium text-red-600">
                {elem.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllTask;
