import React from "react";
import { Button, Col, Image, ListGroup, Row } from "react-bootstrap";
import ProductsCard from "../Cards/ProductsCard";

const ChatComponent = ({ messages, typingMessage, products, onSeeMore }) => {
  return (
    <div className="d-flex flex-column chat-layout w-100">
      <Row className="flex-grow-1 w-100">
        <Col className="w-100">
          <ListGroup variant="flush" className="no-scrollbar ">
            {messages.map((msg, index) => (
              <ListGroup.Item
                key={index}
                className={`d-flex  ${
                  msg.align === "right"
                    ? "justify-content-end"
                    : "justify-content-start"
                }`}
              >
                <div className="chat-body d-flex p-3 rounded-5">
                  {msg.align === "left" && (
                    <Image
                      src={msg.image}
                      roundedCircle
                      className="me-2 bg-white"
                      style={{ width: "70px", height: "70px" }}
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
                      style={{ width: "70px", height: "70px" }}
                    />
                  )}
                </div>
              </ListGroup.Item>
            ))}
            {typingMessage && (
              <ListGroup.Item className="d-flex justify-content-start">
                <Image
                  src={typingMessage.image}
                  roundedCircle
                  className="me-2"
                  style={{ width: "50px", height: "50px" }}
                />
                <div
                  className="chat-body d-flex flex-column rounded-5 p-3 text-left"
                  style={{ maxWidth: "70%" }}
                >
                  <div>
                    <strong>{typingMessage.sender}: </strong>
                    {typingMessage.text}
                  </div>
                </div>
              </ListGroup.Item>
            )}
            {!typingMessage && products && products.length > 0 && (
              <ListGroup.Item className="d-flex flex-column align-items-center w-100">
                <div>
                  <Row className="d-flex w-100 justify-content-center gap-3">
                    <Col className="d-flex w-80  ">
                      {products.slice(0, 3).map((product) => (
                        <Col key={product.id} xs={12} md={4} className="mb-3">
                          <ProductsCard product={product} />
                        </Col>
                      ))}
                      <div className="align-self-end">
                        <Button
                          variant="dark"
                          onClick={onSeeMore}
                          className="text-white btn-chat"
                        >
                          See More
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ChatComponent;
