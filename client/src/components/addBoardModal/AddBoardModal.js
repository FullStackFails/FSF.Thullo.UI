import React, { useState } from "react";

// Bootstrap
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";

//Resources
import boardImage from "../../images/board_default_image.jpg";
import styles from "./AddBoardModal.module.css";

//API
import { addBoard } from "../../api/thulloApi";

const AddBoardModal = ({ show, handleClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    async function send(title, description) {
      console.log(title, description);
      await addBoard(title, description);
      setTitle("");
      setDescription("");
      handleClose();
    }
    send(title, description);
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="sm">
      <Modal.Header closeButton>
        <Modal.Title>Create a new Board</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="board">
              <img src={boardImage} className={styles.image} alt="Board" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="boardTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                as="input"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="boardDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddBoardModal;
