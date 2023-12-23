import { createElement, useState } from "react";
import {
  MessageOutlined,
  PlusCircleOutlined,
  UpSquareOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Avatar, Button, message } from "antd";
import ChatApp from "./components/ChatApp";
import logo from "./assets/logo.png";

const App = () => {
  const dummyAvatarImage = "https://picsum.photos/200/200?grayscale&random=1";
  const dummyName = "Ankur Pandey";

  const { Content, Sider } = Layout;

  const pastConversationItems = [
    {
      key: "1",
      icon: createElement(MessageOutlined),
      label: "Message LongGPT",
    },
    {
      key: "2",
      icon: createElement(PlusCircleOutlined),
      label: "Create New Chat",
      disabled: true,
    },
    {
      key: "3",
      icon: createElement(UpSquareOutlined),
      label: "Buy Pro Version",
      disabled: true,
    },
  ];

  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <Layout style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        width="20%"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
          backgroundColor: darkTheme ? "black" : "#F8FAFC",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "64px",
              marginBottom: "24px",
            }}
          >
            <img src={logo} height={40} alt="Logo" />
          </div>
          {darkTheme ? (
            <Menu
              id="darkMenu"
              style={{ border: "none", backgroundColor: "black" }}
              theme="dark"
              mode="inline"
              items={pastConversationItems}
              selectedKeys={["1"]}
            />
          ) : (
            <Menu
              style={{ border: "none", backgroundColor: "#F8FAFC" }}
              mode="inline"
              items={pastConversationItems}
              selectedKeys={["1"]}
            />
          )}
        </div>
        <div style={{ position: "fixed", bottom: 0, width: "20%" }}>
          <div
            style={{
              position: "fixed",
              bottom: 0,
              width: "20%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar src={dummyAvatarImage} style={{ marginRight: "8px" }} />
              <span
                style={{
                  color: darkTheme ? "white" : "#1B254B",
                  fontWeight: 600,
                }}
              >
                {dummyName}
              </span>
            </div>
            <div>
              <Button
                type="primary"
                icon={<SettingOutlined />}
                shape="circle"
                onClick={() => message.error("Cannot Open Settings!")}
                style={{ backgroundColor: "#1a7f64", marginRight: 10 }}
              />
              <Button
                type="primary"
                icon={<LogoutOutlined />}
                shape="circle"
                onClick={() => message.error("Cannot Logout!")}
                style={{ backgroundColor: "#ef4444" }}
              />
            </div>
          </div>
        </div>
      </Sider>
      <Layout>
        <Content style={{ margin: 0 }}>
          <ChatApp dark={darkTheme} toggle={toggleTheme} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
