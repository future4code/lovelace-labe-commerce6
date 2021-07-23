import React from 'react';

export class Filtro1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfGuests: 1000,};

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

}
