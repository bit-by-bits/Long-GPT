import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/mainstyle.css";
import App from "./app";
import { ThemeProvider } from "./context/ThemeContext";
import { WindowWidthProvider } from "./context/WidthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <WindowWidthProvider>
        <App />
      </WindowWidthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
