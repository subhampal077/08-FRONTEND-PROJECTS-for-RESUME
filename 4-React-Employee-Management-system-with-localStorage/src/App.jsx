import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);
  // console.log(authData);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
      setUser(loggedInUser.role);
      setLoggedInUserData(loggedInUser.data);
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (authData) {
      const admin = authData.admin.find(
        (adminData) =>
          adminData.email == email && adminData.password == password,
      );

      const employee = authData.employees.find(
        (empData) => empData.email == email && empData.password == password,
      );

      if (admin) {
        setUser("admin");
        setLoggedInUserData(admin);

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "admin", data: admin }),
        );
      } else if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee }),
        );
      } else {
        alert("Invalid Credential");
      }
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "employee" ? (
        <EmployeeDashboard setUser={setUser} loggedInUserData={loggedInUserData} />
      ) : (
        ""
      )}
      {user === "admin" ? (
        <AdminDashboard setUser={setUser} loggedInUserData={loggedInUserData} />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
