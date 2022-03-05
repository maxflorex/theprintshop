import styled from "styled-components";


const Title = styled.h1`
    font-family: ${props => props.font || 'Oswald'};
    font-weight: ${props => props.w || 300};
    font-size: ${props => props.size || '1.4rem'};
    text-transform: ${props => props.transform || 'none'};
    text-align: ${props => props.align || 'center'};
    color: ${props => props.color};
    letter-spacing: ${props => props.ls};
    line-height: ${props => props.lh};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin: ${props => props.m};
    cursor: ${props => props.cursor};
    @media (max-width: 768px) {
        font-size: ${props => props.sizeSm};
    }
    &:hover{
        color: ${props => props.color};
    }
    `

const Title2 = styled.h2`
    font-family: ${props => props.font || 'Oswald'};
    font-weight: ${props => props.w || 300};
    font-size: ${props => props.size || '1.4rem'};
    text-transform: ${props => props.transform || 'none'};
    text-align: ${props => props.align || 'center'};
    color: ${props => props.color};
    letter-spacing: ${props => props.ls};
    line-height: ${props => props.lh};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    background-color: ${props => props.bgColor};
    `

const P = styled.p`
    font-family: ${props => props.font || 'Oswald'};
    font-weight: ${props => props.w || 300};
    font-size:  ${props => props.size || '1.2rem'};
    line-height: 2rem;
    color: ${props => props.color || 'white'};
    margin-top: ${props => props.mt};
    line-height: ${props => props.lh};
    text-align: ${props => props.alignW || 'justify'};
    @media (max-width: 768px) {
        text-align: ${props => props.align || 'justify'};
    }
    `

const Menu = styled.ul`
    font-family: ${props => props.font || 'Oswald'};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 2rem;
    font-weight: ${props => props.w || 300};
    font-size: ${props => props.size || '1rem'};
    font-weight: ${props => props.weight || 100};
    font-family: ${props => props.font || 'Oswald'};
    text-transform: ${props => props.transform || 'none'};    
    letter-spacing: ${props => props.ls};
    @media (max-width: 768px) {
        display: none;
    }
`


export { Title, P, Menu, Title2 }