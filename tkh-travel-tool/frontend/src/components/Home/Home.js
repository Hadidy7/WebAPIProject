import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import TravelPlanner from "../TravelPlanner/TravelPlanner";
import DestinationShortDetails from "../DestinationShortDetails/DestinationShortDetails";
import Destination from "../Destination/Destination";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Container style={{ marginTop: "30px" }}>
        <Row>
          <Col sm={12}>
            <div style={{ marginBottom: "4rem" }}>
            <TravelPlanner />
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col sm={4}>
            <DestinationShortDetails />
          </Col>
          <Col sm={8}>
            <Destination />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
