import React from 'react'
import { Column } from '../Styled/divs/Styled'
import { Para, Title } from '../Styled/fonts/Styled'
import Head from 'next/head'

const news = () => {

    const link = 'https://images.unsplash.com/photo-1609166519415-0900a86f4e85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80'

    return (
        <section>
            <Head>
                <title>The Printshop - News</title>
            </Head>
            <Column img={link}>
                <Column h='25vh' m='auto'>
                    <Title size='4rem'>The Printshop News</Title>
                    <Para color='black'>Coming soon!</Para>
                </Column>
            </Column>
        </section>
    )
}

export default news