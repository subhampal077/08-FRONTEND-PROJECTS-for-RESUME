import React from "react";

function TaskListNumbers({ loggedInUserData }) {
  return (
    <div
      id="taskList"
      className="mt-10 flex justify-between gap-5 overflow-x-auto"
    >
      <div className="flex w-[25%] min-w-[105px] flex-col items-center justify-center rounded-xl bg-blue-400 px-8 py-6">
        <h1 className="text-3xl font-semibold">
          {loggedInUserData?.taskCounts.newTask}
        </h1>
        <h4 className="text-xl font-medium">New Task</h4>
      </div>

      <div className="flex w-[25%] min-w-[105px] flex-col items-center justify-center rounded-xl bg-green-400 px-8 py-6">
        <h1 className="text-3xl font-semibold text-black">
          {loggedInUserData?.taskCounts.completed}
        </h1>
        <h4 className="text-xl font-medium text-black">Completed Task</h4>
      </div>

      <div className="flex w-[25%] min-w-[105px] flex-col items-center justify-center rounded-xl bg-yellow-400 px-8 py-6">
        <h1 className="text-3xl font-semibold text-black">
          {loggedInUserData?.taskCounts.active}
        </h1>
        <h4 className="text-xl font-medium text-black">Accepted Task</h4>
      </div>

      <div className="flex w-[25%] min-w-[105px] flex-col items-center justify-center rounded-xl bg-red-400 px-8 py-6">
        <h1 className="text-3xl font-semibold">
          {loggedInUserData?.taskCounts.failed}
        </h1>
        <h4 className="text-xl font-medium">Failed Task</h4>
      </div>
    </div>
  );
}

export default TaskListNumbers;
