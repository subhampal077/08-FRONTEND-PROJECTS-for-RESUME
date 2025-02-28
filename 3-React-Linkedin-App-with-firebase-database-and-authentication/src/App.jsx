import React, { useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/slices/userSlice";
import Login from "./components/Login";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in
        // console.log(userAuth);
        dispatch(
          login({
            email: userAuth.email,
            displayName: userAuth.displayName,
            uid: userAuth.uid,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
        // user is logged out
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
