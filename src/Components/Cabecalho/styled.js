import { styled } from "styled-components";

export const CabecalhoStyled = styled.nav`
    background-color: #41d3be;
    display: flex;
    justify-content: space-between;
    padding: 0 15vw;
    height: 10vh;
    align-items: center;
`

export const DivCabecalho = styled.div`
    display: flex;
    align-items: center;
`

export const ImagemLogo = styled.img`
    height: 50px;
    width: 50px;
`

export const BtnCabecalho = styled.a`
    text-align: center;
    border-radius: 3px;
    padding: 5px 20px;
    margin: 0 10px;
    font-weight: 600;
    border: 2px solid white;

    background: ${(props) => props.cor ? 'white' : 'transparent'};
    color: ${(props) => props.cor ? '#41d3be' : 'white'};
`