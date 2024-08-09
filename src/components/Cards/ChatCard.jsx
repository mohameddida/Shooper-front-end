import React from "react";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";

const ChatComponent = ({ messages, typingMessage }) => {
  return (
    <Container fluid className="vh-100 d-flex flex-column">
      <Row className="flex-grow-1 overflow-auto">
        <Col>
          <ListGroup variant="flush" >
            {messages.map((msg, index) => (
              <ListGroup.Item
                key={index}
                className={`d-flex ${
                  msg.align === "right"
                    ? "justify-content-end"
                    : "justify-content-start"
                }`}
              >
                {msg.align === "left" && (
                  <Image
                    src={msg.image}
                    roundedCircle
                    className="me-2"
                    style={{ width: "50px", height: "50px" }}
                  />
                )}
                <div
                  className={`chat-body d-flex flex-column rounded-5 p-3 text-${msg.align}`}
                  style={{ maxWidth: "70%" }}
                >
                  <div>
                    <strong>{msg.sender}: </strong> {msg.text}
                  </div>
                </div>
                {msg.align === "right" && (
                  <Image
                    src={msg.image}
                    roundedCircle
                    className="ms-2"
                    style={{ width: "50px", height: "50px" }}
                  />
                )}
              </ListGroup.Item>
            ))}
            {typingMessage && (
              <ListGroup.Item className={`d-flex justify-content-start`}>
                <Image
                  src={typingMessage.image}
                  roundedCircle
                  className="me-2"
                  style={{ width: "50px", height: "50px" }}
                />
                <div
                  className={`chat-body d-flex flex-column rounded-5 p-3 text-left`}
                  style={{ maxWidth: "70%" }}
                >
                  <div>
                    <strong>{typingMessage.sender}: </strong>{" "}
                    {typingMessage.text}
                  </div>
                </div>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatComponent;
