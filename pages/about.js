import React from 'react'
import Carousel from './components/Carousel'
import { Column } from './components/Styled/divs/Styled'
import { Para, Title } from './components/Styled/fonts/Styled'

const about = () => {

    const link = 'https://images.unsplash.com/photo-1633927275459-05077d1028dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

    const colorOpa = 'rgba(0, 0, 0, 0.7)'

    return (
        <section>
            <Column img={link} imgMd={link} p='0'>
                <Column color={colorOpa} h='25vh' p='0' m='0'>
                    <Para font='Roboto' m='auto'>ABOUT US</Para>
                    <Title size='4rem' color='white'>The Printshop</Title>
                </Column>
            </Column>
            <Column width='50%' widthSm='75%'  m='auto'>
                <Para font='Roboto' color='black' >
                    We are a local owned and operated printshop based in the heart of the caribbean. <span style={{ fontWeight: '600' }}>
                        The place to go for all your fine art needs in the Cayman Islands. </span>
                    We offer a wide range of products, from the best fine art papers from the most reknown companies in the world, to custom framing done by a highly skilled group of talented people.
                    <br />
                    <br />
                    Need something done the same day? Need a hand installing your artwork? Short on time and needing to have your artwork delivered to your home? Look no further, we&apos;re there for you.
                </Para>
                <img src={link} className='imageGallery' style={{ paddingTop: '2rem' }} />
            </Column>
            <Carousel />
        </section>
    )
}

export default about