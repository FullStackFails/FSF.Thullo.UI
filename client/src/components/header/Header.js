import React from "react";

import { Row, Col } from "react-bootstrap";

import logo from "../../logo.svg";

const Header = ({ children }) => (
  <Row style={{ backgroundColor: "#EEEEEE" }}>
    <Col className="d-flex align-items-center">
      <img src={logo} alt="logo" />
    </Col>
    <Col className="d-flex justify-content-end align-items-center">
      {children}
    </Col>
  </Row>
);

export default Header;
