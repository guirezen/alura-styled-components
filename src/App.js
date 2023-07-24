import React, { useState } from "react";
import { temaEscuro, temaClaro } from "./Components/UI/temas";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import temaOn from './assets/images/themeOn.svg'
import temaOff from './assets/images/themeOff.svg'
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { ImagemIcone } from "./Components/Conta/styled";
import { BtnTema } from "./AppStyled";

function App() {
  const [tema, setTema] = useState(true)

  const alternarBotao = () => {
    setTema((tema) => !tema)
  }

  return (
    <ThemeProvider theme={tema == true ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={alternarBotao}>
        <ImagemIcone src={tema == true ? temaOn : temaOff} />
      </BtnTema>
      <Cabecalho/>
      <Container />
    </ThemeProvider>
  );
}

export default App;
