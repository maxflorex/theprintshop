import styled from "styled-components";


const Title = styled.h1`
    font-family: ${props => props.font || 'Oswald'};
    font-weight: ${props => props.w || 100};
    font-size: ${props => props.size || '1.4rem'};
    text-transform: ${props => props.transform || 'none'};
    text-align: ${props => props.align || 'center'};
    color: ${props => props.color};
    letter-spacing: ${props => props.ls};
    line-height: ${props => props.lh};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    `

const P = styled.p`
    font-family: ${props => props.font || 'Oswald'};
    font-weight: ${props => props.w || 100};
    font-size:  ${props => props.size || '1.4rem'};
    line-height: 1.6rem;
    color: ${props => props.color || 'white'};
    margin-top: ${props => props.mt};
`

const Menu = styled.ul`
    font-family: ${props => props.font || 'Oswald'};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 2rem;
    font-size: ${props => props.size || '1rem'};
    font-weight: ${props => props.weight || 100};
    font-family: ${props => props.font || 'Oswald'};
    text-transform: ${props => props.transform || 'none'};    
    letter-spacing: ${props => props.ls};
    @media (max-width: 768px) {
        display: none;
    }
`


export { Title, P, Menu }