import { useState, useRef, useEffect } from "react";
import { List } from "antd";
import "antd/dist/reset.css";
import moment from "moment";
import Toggle from "./Toggle";
import TextInput from "./TextInput";
import Clear from "./Clear";
import generateContent from "../api/post";
import { useTheme } from "../context/ThemeContext";
import { colors } from "../colors";

// eslint-disable-next-line react/prop-types
const ChatApp = () => {
  const { darkTheme: dark } = useTheme();

  const chatWindowRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    return savedMessages
      ? JSON.parse(savedMessages)
      : [
          {
            id: 1,
            text: "Hello! How can I assist you today?",
            isBot: true,
            timestamp: Date.now(),
          },
        ];
  });

  useEffect(() => {
    if (chatWindowRef.current)
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const handleMessageSend = async () => {
    if (inputValue.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        isBot: false,
        timestamp: Date.now(),
      };
      setMessages([...messages, newMessage]);
      setInputValue("");

      try {
        const botResponse = await generateContent(inputValue);
        const botReply = {
          id: messages.length + 2,
          text: botResponse.content || "Sorry, I couldn't understand that.",
          isBot: true,
          timestamp: Date.now(),
        };
        setMessages(prevMessages => [...prevMessages, botReply]);
      } catch (error) {
        console.error("Error generating bot response:", error.message);
        const botReply = {
          id: messages.length + 2,
          text: "Sorry, I encountered an error. Please try again.",
          isBot: true,
          timestamp: Date.now(),
        };
        setMessages(prevMessages => [...prevMessages, botReply]);
      }
    }
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hello! How can I assist you today?",
        isBot: true,
        timestamp: Date.now(),
      },
    ]);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: dark ? colors.grey_100 : colors.white_200,
        color: dark ? colors.white : colors.black,
      }}
    >
      <div
        ref={chatWindowRef}
        style={{
          flex: "1",
          overflowY: "auto",
          padding: "20px 24px 100px 24px",
          paddingBottom: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::WebkitScrollbar": { display: "none" },
        }}
      >
        <List
          itemLayout="horizontal"
          dataSource={messages}
          renderItem={message => (
            <div
              style={{
                display: "flex",
                justifyContent: message.isBot ? "flex-start" : "flex-end",
                marginBottom: "10px",
                wordBreak: "break-word",
              }}
            >
              <div
                style={{
                  backgroundColor: message.isBot
                    ? dark
                      ? colors.grey_200
                      : colors.darkblue_200
                    : dark
                      ? colors.grey_300
                      : colors.purple,
                  color: colors.white,
                  padding: "10px 15px",
                  borderRadius: "10px",
                  maxWidth: `${message.text.length > 100 ? "90%" : "70%"}`,
                }}
              >
                {message.text}

                <div
                  style={{
                    fontSize: "10px",
                    textAlign: "right",
                    marginTop: "6px",
                  }}
                >
                  {moment(message.timestamp).format("LT")}
                </div>
              </div>
            </div>
          )}
        />
      </div>
      <TextInput
        input={inputValue}
        change={handleInputChange}
        send={handleMessageSend}
      />
      <Clear fxn={handleClearChat} />
      <Toggle />
    </div>
  );
};

export default ChatApp;
