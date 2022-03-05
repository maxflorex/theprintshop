import styled from "styled-components";

const SForm = styled.form`
    margin: ${props => props.m || 'auto'};
    width: ${props => props.w || '50%'};
`

const SInput = styled.input`
    border: solid white 1px;
    width: ${props => props.w || '100%'};
    margin: ${props => props.m};
    padding: ${props => props.p || '2rem'};
    border-radius: 0.6rem;
    font-family: ${props => props.font || 'Roboto'};
    font-weight: ${props => props.w || 400};
    font-size: ${props => props.size || '1rem'};
    text-transform: ${props => props.transform || 'none'};
    text-align: ${props => props.align || 'center'};
    color: ${props => props.color};
    letter-spacing: ${props => props.ls};
    line-height: ${props => props.lh};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    &:focus{
        outline: none;
        background-color: ${props => props.colorF};
        border: solid var(--off3) 1px;
    }
    &:hover{
        background-color: ${props => props.colorH};
        cursor: ${props => props.cursor}
    }   
    `


const SButton = styled.input`
    border: none;
    width: ${props => props.w || 'auto'};
    margin: ${props => props.m || 'auto'};
    padding: ${props => props.p || '2rem'};
    border-radius: 0.6rem;
    font-family: ${props => props.font || 'Roboto'};
    font-weight: ${props => props.w || 'auto'};
    font-size: ${props => props.size || '1rem'};
    text-transform: ${props => props.transform || 'none'};
    text-align: ${props => props.align || 'center'};
    color: ${props => props.color};
    letter-spacing: ${props => props.ls};
    line-height: ${props => props.lh};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    background-color: var(--off2);
    &:focus{
        outline: none;
        background-color: ${props => props.colorF};
        border: solid var(--off3) 1px;
    }
    &:hover{
        background-color: ${props => props.colorH || 'var(--color)'};
        cursor: 'pointer'
    }   
    `

const SSelect = styled.select`
    border: none;
    width: ${props => props.w || '100%'};
    margin: ${props => props.m};
    padding: ${props => props.p || '2rem'};
    border-radius: 0.6rem;
    font-family: ${props => props.font || 'Roboto'};
    font-weight: ${props => props.w || 400};
    font-size: ${props => props.size || '1rem'};
    text-transform: ${props => props.transform || 'none'};
    text-align: ${props => props.align || 'center'};
    color: ${props => props.color};
    letter-spacing: ${props => props.ls};
    line-height: ${props => props.lh};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    &:focus{
        outline: ${props => props.outline};
        background-color: ${props => props.colorF || 'var(--off2)'};
    }
    
`

const SOption = styled.option`
    border: none;
    width: ${props => props.w || '100%'};
    margin: ${props => props.m};
    padding: ${props => props.p || '4rem'};
    border-radius: 0.6rem;
    font-family: ${props => props.font || 'Roboto'};
    font-weight: ${props => props.w || 400};
    font-size: ${props => props.size || '1rem'};
    text-transform: ${props => props.transform || 'none'};
    text-align: ${props => props.align || 'center'};
    color: ${props => props.color};
    letter-spacing: ${props => props.ls};
    line-height: ${props => props.lh};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
`

const SLabel = styled.label`
    font-family: ${props => props.font || 'Oswald'};
    font-weight: ${props => props.w || 300};
    font-size: ${props => props.size || '1rem'};
    text-transform: ${props => props.transform || 'none'};
    text-align: ${props => props.align || 'center'};
    color: ${props => props.color};
    letter-spacing: ${props => props.ls};
    line-height: ${props => props.lh};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    background-color: ${props => props.bgColor};
    `


export { SForm, SInput, SSelect, SOption, SLabel, SButton }