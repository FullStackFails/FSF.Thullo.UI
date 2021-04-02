import React, { useState, useEffect } from "react";

// Bootstrap
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

// Custom
import AddBoardModal from "../../components/addBoardModal/AddBoardModal";

//Resources
import styles from "./myBoards.module.css";
import boardImage from "../../images/board_default_image.jpg";

//API
import { getBoards } from "../../api/thulloApi";

const MyBoards = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [boards, setBoards] = useState([]);
  const [isAddBoardModalOpen, setIsAddBoardModalOpen] = useState(false);

  useEffect(() => {
    async function getData() {
      let response = await getBoards();
      setBoards(response);
      setIsLoading(false);
    }
    if (!isAddBoardModalOpen) {
      getData();
    }
  }, [isAddBoardModalOpen]);

  return (
    <>
      {/* Display Add Board Button */}
      <Row className={styles.row}>
        <Col className="d-flex justify-content-end">
          <Button onClick={() => setIsAddBoardModalOpen(true)}>
            Add Board
          </Button>
        </Col>
      </Row>
      {/* Display Board Cards */}
      <Row className={styles.row} md={4}>
        {isLoading ? (
          <div className={styles.loader}>
            <Spinner animation="border" variant="secondary" />
          </div>
        ) : (
          boards.map((b) => (
            <Col key={b.id}>
              <Card style={{ width: "16rem" }} className={styles.card}>
                <Card.Img variant="top" src={boardImage} />
                <Card.Body>
                  <Card.Title>{b.title}</Card.Title>
                  <Card.Text>{b.description}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>

      <AddBoardModal
        show={isAddBoardModalOpen}
        handleClose={() => setIsAddBoardModalOpen(false)}
      />
    </>
  );
};

export default MyBoards;
