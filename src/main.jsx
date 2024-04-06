import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { GlobalStateProvider } from "./app/context/GlobalStateProvider.jsx";
import Jovem from "./Jovem.jsx";

const jovem = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  jovem ? (
    <React.StrictMode>
      <BrowserRouter>
        <GlobalStateProvider>
          <Jovem />
        </GlobalStateProvider>
      </BrowserRouter>
    </React.StrictMode>
  ) : (
    <React.StrictMode>
      <BrowserRouter>
        <GlobalStateProvider>
          <App />
        </GlobalStateProvider>
      </BrowserRouter>
    </React.StrictMode>
  )
);
