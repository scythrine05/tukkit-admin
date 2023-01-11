import React from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
import styles from "../styles/Home.module.css";

//utilities
import { SignIn } from "../utilities/EmailAuth";
import { AUTH_ERROR, EMAIL_EMPTY, PASSWORD_EMPTY } from "../utilities/Strings";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (!email || !password)
      !email ? setError(EMAIL_EMPTY) : setError(PASSWORD_EMPTY);
    else SignIn(email, password).catch((e) => setError(AUTH_ERROR));
  };

  return (
    <Container className={styles.login_container}>
      <Form className={styles.login_form} onSubmit={handleSubmit}>
        {error ? <Alert variant={"danger"}>{error}</Alert> : null}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder={"Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}
