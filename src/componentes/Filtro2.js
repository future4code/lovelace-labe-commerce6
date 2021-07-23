import React from 'react';

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
  