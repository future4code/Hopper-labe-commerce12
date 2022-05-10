
import React from "react";
import foto from "../imagens/LabKids.gif";
import Car from "../imagens/carrinho-de-compras.png"
import "../App.css";



class Menu extends React.Component {


    render() {
        return (
            <div className="menu">
                <div className="menu-logo">
                    <img className="foto" src={foto} alt="foto" />
                </div>
                <div className="menu-car">
                   <button className="bto-car"><img className="carrinho" src={Car} alt="carrinho" /> </button>
                </div>
            </div>

        )
    };
}
export default Menu;