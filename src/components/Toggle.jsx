import { Button } from "antd";
import { BulbOutlined } from "@ant-design/icons";
import { useTheme } from "../context/ThemeContext";
import { colors } from "../colors";
import { useWindowWidth } from "../context/WidthContext";

const Toggle = () => {
  const { darkTheme: dark, toggleTheme: toggle } = useTheme();
  const { windowWidth: width, collapsed } = useWindowWidth();

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
      {width < 480 && !collapsed ? <BulbOutlined /> : "Toggle Theme"}
    </Button>
  );
};

export default Toggle;
