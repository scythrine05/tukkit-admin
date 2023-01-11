import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListItem from "../components/ListItem";

import styles from "../styles/Home.module.css";

function ListsContainer() {
  return (
    <ListGroup className={styles.list_group}>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </ListGroup>
  );
}

export default ListsContainer;
