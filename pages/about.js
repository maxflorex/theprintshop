import React from 'react'
import { Column } from './components/Styled/divs/Styled'
import { Para, Title } from './components/Styled/fonts/Styled'

const about = () => {

    const link = 'https://images.unsplash.com/photo-1633927275459-05077d1028dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

    const colorOpa = 'rgba(0, 0, 0, 0.7)'

    return (
        <section>
            <Column img={link} imgMd={link} p='0'>
                <Column color={colorOpa}  h='25vh' p='0' m='0'>
                    <Para font='Roboto' m='auto'>ABOUT US</Para>
                    <Title size='4rem' color='white'>The Printshop</Title>
                </Column>
            </Column>
        </section>
    )
}

export default about