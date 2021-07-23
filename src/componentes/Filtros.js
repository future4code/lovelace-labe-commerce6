import React from 'react';
import styled from 'styled-components';
import { Filtro1 } from './Filtro1';
import { Filtro2 }  from './Filtro2';
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
