import { createElement } from "react";
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
import { useTheme } from "./context/ThemeContext";
import { useWindowWidth } from "./context/WidthContext";
import { colors } from "./colors";

const App = () => {
  const NAME = "Ankur Pandey";
  const IMAGE = "https://picsum.photos/200/200?grayscale&random=1";

  const { Content, Sider } = Layout;

  const { darkTheme: dark } = useTheme();
  const { windowWidth: width, collapsed, setCollapsed } = useWindowWidth();

  const getMenuWidth = () => {
    if (width >= 1200) return "20vw";
    if (width >= 768) return "30vw";
    if (width >= 576) return "40vw";
    return "50vw";
  };

  const menuItems = [
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

  const getDynamicStyle = () => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
    backgroundColor: dark ? colors.black : colors.white_100,
  });

  const getMenuStyle = () => ({
    border: "none",
    backgroundColor: dark ? colors.black : colors.white_100,
  });

  const getBottomBarStyle = () => ({
    position: "fixed",
    bottom: 0,
  });

  return (
    <Layout style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
        width={getMenuWidth()}
        style={getDynamicStyle()}
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
          <Menu
            id="darkMenu"
            style={getMenuStyle()}
            theme={dark ? "dark" : "light"}
            mode="inline"
            items={menuItems}
            selectedKeys={["1"]}
          />
        </div>
        <div style={getBottomBarStyle()}>
          <div
            style={{
              ...getBottomBarStyle(),
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 10px",
              width: getMenuWidth(),
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar src={IMAGE} />
              <span
                style={{
                  color: dark ? colors.white : colors.dark_blue,
                  fontWeight: 600,
                  margin: "0 10px",
                }}
              >
                {NAME}
              </span>
            </div>
            {width > 479 && (
              <div>
                <Button
                  type="primary"
                  icon={<SettingOutlined />}
                  shape="circle"
                  onClick={() => message.error("Cannot Open Settings!")}
                  style={{ backgroundColor: colors.green, marginRight: 10 }}
                />
                <Button
                  type="primary"
                  icon={<LogoutOutlined />}
                  shape="circle"
                  onClick={() => message.error("Cannot Logout!")}
                  style={{ backgroundColor: colors.red }}
                />
              </div>
            )}
          </div>
        </div>
      </Sider>
      <Layout>
        <Content style={{ margin: 0 }}>
          <ChatApp />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
