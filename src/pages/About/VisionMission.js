import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import visionMission from "../../images/VisionMission_50.jpg";

import "./visionMission.css";

const VisionMission = () => {
  return (
    <Container fluid className="vision-mission">
      <Row className="px-5 py-5">
        <Col md={{ span: 5, offset: 1 }}>
          <h1 className="fw-bold">Our Vision</h1>
          <h3>
            To create a talent pool for Innovative Digital Transformation
            initiatives, locally.
          </h3>
        </Col>
        <Col md={5}>
          <h1 className="fw-bold">Our Mission</h1>
          <h3>
            Provide aspiring candidates with a launch pad into a successful and
            well-paid career for Digital Transformation.
          </h3>
        </Col>
        {/* <Col style={{ alignContent: "center", alignItems: "center" }}>
          <img src={visionMission} alt="visionMission" />
        </Col> */}
      </Row>
    </Container>
  );
};

export default VisionMission;
