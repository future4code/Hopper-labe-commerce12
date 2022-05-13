import React from "react";
import "../App.css"

// import Brinquedos from "./Brinquedos";
//import Brinquedo1 from "../imagens/brinquedos/capsula espacial.jpg";
// import Brinquedo2 from "../imagens/brinquedos/appolo espacial.jpg";
 //import Brinquedo3 from "../imagens/brinquedos/foguete espacial.jpg";
// import Brinquedo4 from "../imagens/brinquedos/lego nasa.jpg";
// import Brinquedo5 from "../imagens/brinquedos/lunar loop.jpg";
// import Brinquedo6 from  "../imagens/brinquedos/nave espacial.jpg";
// import Brinquedo7 from  "../imagens/brinquedos/nave orion.jpg";
// import Brinquedo8 from "../imagens/brinquedos/nave pepa.jpg";
// import Brinquedo9 from  "../imagens/brinquedos/snoop espacial.jpg";
// import Brinquedo10 from "../imagens/brinquedos/rover espacial.jpg";
// import Brinquedo11 from "../imagens/brinquedos/popet foguete.jpg";
// import Brinquedo12 from "../imagens/brinquedos/onibus espacial.jpg";

export default function Mercadorias(props) {

    return (
        
        
                <div className="produto"title={props.item.nome}>
                        
                        <p>{props.item.nome}</p>
                        <p><img src={props.item.imagem}/></p>
                        <p>R${props.item.valor}</p>
                        <button className="bto-comprar">Comprar</button>
                </div>
        
      
    );

}

