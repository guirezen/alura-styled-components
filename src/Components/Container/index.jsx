import React from "react";
import {ContainerStyled, Conteudo} from './styled.js'
import Titulo from "../Titulo";
import Conta from "../Conta";
import Extrato from "../Extrato/index.jsx";

const Container = ({tema}) => {
  return (
    <ContainerStyled>
      <Titulo>Olá Guilherme!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato/>
      </Conteudo>
    </ContainerStyled>
  );
};

export default Container;
