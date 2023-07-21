import { styled } from "styled-components";

export const DivBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({theme}) => theme.inside};
    border-radius: 5px;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
    padding: 20px;
    width: 48%;
    color: ${({theme}) => theme.text};

    @media (max-width: 800px) {
          width: 95%;
          margin: 5px;
        }
`

export const ImagemIcone = styled.img`
    height: 25px;
    width: 25px;
`

export const ImagemIconeMargin = styled(ImagemIcone)`
    marginTop: 2px;
`

export const DivSaldo = styled.div`
    font-weight: 700;
    font-size: 32px;
`

export const SpanDetalhe = styled.span`
    color: #41d3be;
    font-size: 24px;
`

export const BtnConta = styled.button`
    margin: 15px auto 0px auto;
    display: block;
    border-radius: 20px;
    background-color: #41d3be;
    border: none;
    color: white;
    font-weight: 600;
    font-size: 14px;
    padding: 8px 20px;
    cursor: pointer;
`