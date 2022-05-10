import React from "react";
import "../App.css";



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
                <div className="mercadoria">
                    <div className="produto">
                        <img></img>
                        <div className="">
                            <p>Produto 1</p><p>R$200,00</p>
                            <button className="">Adicionar ao carrinho</button>
                        </div>
                    </div>
                    <div className="produto">
                        <img></img>
                        <div className="">
                            <p>Produto 2</p><p>R$200,00</p>
                            <button className="">Adicionar ao carrinho</button>
                        </div>
                    </div>
                    <div className="produto">
                        <img></img>
                        <div className="">
                            <p>Produto 3</p><p>R$200,00</p>
                            <button className="">Adicionar ao carrinho</button>
                        </div>
                    </div>
                    <div className="produto">
                        <img></img>
                        <div className="">
                            <p>Produto 4</p><p>R$200,00</p>
                            <button className="">Adicionar ao carrinho</button>
                        </div>
                    </div>
                    <div className="produto">
                        <img></img>
                        <div className="">
                            <p>Produto 5</p><p>R$200,00</p>
                            <button className="">Adicionar ao carrinho</button>
                        </div>
                    </div>
                    <div className="produto">
                        <img></img>
                        <div className="">
                            <p>Produto 6</p><p>R$200,00</p>
                            <button className="">Adicionar ao carrinho</button>
                        </div>
                    </div>
                    <div className="produto">
                        <img></img>
                        <div className="">
                            <p>Produto 7</p><p>R$200,00</p>
                            <button className="">Adicionar ao carrinho</button>
                        </div>
                    </div>
                    <div className="produto">
                        <img></img>
                        <div className="">
                            <p>Produto 8</p><p>R$200,00</p>
                            <button className="">Adicionar ao carrinho</button>
                        </div>
                    </div>
                </div>




            </div>
        );

    }

}
export default Home;