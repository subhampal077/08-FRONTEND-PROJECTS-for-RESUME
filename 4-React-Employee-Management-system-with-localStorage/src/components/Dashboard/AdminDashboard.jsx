import React from "react";
import Header from "../Dashboard_body/Header";
import CreateTask from "../Dashboard_body/CreateTask";
import AllTask from "../Dashboard_body/AllTask";

function AdminDashboard({ loggedInUserData, setUser }) {
  return (
    <div className="p-10">
      <Header setUser={setUser} loggedInUserData={loggedInUserData} />
      <CreateTask loggedInUserData={loggedInUserData} />
      <AllTask loggedInUserData={loggedInUserData} />
    </div>
  );
}

export default AdminDashboard;
