import React from "react";
import "../App.css"

function Brinquedos(props) {
    return(

    <div className="produto">
        <img className="imagem-brinquedo" src={props.imagem} alt={props.nome}></img>
        <div className="">
            <p>{props.nome}</p><p>{props.valor}</p>
            <button className="bto-comprar">Comprar</button>
        </div>
    </div>

)


}

export default Brinquedos