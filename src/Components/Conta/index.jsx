import React, { useState } from "react";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";
import { BtnConta, DivBox, DivSaldo, ImagemIcone, ImagemIconeMargin, SpanDetalhe } from "./styled";

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <DivBox>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <ImagemIcone src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <DivSaldo>
            <SpanDetalhe>R$</SpanDetalhe> 1.000.000,00{" "}
          </DivSaldo>
        ) : null}
      </div>
      <BtnConta onClick={toggleHandler}>
        <ImagemIconeMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </BtnConta>
    </DivBox>
  );
};

export default Conta;
