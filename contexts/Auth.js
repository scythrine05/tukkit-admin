import React from "react";

import { getAuth, signOut } from "firebase/auth";

export const authContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const auth = getAuth();

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
