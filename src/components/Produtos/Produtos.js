import React from "react"; 
import { CardContainer, HomeContainer } from './style'

class Produtos extends React.Component {
  state = {
    produtos: [
      {
        img: "https://picsum.photos/200/200",
        nome: "Produto bacana",
        preco: 20.0,
      },
      {
        img: "https://picsum.photos/200/200",
        nome: "Produto bacanudo",
        preco: 40.0,
      },
      {
        img: "https://picsum.photos/200/200",
        nome: "Produto show",
        preco: 10.0,
      },
      {
        img: "https://picsum.photos/200/200",
        nome: "Produto show de bola",
        preco: 17.0,
      },
    ],
  };

  ordemMaiorMenor = (event) => {
    const numerosArray = this.state.produtos.map((objeto) => objeto.preco);
    const produtosOrdenados = this.state.produtos.reduce((anterior, atual) => {
      const novoDado = { ...atual, preco: Math.max(...numerosArray) };
      const posicaoValor = numerosArray.indexOf(Math.max(...numerosArray));
      if (posicaoValor > -1) numerosArray.splice(posicaoValor, 1);
      anterior.push(novoDado);
      return anterior;
    }, []);

    this.setState({
      produtos:
        event.target.value === "Crescente"
          ? produtosOrdenados
          : produtosOrdenados.reverse(),
    });
  }; 

  render() {
    return (
      <HomeContainer>
        <nav>
          <p>Quantidade de produtos: {this.state.produtos.length}</p>
          <label>
            Ordenação
            <select onChange={this.ordemMaiorMenor}>
              <option>Crescente</option>
              <option>Decrescente</option>
            </select>
          </label>
        </nav>

        <CardContainer>
          {this.state.produtos.map((objeto) => {
            return (
              <div>
                <img src={objeto.img} alt={objeto.nome} />
                <p>{objeto.nome}</p>
                <p>{objeto.preco}</p>
                <button type="button">Adicionar ao carrinho</button>
              </div>
            );
          })}
        </CardContainer>
      </HomeContainer>
    );
  }
}

export default Produtos;