import React from "react";

import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import logo from "../../logo.svg";

import styles from "./Header.module.css";

const UnsecuredLinks = () => {
  return (
    <>
      <Link to="/login">
        <Button variant="primary" className={styles.button}>
          Login
        </Button>
      </Link>
      <Link to="/">
        <Button variant="outline-primary" className={styles.button}>
          Register
        </Button>
      </Link>
    </>
  );
};

const SecuredLinks = ({ history }) => {
  return (
    <Link to="/logout">
      <Button variant="outline-primary" className={styles.button}>
        Logout
      </Button>
    </Link>
  );
};

const NavLinks = () => {
  return (
    <>
      <Link className={styles.link} to="">
        Home
      </Link>
      <Link className={styles.link} to="myBoards">
        My Boards
      </Link>
    </>
  );
};

const Header = ({ isAuthorized }) => (
  <Row className={styles.header}>
    <Col className="d-flex align-items-center" md={{ span: 2 }}>
      <img src={logo} alt="logo" className={styles.image} />
    </Col>
    {isAuthorized && (
      <Col className="d-flex align-items-center">
        <NavLinks />
      </Col>
    )}
    <Col className="d-flex justify-content-end align-items-center">
      {isAuthorized ? <SecuredLinks /> : <UnsecuredLinks />}
    </Col>
  </Row>
);

export default Header;
