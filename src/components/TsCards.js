import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const TsCards = ({imgUrl,title,text}) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title> {title} </Card.Title>
          <Card.Text> {text} </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TsCards;
