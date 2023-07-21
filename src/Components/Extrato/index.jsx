import { BtnConta, DivBox } from "../Conta/styled";
import {extratoLista} from '../../info'
import GastoCard from "../GastoCard";

export default function Extrato() {
    return (
        <DivBox>
            {extratoLista.updates.map(lista => (
                <GastoCard
                    key={lista.id}
                    caminhoIcone={lista.image}
                    tituloGasto={lista.type}
                    descricaoGasto={lista.from}
                    valorGasto={lista.value}
                    dataGasto={lista.date}
                />
            ))}
            <BtnConta>Ver Mais</BtnConta>
        </DivBox>
    )
}