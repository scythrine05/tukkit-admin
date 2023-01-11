import React from "react";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";

//BootStrap
import { Container, Row } from "react-bootstrap";

const data = [
  {
    title:
      "Hello My name is Something you want to know, and that is the news. I just want to tell you the world is going to end.",
    description:
      "Hello My name is Something you want to know, and that is the news. I just want to tell you the world is going to end.Hello My name is Something you want to know, and that is the news. I just want to tell you the world is going to end.Hello My name is Something you want to know, and that is the news. I just want to tell you the world is going to end.",
    display:
      "https://images.indianexpress.com/2022/12/apple-japan-investment.jpg",
    source: "Economic Times",
    type: "post",
    url: "https://hey.com",
  },
  {
    title: "Hello",
    description: "Hey there it is what it is",
    display:
      "https://images.indianexpress.com/2022/12/apple-japan-investment.jpg",
    source: "Economic Times",
    type: "post",
    url: "https://hey.com",
  },
  {
    title: "Hello",
    description: "Hey there it is what it is",
    display:
      "https://images.indianexpress.com/2022/12/apple-japan-investment.jpg",
    source: "Economic Times",
    type: "post",
    url: "https://hey.com",
  },
  {
    title: "Hello",
    description: "Hey there it is what it is",
    display:
      "https://images.indianexpress.com/2022/12/apple-japan-investment.jpg",
    source: "Economic Times",
    type: "post",
    url: "https://hey.com",
  },
  {
    title: "Hello",
    description: "Hey there it is what it is",
    display:
      "https://images.indianexpress.com/2022/12/apple-japan-investment.jpg",
    source: "Economic Times",
    type: "post",
    url: "https://hey.com",
  },
  {
    title: "Hello",
    description: "Hey there it is what it is",
    display:
      "https://images.indianexpress.com/2022/12/apple-japan-investment.jpg",
    source: "Economic Times",
    type: "post",
    url: "https://hey.com",
  },
  {
    title: "Hello",
    description: "Hey there it is what it is",
    display:
      "https://images.indianexpress.com/2022/12/apple-japan-investment.jpg",
    source: "Economic Times",
    type: "post",
    url: "https://hey.com",
  },
  {
    title: "Hello",
    description: "Hey there it is what it is",
    display:
      "https://images.indianexpress.com/2022/12/apple-japan-investment.jpg",
    source: "Economic Times",
    type: "post",
    url: "https://hey.com",
  },
  {
    title: "Hello",
    description: "Hey there it is what it is",
    display:
      "https://images.indianexpress.com/2022/12/apple-japan-investment.jpg",
    source: "Economic Times",
    type: "post",
    url: "https://hey.com",
  },
  {
    title: "Hello",
    description: "Hey there it is what it is",
    display:
      "https://images.indianexpress.com/2022/12/apple-japan-investment.jpg",
    source: "Economic Times",
    type: "post",
    url: "https://hey.com",
  },
];

export default function Cards() {
  return (
    <Container>
      <Row md={2}>
        {data.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </Row>
    </Container>
  );
}
