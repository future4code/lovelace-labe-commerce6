import React from 'react';
import styled from 'styled-components';

const ContainerFiltros = styled.div`
display: flex;
flex: end;
width: 200px;
height: 550px;
padding: 5px;
flex-wrap: wrap;
border: 1px solid black;


`

const ContainerInput = styled.div`
height: 120px;
width: 500px;
display: flex;
flex-direction: column;
align-items: flex-start;
align-self: flex-start;


`

function Filtro() {
    return (
        <div>
            <ContainerFiltros>
                <h3>Filtros</h3>
                <ContainerInput>
                    <p>Valor mínimo:</p>
                    <input/>
                    <p>Valor máximo:</p>
                    <input/>
                    <p>Busca por nome:</p>
                    <input/>
                </ContainerInput>
            </ContainerFiltros>

        </div>
    );
}

export default Filtro


