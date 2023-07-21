import React, { useState } from "react";
import { temaEscuro, temaClaro } from "./Components/UI/temas";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";

function App() {
  const [corTema, setCorTema] = useState(temaClaro);

  return (
    <ThemeProvider theme={temaEscuro}>
      <GlobalStyle/>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
