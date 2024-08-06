import React from "react";
import { Card } from "react-bootstrap";

const SuggetionCard = ({ infos }) => {
  return (
    <Card className="suggestion-card" key={infos.id}>
      <Card.Link href={infos.url}>
        <Card.Body>
          <Card.Text>{infos.title}</Card.Text>
        </Card.Body>
      </Card.Link>
    </Card>
  );
};

export default SuggetionCard;
