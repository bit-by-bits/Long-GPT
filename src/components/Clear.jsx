import { Button } from "antd";

// eslint-disable-next-line react/prop-types
const Clear = ({ fxn, bgt }) => {
  return (
    <Button
      type="primary"
      onClick={fxn}
      style={{
        position: "fixed",
        top: 10,
        left: "calc(20vw + 10px)",
        background: bgt ? "#ef4444" : "#ffffff",
        color: bgt ? "#ffffff" : "#000000",
      }}
    >
      Clear Chats
    </Button>
  );
};

export default Clear;
