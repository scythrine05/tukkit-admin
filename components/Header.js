import React from "react";
import { Button } from "react-bootstrap";

//Components
import DropDown from "./DropDown";

//Contexts
import { authContext } from "../contexts/Auth";

export default function Header() {
  const { user, SignOut } = React.useContext(authContext);
  return (
    <header>
      <h3>tukkit</h3>
      {user ? <DropDown email={user.email} signout={SignOut} /> : null}
    </header>
  );
}
