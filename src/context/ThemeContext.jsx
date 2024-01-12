import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  return useContext(ThemeContext);
};

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const toggleTheme = () => {
    setDarkTheme(prevTheme => {
      const newTheme = !prevTheme;
      localStorage.setItem("theme", JSON.stringify(newTheme));
      return newTheme;
    });
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  const themeValue = { darkTheme, toggleTheme };

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};
