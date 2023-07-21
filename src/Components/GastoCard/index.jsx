import { ImagemIcone } from "../Conta/styled";
import { ConteinerGasto } from "./styled";

export default function GastoCard({caminhoIcone, descricaoIcone, tituloGasto, descricaoGasto, valorGasto, dataGasto}) {
    return(
        <ConteinerGasto>
            <ImagemIcone src={caminhoIcone} alt={descricaoIcone}/>
            <div className="conteinerDescricaoGasto">
                <h4>{tituloGasto}</h4>
                <p className="descricaoGasto">{descricaoGasto}</p>
                <p className="descricaoGasto">{valorGasto}</p>
            </div>
            <p className="descricaoGasto">{dataGasto}</p>
        </ConteinerGasto>
    )
}