import React from "react";
import Brinquedos from "./Brinquedos";
import Brinquedo1 from "../imagens/brinquedos/capsula espacial.jpg";
import Brinquedo2 from "../imagens/brinquedos/appolo espacial.jpg";
import Brinquedo3 from "../imagens/brinquedos/foguete espacial.jpg";
import Brinquedo4 from "../imagens/brinquedos/lego nasa.jpg";
import Brinquedo5 from "../imagens/brinquedos/lunar loop.jpg";
import Brinquedo6 from  "../imagens/brinquedos/nave espacial.jpg";
import Brinquedo7 from  "../imagens/brinquedos/nave orion.jpg";
import Brinquedo8 from "../imagens/brinquedos/nave pepa.jpg";
import Brinquedo9 from  "../imagens/brinquedos/snoop espacial.jpg";
import Brinquedo10 from "../imagens/brinquedos/rover espacial.jpg";
import Brinquedo11 from "../imagens/brinquedos/popet foguete.jpg";
import Brinquedo12 from "../imagens/brinquedos/onibus espacial.jpg";

export default function Mercadorias() {
  
    return(

    <div className="mercadoria">
                    <Brinquedos nome="Capsula Espacial" valor="R$230,00" imagem={Brinquedo1} />
                    <Brinquedos nome="Appolo Espacial" valor="R$150,00" imagem={Brinquedo2} />
                    <Brinquedos nome="Foguete Espacial" valor="R$190,00" imagem={Brinquedo3} />
                    <Brinquedos nome="Lego Nasa" valor="R$206,00" imagem={Brinquedo4} />
                    <Brinquedos nome="Lunar Loop" valor="R$260,00" imagem={Brinquedo5} />
                    <Brinquedos nome="Nave Espacial" valor="R$100,00" imagem={Brinquedo6} />
                    <Brinquedos nome="Nave Orion" valor="R$234,00" imagem={Brinquedo7} />
                    <Brinquedos nome="Nave Pepa" valor="R$288,00" imagem={Brinquedo8} />
                    <Brinquedos nome="Snoop Espacial" valor="R$166,00" imagem={Brinquedo9} />
                    <Brinquedos nome="Rover Espacial" valor="R$206,00" imagem={Brinquedo10} />
                    <Brinquedos nome="Popet Foguete" valor="R$508,00" imagem={Brinquedo11} />
                    <Brinquedos nome="Onibus Espacial" valor="R$450,00" imagem={Brinquedo12} />

    </div>
);

}

