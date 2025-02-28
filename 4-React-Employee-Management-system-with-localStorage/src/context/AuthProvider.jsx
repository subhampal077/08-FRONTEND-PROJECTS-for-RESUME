import React, { createContext, useContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = getLocalStorage();
    setUserData(data);

    if (data && data?.employees?.length > 0 && data?.admin?.length > 0) {
      return;
    } else {
      setLocalStorage();
    }
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
