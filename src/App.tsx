import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import Modal from "./components/Modal";
import paths from "./config/paths";
import Results from "./pages/Results";
import { theme } from "./shared/theme";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.background};
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={paths.RESULTS} element={<Results />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
