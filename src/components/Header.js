import React from 'react';
import styled from 'styled-components';



const ContainerHeader = styled.div` 
height: 80px;
background-color: white;
border: 1px solid black;

`

function Header() {
    return (
        <ContainerHeader>
            <p> LabEcommerce</p>
        </ContainerHeader>


    );
}

export default Header