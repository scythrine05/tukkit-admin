import React from "react";
import Form from "react-bootstrap/Form";

export default function FormComponent({ type }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicDisplay">
        <Form.Label>Display Image</Form.Label>
        <div style={{ display: "flex" }}>
          <Form.Control type="text" placeholder="Image Url" />
          <Form.Text
            style={{ marginLeft: 10, marginRight: 10, alignItems: "center" }}
          >
            or
          </Form.Text>
          <Form.Control type="file" />
        </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" />
      </Form.Group>
      {type === "cover" ? null : (
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            style={{ resize: "none" }}
            placeholder="Description"
          />
        </Form.Group>
      )}
      <Form.Group className="mb-3" controlId="formBasicSource">
        <Form.Label>Source</Form.Label>
        <Form.Control type="text" placeholder="Source" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSource">
        <Form.Label>Source Url</Form.Label>
        <Form.Control type="text" placeholder="Url" />
      </Form.Group>
    </Form>
  );
}
