import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "../styles/Home.module.css";

//Components
import Modal from "./Modal";

function CardComponent({ item }) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <React.Fragment>
      <Modal data={item} show={modalShow} onHide={() => setModalShow(false)} />
      <Card className={styles.card} onClick={() => setModalShow(true)}>
        <Card.Body className={styles.card_body}>
          <Card.Img
            variant="top"
            src={item.display}
            className={styles.card_display}
          />
          <Card.Title className={styles.card_title}>
            {item.title.length > 75
              ? item.title.substring(0, 75) + "..."
              : item.title}
          </Card.Title>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          ></div>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default CardComponent;
