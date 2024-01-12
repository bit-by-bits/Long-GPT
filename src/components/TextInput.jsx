import { Button, Input } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { useTheme } from "../context/ThemeContext";
import { useWindowWidth } from "../context/WidthContext";
import { colors } from "../colors";

// eslint-disable-next-line react/prop-types
const TextInput = ({ input, change, send }) => {
  const { TextArea } = Input;
  const { darkTheme: dark } = useTheme();
  const { windowWidth: width, collapsed } = useWindowWidth();

  const handleKeyPress = e => {
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      const currentValue = e.target.value;
      const cursorPosition = e.target.selectionStart;
      const newValue =
        currentValue.substring(0, cursorPosition) +
        "\n" +
        currentValue.substring(cursorPosition);

      change({ target: { value: newValue } });
    } else if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const inputStyle = {
    flex: 1,
    marginRight: "10px",
    borderRadius: 20,
    background: "transparent",
    border: `1px solid ${dark ? "rgba(256, 256, 256, 0.25)" : "#d9d9d9"}`,
    color: dark ? colors.white : colors.black,
    overflowX: "hidden",
    overflowY: "auto",
    boxShadow: "none",
  };

  const containerStyle = {
    position: "fixed",
    bottom: 0,
    padding: "20px",
    display: "flex",
    maxHeight: "100px",
    width: collapsed
      ? "100vw"
      : width >= 1200
        ? "80vw"
        : width >= 768
          ? "70vw"
          : width >= 576
            ? "60vw"
            : "50vw",
    alignItems: "center",
    background: dark ? colors.grey_100 : colors.white_200,
    color: dark ? colors.white : colors.black,
  };

  return (
    <div style={containerStyle}>
      <TextArea
        id={dark ? "greyHolder" : ""}
        placeholder={`Type ${width < 480 && !collapsed ? "here" : "a message"}`}
        autoSize={{ minRows: 1, maxRows: 1 }}
        style={inputStyle}
        value={input}
        onChange={change}
        onKeyDown={handleKeyPress}
      />
      <Button
        type="primary"
        style={{ backgroundColor: dark ? colors.green : colors.purple }}
        shape="circle"
        icon={<SendOutlined />}
        onClick={send}
      />
    </div>
  );
};

export default TextInput;
