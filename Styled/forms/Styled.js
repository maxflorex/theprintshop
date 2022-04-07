import styled from "styled-components";

const SForm = styled.form`
    margin: ${props => props.m || 'auto'};
    width: ${props => props.w || '75%'};
    @media (max-width: 768px) {
        width: ${props => props.wSm || '100%'};
        margin: ${props => props.mSm};
    }
`

const SInput = styled.input`
    border: ${props => props.border || 'solid var(--off1) 1px'};
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
    background-color: ${props => props.bg};
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

const STextArea = styled.textarea`
    border: solid var(--off1) 1px;
    width: ${props => props.w || '100%'};
    margin: ${props => props.m};
    padding: ${props => props.p || '2rem'};
    border-radius: 0.6rem;
    font-family: ${props => props.font || 'Roboto'};
    font-weight: ${props => props.w || 400};
    font-size: ${props => props.size || '1rem'};
    text-transform: ${props => props.transform || 'none'};
    text-align: ${props => props.align || 'left'};
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

const SButton = styled.input`
    border: solid var(--off1) 1px;
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
    background-color:${props => props.bgColor || ' var(--off2)'};
    cursor: 'pointer';
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

export { SForm, SInput, SLabel, STextArea, SButton }