import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useTheme } from "../context/ThemeContext";
import { colors } from "../colors";
import { useWindowWidth } from "../context/WidthContext";

// eslint-disable-next-line react/prop-types
const Clear = ({ fxn }) => {
  const { darkTheme: dark } = useTheme();
  const { windowWidth: width, collapsed } = useWindowWidth();

  const buttonStyle = {
    top: 10,
    position: "fixed",
    left: collapsed
      ? "10px"
      : `calc(${
          width >= 1200
            ? "20vw"
            : width >= 768
              ? "30vw"
              : width >= 576
                ? "40vw"
                : "50vw"
        } + 10px)`,
    background: dark ? colors.red : colors.white,
    color: dark ? colors.white : colors.black,
  };

  return (
    <Button type="primary" onClick={fxn} style={buttonStyle}>
      {width < 580 && !collapsed ? <DeleteOutlined /> : "Clear Chats"}
    </Button>
  );
};

export default Clear;
