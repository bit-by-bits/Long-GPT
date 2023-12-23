import { Button } from "antd";
import { useTheme } from "../context/ThemeContext";
import { colors } from "../colors";

const Toggle = () => {
  const { darkTheme: dark, toggleTheme: toggle } = useTheme();

  return (
    <Button
      type="primary"
      onClick={toggle}
      style={{
        top: 10,
        right: 10,
        position: "fixed",
        background: dark ? colors.green : colors.white,
        color: dark ? colors.white : colors.black,
      }}
    >
      Toggle Dark Theme
    </Button>
  );
};

export default Toggle;
