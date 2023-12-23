import { Button, Input } from "antd";
import { SendOutlined } from "@ant-design/icons";

// eslint-disable-next-line react/prop-types
const TextInput = ({ dark, input, change, suggest, send }) => {
  const { TextArea } = Input;

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

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "80vw",
        maxHeight: "100px",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        background: dark ? "#343541" : "#EFF4F8",
        color: dark ? "#ffffff" : "#000000",
      }}
    >
      <TextArea
        placeholder="Type a message"
        autoSize={{ minRows: 1, maxRows: 5 }}
        style={{
          flex: 1,
          marginRight: "10px",
          borderRadius: 20,
          background: "transparent",
          border: `1px solid ${dark ? "#6c757d" : "#d9d9d9"}`,
          color: dark ? "#ffffff" : "#000000",
          overflowX: "hidden", // Hide x-scroll
          overflowY: "auto", // Show y-scroll
        }}
        value={input}
        onChange={change}
        onKeyDown={handleKeyPress}
      />
      <Button
        type="primary"
        style={{ backgroundColor: dark ? "#1a7f64" : "#6D60FF" }}
        shape="circle"
        icon={<SendOutlined />}
        onClick={send}
      />
    </div>
  );
};

export default TextInput;
