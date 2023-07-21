import React, { useState } from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import { BtnCabecalho, BtnTema, CabecalhoStyled, DivCabecalho, ImagemLogo } from "./styled";
import { BtnConta, ImagemIcone } from "../Conta/styled";
import temaOn from '../../assets/images/themeOn.svg'
import temaOff from '../../assets/images/themeOff.svg'

const Cabecalho = () => {
  const [tema, setTema] = useState(true)

  const alternarBotao = () =>{
    setTema((tema) => !tema)
  }

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
        <BtnTema onClick={alternarBotao}>
          <ImagemIcone src={tema == true ? temaOn : temaOff}/>
        </BtnTema>
      </DivCabecalho>
    </CabecalhoStyled>
  );
};

export default Cabecalho;
