import React from 'react'
import './App.css';
import {Filtro} from './componentes/Filtros';
import {Footer} from './componentes/Footer';
import Produtos from "./components/Produtos/Produtos";
import Header from "./components/Header";


const productListObj = [
  {name: 'Camisa1', preco: 10, info:"camisa azul divertida" },
  {name: 'Camisa1', preco: 20, info:"camisa vermelho divertida" },
  {name: 'Camisa3', preco: 30, info:"camisa amarelo divertida" }
];

class Product extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        quntidade:0
      };
      //eventos
      this.add =  this.add.bind(this);
      this.remove =  this.remove.bind(this);

    }
    
    add(){
      this.setState({
          quntidade: this.state.quntidade + 1
      });
    }

    remove(){
      this.setState({
          quntidade: this.state.quntidade - 1
      });
    }

    render (){
      return(
        <div>
            <div className='row form-group'>
                <div className="col.sm-10">
                      <h4>{this.props.name}: R$ {this.props.name} </h4>
                </div>
                <div className="col-sm-2 text-right">
                        Quantidade: {this.state.quantidade}
                </div>
                <div className ="row btn-toolbar">
                    <div className="col-6">
                      <button className="btn btn-outilne-primary">informaçoes</button>
                    </div>

                    <div className="col-6 text-righ">
                    <button className="btn btn-outilne-primary" onClick={this.add}>+</button>
                    <button className="btn btn-outilne-primary" onClick={this.remove}>-</button>
                    </div>
                </div>
            </div>
        </div>   
      );

    }
}

class ProductList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      productList:  []
    };
  }
  componentDidMount(){
    setTimeout(() => {
        this.setState({productList: productListObj })
    }, 1000);
  }

  render(){
    if(!this.state.productList.length) return <p> Carregando...</p>;

    var component = this;
    var products = this.state.productList.map(function(product){

      return(
          <Product 
          name={product.name} 
          price={product.price} 
          />
      );

    });

    return(

      <div>
        {products}
      </div>
    );
  }
}
  
function App() {
  return (
    <div>
    <ProductList />
    <Header />
    <Filtro />
    <Footer />
    <Produtos />
    </div>
  );
}


export default App;
