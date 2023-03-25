import React, { useState } from "react";
import "./App.css";
import Nav from "./component/Nav";
import Main from "./pages/Main";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

const lightTheme = {
  backgroundColor: "#e9e9e9",
  mainTxtColor: "#222222",
  textColor: "#222222",
  smallTxtColor: "#fff",
  logoFilter: `invert(9%) sepia(2%) saturate(0%) hue-rotate(359deg) brightness(101%) contrast(90%)`,
};

const darkTheme = {
  backgroundColor: "#1B2430",
  mainTxtColor: "#FFFAE7",
  textColor: "#6e7e97",
  smallTxtColor: "#fffffb",
  logoFilter: `invert(99%) sepia(63%) saturate(447%) hue-rotate(309deg) brightness(102%) contrast(103%)`,
};

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className="App">
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Nav dark={dark} setDark={setDark} />
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
