import React from "react";

function FailedTask({ data }) {
  return (
    <div className="h-full w-[300px] flex-shrink-0 overflow-hidden rounded-xl bg-yellow-400 p-5">
      <div className="flex items-center justify-between">
        <h3 className="rounded bg-red-600 px-3 py-2 text-sm">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="mt-2 text-sm">{data.taskDescription}</p>

      <div className="mt-4">
        <button className="w-full rounded bg-red-600 px-2 py-1 text-sm">
          Complete
        </button>
      </div>
    </div>
  );
}

export default FailedTask;
