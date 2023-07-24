import React, { useState } from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import { BtnCabecalho, BtnTema, CabecalhoStyled, DivCabecalho, ImagemLogo } from "./styled";

const Cabecalho = () => {
  return (
    <CabecalhoStyled>
      <ImagemLogo src={bank_logo} alt="Logo Smart Bank" />
      <DivCabecalho>
        <BtnCabecalho 
          href="https://google.com"
          cor
        >
          Ajuda
        </BtnCabecalho>
        <BtnCabecalho href="https://google.com">
          Sair
        </BtnCabecalho>
      </DivCabecalho>
    </CabecalhoStyled>
  );
};

export default Cabecalho;
