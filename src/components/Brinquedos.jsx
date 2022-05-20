import React from "react";
import "../App.css"
import Brinquedos from "./Brinquedos"



function Brinquedos(props) {
    return(

    <div className="produto">
        <img className="imagem-brinquedo" src={props.imagem} alt={props.nome}></img>
        <div className=""nome={props.lista.nome} valor={props.lista.valor}>
            <p>{this.props.lista.nome}</p><p>{this.props.lista.valor}</p> 
            
            <button className="bto-comprar">Comprar</button>
        </div>
    </div>

)


}

export default Brinquedos


