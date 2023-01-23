import React from "react";

import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export const authContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unlisten = auth.onAuthStateChanged((userData) => {
      userData
        ? setUser({
            email: userData.email,
            uid: userData.uid,
          })
        : setUser(null);
    });
    return () => unlisten();
  }, []);

  const SignOut = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.error(error));
  };

  return (
    <authContext.Provider value={{ user, SignOut }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
