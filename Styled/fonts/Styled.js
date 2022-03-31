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
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    margin: ${props => props.m};
    cursor: ${props => props.cursor};
    @media (max-width: 1280px) {
        color: ${props => props.colorMd};
        font-size: ${props => props.sizeMd};
    }
    @media (max-width: 768px) {
        font-size: ${props => props.sizeSm};
        display: ${props => props.displaymD};
        color: ${props => props.colorSm};
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

const Para = styled.p`
    font-family: ${props => props.font || 'Oswald'};
    font-weight: ${props => props.w || 300};
    font-size:  ${props => props.size || '1.2rem'};
    line-height: 2rem;
    color: ${props => props.color || 'white'};
    margin-top: ${props => props.mt};
    line-height: ${props => props.lh};
    text-align: ${props => props.alignW || 'justify'};
    margin: ${props => props.m};
    text-align: ${props => props.alignW};
    @media (max-width: 1280px) {
        display: ${props => props.displayL};
    }
    @media (max-width: 768px) {
        text-align: ${props => props.align || 'justify'};
        display: ${props => props.displayMd};
        color: ${props => props.colorSm};
    }
    &:hover {
        cursor: ${props => props.cursor}
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


export { Title, P, Menu, Title2, Para }