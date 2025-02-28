import React from "react";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import AcceptedTask from "./AcceptedTask";

function TaskList({ loggedInUserData }) {
  return (
    <div
      id="taskList"
      className="mt-10 flex h-[55%] w-full flex-nowrap items-center justify-start gap-5 overflow-x-auto rounded-xl py-5"
    >
      {loggedInUserData?.tasks.map((el, i) => {
        if (el.active) {
          return <AcceptedTask key={i} data={el} />;
        }
        if (el.newTask) {
          return <NewTask key={i} data={el} />;
        }
        if (el.completed) {
          return <CompleteTask key={i} data={el} />;
        }
        if (el.failed) {
          return <FailedTask key={i} data={el} />;
        }
      })}
      {/* <NewTask />
      <AcceptTask />
      <CompleteTask />
      <FailedTask /> */}
    </div>
  );
}

export default TaskList;
