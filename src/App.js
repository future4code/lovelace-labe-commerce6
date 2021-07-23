import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Filtro from "./components/Filtros";
import Produtos from "./components/Produtos/Produtos";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="App">
          <Filtro />
          <Produtos />
        </div>
      </>
    );
  }
}

export default App;
