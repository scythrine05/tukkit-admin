import React from "react";
import styles from "../styles/Home.module.css";

//Bootstarp
import { Button, Col, Nav, Row, Tab, Tabs } from "react-bootstrap";

//Containers
import Cards from "../containers/Cards";
import ListsContainer from "../containers/ListsContainer";

//Components
import Modal from "../components/Modal";

//Icons
import {
  AiOutlinePlus,
  AiFillHome,
  AiFillCopy,
  AiFillBook,
  AiFillBulb,
} from "react-icons/ai";

function Navigation() {
  const [modalShow, setModalShow] = React.useState(false);
  const [type, setType] = React.useState("");

  return (
    <React.Fragment>
      <Modal
        method="add"
        type={type}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Tab.Container id="left-tabs-example" defaultActiveKey="post">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className={styles.nav}>
              <Nav.Item className={styles.nav_item}>
                <Nav.Link eventKey="post" className={styles.nav_link}>
                  <AiFillCopy style={{ marginRight: 5 }} /> Posts
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.nav_item}>
                <Nav.Link eventKey="cover" className={styles.nav_link}>
                  <AiFillBook style={{ marginRight: 5 }} /> Covers
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.nav_item}>
                <Nav.Link eventKey="feedback" className={styles.nav_link}>
                  <AiFillBulb style={{ marginRight: 5 }} /> Feedback
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="post">
                <Button
                  className={styles.button}
                  onClick={() => {
                    setType("post");
                    setModalShow(true);
                  }}
                >
                  <AiOutlinePlus /> New Post
                </Button>
                <Cards />
              </Tab.Pane>
              <Tab.Pane eventKey="cover">
                <Button
                  className={styles.button}
                  onClick={() => {
                    setType("cover");
                    setModalShow(true);
                  }}
                >
                  <AiOutlinePlus /> New Cover
                </Button>
                <Cards />
              </Tab.Pane>
              <Tab.Pane eventKey="feedback">
                <ListsContainer />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </React.Fragment>
  );
}

export default Navigation;
