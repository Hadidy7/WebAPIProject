import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fakeData } from "../../fakeData/fakeData";
import Booking from "../Booking/Booking";

const DestinationDetails = () => {
  let { destinationId } = useParams();
  const destination = fakeData.find(
    (pd) => pd.id.toString() === destinationId.toString()
  );
  // console.log(destination);
  return (
    <div style={{ marginTop: "80px" }}>
      <Container>
        <Row>
          <Col style={{ paddingRight: "100px" }}>
            <h1 style={{ textTransform: "upperCase" }}>{destination.name}</h1>
            <p>
              <small>{destination.description}</small>
            </p>
          </Col>
          <Col>
            <Booking destinationId={destinationId}></Booking>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DestinationDetails;
