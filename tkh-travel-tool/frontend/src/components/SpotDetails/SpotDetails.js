import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fakeData } from "../../fakeData/fakeData";
import Hotels from "../Hotels/Hotels";
import SpotMap from "../SpotMap/SpotMap";

const SpotDetails = () => {
  let { id } = useParams();
  const destination = fakeData.find((pd) => pd.id.toString() === id.toString());
  return (
    <Container>
      <Row>
        <Col>
          <h3 style={{ marginBottom: "20px" }}>Stay in {destination.name}</h3>
          <Hotels></Hotels>
        </Col>
        <Col style={{ marginBottom: "20px" }}>
          <h3 style={{ marginBottom: "20px" }}>
            This is the map of hotels in {destination.name}
          </h3>
          <SpotMap id={id}></SpotMap>
        </Col>
      </Row>
    </Container>
  );
};

export default SpotDetails;
