import React from "react";

//Components
import Sidebar from "../components/Sidebar";
import Login from "../components/Login";

//Contexts
import { authContext } from "../contexts/Auth";

export default function Navigation({ children }) {
  const { user } = React.useContext(authContext);

  return (
    <React.Fragment>
      {user ? <Sidebar children={children} /> : <Login />}
    </React.Fragment>
  );
}
