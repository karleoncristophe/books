import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.min.css";
import { ConfigProvider } from "antd";
import ptBR from "antd/lib/locale/pt_BR";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import BooksProvider from "./context/BooksContext";

ReactDOM.render(
  <BrowserRouter>
    <ConfigProvider locale={ptBR}>
      <BooksProvider>
        <App />
      </BooksProvider>
    </ConfigProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
