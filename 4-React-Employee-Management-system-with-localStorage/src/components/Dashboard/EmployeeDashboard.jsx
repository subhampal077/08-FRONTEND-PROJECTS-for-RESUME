import React from "react";
import Header from "../Dashboard_body/Header";
import TaskListNumbers from "../Dashboard_body/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard({ loggedInUserData, setUser }) {
  return (
    <div className="h-screen bg-[#1C1C1C] p-10">
      <Header setUser={setUser} loggedInUserData={loggedInUserData} />
      <TaskListNumbers loggedInUserData={loggedInUserData} />
      <TaskList loggedInUserData={loggedInUserData} />
    </div>
  );
}

export default EmployeeDashboard;
