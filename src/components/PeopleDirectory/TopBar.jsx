import React from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";

function TopBar() {
  return (
    <>
      <Container>
        <Row className="border-bottom py-2">
          <Col lg={6} className="d-flex align-items-center">
            <h3 className="me-3">Team Members </h3>
            <Badge bg="primary">Primary</Badge>
          </Col>

          <Col lg={6} className="d-flex justify-content-end">
            <input
              type="Search"
              placeholder=" Search "
              className="border p-1 rounded me-3"
            />
            <Button> + ADD Member</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TopBar;
