import React from 'react';
import styled from 'styled-components';

const ContainerFiltros = styled.div`
width: 200px;
height: 550px;
border: 1px solid black;
 
input{
    height: 15px;
}  `


export class Filtro extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfGuests: 60,

    };

    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };




  render() {
    return (
      <div>
        <ContainerFiltros>
          <h3>Filtros</h3>
          <p>Valor mínimo:</p>
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
          <Filtro1 />
          <Filtro2 />
        </ContainerFiltros>


      </div>
    );
  }

}

export class Filtro1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfGuests: 1000,
    };

    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <p>Valor máximo:</p>
        <input
          name="numberOfGuests"
          type="number"
          value={this.state.numberOfGuests}
          onChange={this.handleInputChange} />


      </div>
    );
  }

};



export class Filtro2 extends React.Component {
  state = {
    filter: "",
    data: [
      {
        //  nome: "Foguete da Missão Apollo 11",

      },
      {
        //   nome: "Produto 2",

      },
      {
        // nome: "Produto 3",

      },
    ]
  };

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });

    return (
      <div>

        <p>Busca por nome:</p>
        <input value={filter} onChange={this.handleChange} />
        {filteredData.map(item => (
          <div key={item.email}>
            <div>
              {item.nome} {item.lname} - {item.gender} - {item.email}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
