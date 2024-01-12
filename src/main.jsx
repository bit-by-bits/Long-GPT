import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/mainstyle.css";
import App from "./app";
import { ThemeProvider } from "./context/ThemeContext";
import { WindowWidthProvider } from "./context/WidthContext";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <WindowWidthProvider>
        <App />
      </WindowWidthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
