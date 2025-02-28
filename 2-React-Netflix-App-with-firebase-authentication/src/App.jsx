import React, { useEffect } from "react";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import ErrorPage from "./components/ErrorPage";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./dbFIrebase/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./components/ProfileScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    // Set up the onAuthStateChanged listener provided by firebase
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user Logged in
        // console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // user Logged out
        dispatch(logout());
      }
    });

    // Cleanup function
    return () => {
      unsubscribe();
      // Remove the onAuthStateChanged listener when the component unmounts
    };
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? <HomeScreen /> : <LoginScreen />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/profile",
      element: user ? <ProfileScreen /> : <LoginScreen />,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
