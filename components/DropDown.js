import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import styles from "../styles/Home.module.css";

//Icons
import { TiUser } from "react-icons/ti";

export default function DropDown(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle
        className={styles.button_round}
        id="dropdown-button-dark"
        variant="dark"
      />

      <Dropdown.Menu variant="dark">
        <Dropdown.Item disabled>{props.email}</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={props.signout}>Sign Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
