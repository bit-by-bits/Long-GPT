import { Button } from "antd";

// eslint-disable-next-line react/prop-types
const Toggle = ({ fxn, bgt }) => {
  return (
    <Button
      type="primary"
      onClick={fxn}
      style={{
        top: 10,
        right: 10,
        position: "fixed",
        background: bgt ? "#1a7f64" : "#ffffff",
        color: bgt ? "#ffffff" : "#000000",
      }}
    >
      Toggle Dark Theme
    </Button>
  );
};

export default Toggle;
