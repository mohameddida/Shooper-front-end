import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import produt1 from "../asset/products/robe/1.jpg";
import produt2 from "../asset/products/robe/images (1).jpeg";
import produt3 from "../asset/products/robe/images (2).jpeg";
import produt4 from "../asset/products/robe/images.jpeg";
import SuggestionList from "../components/Cards/SuggestionList";
import ChatComponent from "../components/Chat/ChatComponent";
import SearchInput from "../components/inputs/SearchInput";
import NavBar from "../components/navBar/NavBar";
import "../styles/index.css";
const SearchLayout = () => {
  const userImage = "https://via.placeholder.com/70";
  const botImage = "https://via.placeholder.com/70";
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [typingMessage, setTypingMessage] = useState(null);

  const simulateTypingEffect = (text, sender, image) => {
    let index = 0;
    setTypingMessage({ text: "", sender, align: "left", image });

    const interval = setInterval(() => {
      setTypingMessage((prevMessage) => ({
        ...prevMessage,
        text: prevMessage.text + text[index],
      }));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text, sender, align: "left", image },
        ]);
        setTypingMessage(null);
      }
    }, 50);
  };

  const handleSend = (input) => {
    const newMessage = {
      text: input,
      sender: "You",
      align: "right",
      image: userImage,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    simulateTypingEffect(`Echo: ${input}`, "Bot", botImage);
  };
  const infos = [
    {
      id: 0,
      title: "Find the best deals on phone’s",
      url: "/results/products",
    },
    {
      id: 1,
      title: "What are the latest on Fashion",
      url: "/results/products",
    },
    {
      id: 2,
      title: "Show me top-rated Beauty & Health products",
      url: "/results/products",
    },
    {
      id: 3,
      title: "Get a trend report for Home & Kitchen",
      url: "/results/products",
    },
  ];
  const handleSeeMore = () => {
    navigate(`results/products/suggestion`);
  };

  const products = [
    {
      id: 0,
      img: produt1,
      name: "robe noire",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
      rate: 5,
      brand: "ZARA",
      price: 8.0,
    },
    {
      id: 1,
      img: produt2,
      name: "robe noire",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
      rate: 5,
      brand: "H&A",
      price: 4.0,
    },
    {
      id: 2,
      img: produt3,
      name: "robe noire",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
      rate: 5,
      brand: "H&A",
      price: 4.0,
    },
    {
      id: 3,
      img: produt4,
      name: "robe noire",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
      rate: 5,
      brand: "JUMIA",
      price: 2.0,
    },
  ];
  return (
    <Container className="d-flex flex-column p-3 h-100 w-100 ">
      <Row>
        <NavBar messages={messages} />
      </Row>
      <Container
        fluid
        className="search-Content d-flex flex-column align-items-center justify-content-center my-5"
      >
        <div className={messages.length === 0 ? "text-center" : "d-none"}>
          <h4>SHOOPER</h4>
        </div>
        {messages.length === 0 ? (
          <div className="d-flex justify-content-center align-items-center w-100 gap-5 ">
            <SuggestionList infos={infos} />
          </div>
        ) : (
          <ChatComponent
            messages={messages}
            typingMessage={typingMessage}
            products={products}
            onSeeMore={handleSeeMore}
          />
        )}

        <div
          className={
            messages.length === 0
              ? "col-md-8 my-3 d-flex align-items-center justify-content-center mx-auto py-1 px-2"
              : "fixed-bottom col-md-8 my-3 d-flex align-items-center justify-content-center mx-auto py-1 px-2"
          }
        >
          <SearchInput onSend={handleSend} />
        </div>
      </Container>
    </Container>
  );
};

export default SearchLayout;
