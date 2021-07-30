import React from 'react';
import styled from 'styled-components';
import IconBancoBrasil from '../img-footer/bb.png';
import IconDinersClub from '../img-footer/diners.png';
import IconElo from '../img-footer/elo.png';
import IconHipercard from '../img-footer/hipercard.png';
import IconMaestro from '../img-footer/maestro.png';
import IconMastercard from '../img-footer/mastercard.png';
import IconVisa from '../img-footer/visa.png';
import IconJcb from '../img-footer/jcb.png';
import IconDiscover from '../img-footer/discover.png';
import IconBoleto from '../img-footer/boleto.png';
import IconItau from '../img-footer/itau.png';
import IconBradesco from '../img-footer/bradesco.png';
import IconPinterest from '../img-footer/iconepinterest.png';
import IconTwitter from '../img-footer/IconTwitter.png';
import IconInsta from '../img-footer/iconInsta.png';
import LogoLoja from '../img-footer/logo1.jpg'


const ContainerFooter = styled.div`
height: 285px;
background-color: #f4f4f4;


img{
    width: 250px;
    height: 50px;
    margin-top: 30px;
}

hr{
    margin-top: 10px;
}

`
const ContainerCreditos = styled.div`
background-color: #0b3d92;
height: 30px;
display: flex;
margin-top: 1px;

p{
    text-align: center;
    color: black;
    font-size: 12px;
    margin-left: 460px;
    margin-top: 7px;
}

`
const ContainerQuemSomosNos = styled.div`
margin-left: 80px;
margin-top: 30px;
align-items: flex-end;
justify-content: center;
text-align: justify;

p{
    font-size: 10px;
    color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 200px;
    height: 30px;

}


h3{
    color: #0b3d92;
    margin-top: 1px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 17px;
}`
const ContainerFormasDePagamento = styled.div`
width: 300px;
height: 40px;
margin-left: 420px;
margin-top: -70px;

img {
    width:29px;
    height: 23px;
    padding: 8px;
    margin-top: 1px;

}
h3{
    color: #0b3d92;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 17px;
    margin-left: 30px;
}
`
const ContainerRedesSociais = styled.div`
width: 300px;
height: 40px;
margin-left: 800px;
margin-top: -45px;


img{
    height: 42px;
    width: 40px;
    margin-top: 20px;
    margin-left: 20px;
}

h3{
    color: #0b3d92;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 17px;

}
`


export class Footer extends React.Component {



    render() {
        return (
            <div>
                <ContainerFooter>
                    <img src={LogoLoja} alt="Print feliz" />

                    <br />


                    <ContainerQuemSomosNos>

                        <h3>Quem somos</h3>
                        <br />
                        <p>Somos uma loja que tem como objetivo trazer camisetas com estampas divertidas com o intuito de deixar o seu dia mais feliz e leve! Oferecemos os melhores produtos com os melhores preços, e com um atendimento maravilhoso direcionado à você cliente.
              </p>
                    </ContainerQuemSomosNos>
                    <ContainerFormasDePagamento>
                        <h3>Formas de pagamento</h3> <br />
                        <img src={IconBancoBrasil} alt="Cartão Banco do Brasil" />
                        <img src={IconDinersClub} alt="Cartão Diners Club" />
                        <img src={IconElo} alt="Cartão Elo" />
                        <img src={IconHipercard} alt="Cartão Hipercard" />
                        <img src={IconMaestro} alt="Cartão Maestro" />
                        <img src={IconMastercard} alt="Cartão Mastercad" />
                        <img src={IconVisa} alt="Cartão Visa" />
                        <img src={IconJcb} alt="Cartão Jcb" />
                        <img src={IconDiscover} alt="Cartão Discover" />
                        <img src={IconBoleto} alt="Boleto" />
                        <img src={IconItau} alt="Cartão Itaú" />
                        <img src={IconBradesco} alt="Cartão Bradesco" />


                    </ContainerFormasDePagamento>
                    <ContainerRedesSociais>
                        <h3>Nos siga nas redes sociais</h3>
                        <a href="https://br.pinterest.com/"><img src={IconPinterest} alt="Ícone Pinterest" /></a>
                        <a href="https://twitter.com/twitter"><img src={IconTwitter} alt="Ícone Twitter" /></a>
                        <a href="https://www.instagram.com/"><img src={IconInsta} alt="Ícone Instagram" /></a>

                    </ContainerRedesSociais>
                </ContainerFooter>
                <ContainerCreditos>
                    <p> © Copyright 2021 - Todos os direitos reservados.</p>
                </ContainerCreditos>

            </div>
        );

    }
}
