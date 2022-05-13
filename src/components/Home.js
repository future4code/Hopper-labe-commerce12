import React from "react";
import "../App.css";
import Mercadorias from "./Mercadoria";
import ListaBrinquedos from "./Brinquedos.json";



class Home extends React.Component {
    state = {
        listas: ListaBrinquedos
    }
    render() {


        return (
            <div className="home">
                <div className="sub-home">
                    <p>Quantidade de Brinquedos : 12 </p>
                    <label>Ordenação:.
                        <select className="seletor">
                            <option value="CRESCENTE">Crescente</option>
                            <option value="DECRESCENTE">Decrescente</option>
                        </select>
                    </label>
                </div>
                <div className="mercadoria">
                    {this.state.listas.map(item => {
                        return <Mercadorias key={item.id} item={item} />

                    })}
                </div>




            </div>
        );

    }

}
export default Home;