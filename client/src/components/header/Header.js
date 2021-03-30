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
        <Button variant="primary">Login</Button>
      </Link>
      <Link to="/">
        <Button variant="outline-primary">Register</Button>
      </Link>
    </>
  );
};

const SecuredLinks = ({ history }) => {
  return (
    <Link to="/logout">
      <Button variant="outline-primary">Logout</Button>
    </Link>
  );
};

const Header = ({ isAuthorized }) => (
  <Row className={styles.header}>
    <Col className="d-flex align-items-center">
      <img src={logo} alt="logo" />
    </Col>
    <Col className="d-flex justify-content-end align-items-center">
      {isAuthorized ? <SecuredLinks /> : <UnsecuredLinks />}
    </Col>
  </Row>
);

export default Header;
