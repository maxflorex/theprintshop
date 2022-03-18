import styled from "styled-components";

const Button = styled.a`
    border-style: solid;
    border-width: 1px;
    border-color: var(--off2);
    padding: 1rem;
    border-radius: 0.6rem;
    font-family: ${props => props.font || 'Roboto'};
    font-weight: ${props => props.weight || 300};
    font-size: ${props => props.size || '1rem'};
    text-transform: ${props => props.transform || 'none'};
    text-align: ${props => props.align || 'centere'};
    color: ${props => props.color};
    letter-spacing: ${props => props.ls || '0.06rem'}; 
    cursor: pointer ;
    &:hover {
        border-style: solid;
        border-width: 1px;
        border-color: var(--accent);
        color: var(--accent);
        padding: 1rem;
        border-radius: 0.6rem;
    }
    
`

const ButtonS = styled.a`
    border-style: solid;
    border-width: 1px;
    border-color: var(--off2);
    padding: 1rem;
    border-radius: 0.6rem;
    font-family: ${props => props.font || 'Roboto'};
    font-weight: ${props => props.weight || 300};
    font-size: ${props => props.size || '1rem'};
    text-transform: ${props => props.transform || 'none'};
    text-align: ${props => props.align || 'centere'};
    color: ${props => props.color};
    letter-spacing: ${props => props.ls || '0.06rem'}; 
    cursor: pointer ;
    &:hover {
        border-style: solid;
        border-width: 1px;
        border-color: var(--accent);
        color: var(--accent);
        padding: 1rem;
        border-radius: 0.6rem;
    }
    
`
const Btn = styled.a`
    background-color: var(--accent);
    padding: 1rem;
    border-radius: 0.6rem;
    font-family: ${props => props.font || 'Roboto'};
    font-weight: ${props => props.weight || 300};
    font-size: ${props => props.size || '1rem'};
    text-transform: ${props => props.transform || 'none'};
    text-align: ${props => props.align || 'center'};
    color: ${props => props.color || 'white'};
    letter-spacing: ${props => props.ls || '0.06rem'};
    cursor: pointer;
    margin-top: ${props => props.mt || '1.4rem'};
    position: ${props => props.position};
    &:hover {
        background-color: var(--off1);
        color: black;
        padding: 1rem;
        border-radius: 0.6rem;
    }
    
`
const BtnS = styled.a`
    background-color: var(--accent);
    padding: 1rem;
    border-radius: 0.6rem;
    font-family: ${props => props.font || 'Roboto'};
    font-weight: ${props => props.weight || 300};
    font-size: ${props => props.size || '1rem'};
    text-transform: ${props => props.transform || 'none'};
    text-align: ${props => props.align || 'center'};
    color: ${props => props.color || 'white'};
    letter-spacing: ${props => props.ls || '0.06rem'};
    cursor: pointer;
    margin-top: ${props => props.mt || '1.4rem'};
    position: ${props => props.position};
    &:hover {
        background-color: var(--off1);
        color: black;
        padding: 1rem;
        border-radius: 0.6rem;
    }
    
`

const BtnBlack = styled.a`
    background-color: ${props => props.bg || 'black'};
    padding: 1rem;
    border-radius: 0.6rem;
    font-family: ${props => props.font || 'Roboto'};
    font-weight: ${props => props.weight || 300};
    font-size: ${props => props.size || '1rem'};
    text-transform: ${props => props.transform || 'none'};
    text-align: ${props => props.align || 'center'};
    color: ${props => props.color || 'white'};
    letter-spacing: ${props => props.ls || '0.06rem'};
    cursor: pointer;
    margin-top: ${props => props.mt || '1.4rem'};
    margin: ${props => props.m};
    position: ${props => props.position};
    box-sizing: content-box ;
    
    &:hover {
        background-color: ${props => props.bgH || 'var(--accent)'};
        color: white;
        padding: 1rem;
        border-radius: 0.6rem;
        background-color: ${props => props.bgH};
    }
    
`

export { Button, Btn, BtnBlack, BtnS, ButtonS }