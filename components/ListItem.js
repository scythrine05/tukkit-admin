import React from "react";
import { ListGroup, Button } from "react-bootstrap";

//Icons
import { AiFillDelete } from "react-icons/ai";

import styles from "../styles/Home.module.css";

export default function ListItem() {
  return (
    <ListGroup.Item className={styles.list_item}>
      Cras justo odio
      <Button className={styles.button_round} variant="danger">
        <AiFillDelete />
      </Button>
    </ListGroup.Item>
  );
}
