import React from "react";
import Image from "next/image";
import { Modal, Button } from "react-bootstrap";

import styles from "../styles/Home.module.css";

//Containers
import Form from "../containers/Form";

//Icons
import { AiFillDelete } from "react-icons/ai";
import { BiShowAlt } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import { IoCloseSharp, IoSend } from "react-icons/io5";

export default function ModalComponent(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={styles.modal_header}>
        {props.method === "add" ? (
          <h3>New Post</h3>
        ) : (
          <img
            className={styles.modal_display}
            src={props.data.display}
            alt="display"
          />
        )}
      </Modal.Header>
      <Modal.Body closeButton>
        {props.method === "add" ? (
          <Form type={props.type} />
        ) : (
          <>
            <h4 className={styles.modal_title}>{props.data.title}</h4>
            <p className={styles.modal_desc}>{props.data.description}</p>
            <a target="__blank" href={props.data.url}>
              <p className={styles.modal_source}>{props.data.source}</p>
            </a>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        {props.method === "add" ? (
          <Button className={styles.button_round} variant="primary">
            <IoSend />
          </Button>
        ) : (
          <>
            <Button className={styles.button_round} variant="danger">
              <AiFillDelete />
            </Button>
            <Button className={styles.button_round} variant="primary">
              <BsPencilSquare />
            </Button>
            <Button
              className={styles.button_round}
              variant="secondary"
              onClick={props.onHide}
            >
              <IoCloseSharp />
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
}
