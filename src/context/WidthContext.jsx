import { createContext, useContext, useState, useEffect } from "react";

const WindowWidthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useWindowWidth = () => {
  return useContext(WindowWidthContext);
};

// eslint-disable-next-line react/prop-types
export const WindowWidthProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [collapsed, setCollapsed] = useState(true);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setCollapsed(window.innerWidth < 992);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const windowWidthValue = { windowWidth, collapsed, setCollapsed };

  return (
    <WindowWidthContext.Provider value={windowWidthValue}>
      {children}
    </WindowWidthContext.Provider>
  );
};
