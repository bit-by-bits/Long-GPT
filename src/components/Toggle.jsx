import { Button } from "antd";

// eslint-disable-next-line react/prop-types
const Toggle = ({ fxn, bgt }) => {
  return (
    <Button
      type="primary"
      onClick={fxn}
      style={{
        position: "fixed",
        top: 10,
        right: 10,
        background: bgt ? "#1a7f64" : "#ffffff",
        color: bgt ? "#ffffff" : "#000000",
      }}
    >
      Toggle Dark Theme
    </Button>
  );
};

export default Toggle;
