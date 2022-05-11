import React from "react";
import "../App.css";
import Mercadorias from "./Mercadoria";



class Home extends React.Component {
   
    render() { 
        
        return (
            <div className="home">
                <div className="sub-home">
                    <p>Quantidade de Brinquedos : 20 </p>
                    <label>Ordenação:.
                        <select className="seletor">
                            <option value="CRESCENTE">Crescente</option>
                            <option value="DECRESCENTE">Decrescente</option>
                        </select>
                    </label>
                </div>
                <div>
                    <Mercadorias/>
                </div>




            </div>
        );

    }

}
export default Home;