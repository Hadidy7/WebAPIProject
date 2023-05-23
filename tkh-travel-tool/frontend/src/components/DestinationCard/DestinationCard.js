import React from "react";
import { Button, Card, Col, Container, Nav, Row } from "react-bootstrap";
import "./DestinationCard.css";
import { Link } from "react-router-dom";

const Destination = (props) => {
  // console.log(props);
  const { image, name, description, id } = props.destination;
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Link to={"/destination/" + id}>
                {
                  <Card className="bg-dark text-white">
                    <Card.Img
                      className="cardImage"
                      src={image}
                      alt="Card image"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>{name}</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                }
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Destination;
