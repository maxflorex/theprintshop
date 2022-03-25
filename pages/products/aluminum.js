import Image from 'next/image';
import React, { useState } from 'react';
import { dataPrintDetailAluminum } from '../api/dataPrintDetails';
import { Backdrop, Column, Hero, Items6, Flex, Row, Grid } from '../../Styled/divs/Styled';
import { Para, Title, Title2 } from '../../Styled/fonts/Styled';
import reflection1 from '../components/Images/reflections/mx-reflection-gloss.jpg'
import reflection2 from '../components/Images/reflections/mx-reflection-satin.jpg'
import inset1 from '../components/Images/inset/inset-01.svg'
import inset2 from '../components/Images/inset/inset-02-01.svg'
import { BtnBlack } from '../../Styled/buttons/Styled';
import GalleryAluminum from '../components/Galleries/GalleryAluminum';
import Modal from '../components/Modal';
import Carousel from '../components/Carousel';


const Aluminum = () => {
    const [selectedImg, setSelectedImg] = useState(null)

    const link = 'https://images.unsplash.com/photo-1612504200882-d29bf3f2cc13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1056&q=80'

    return (
        <>
            {/* TITLE & HERO */}

            <section>
                <Hero img={link} imgMd={link} m='2rem' h='25vh'>
                    <Column>
                        <Backdrop w='100%' p='4rem'>
                            <Title size='4rem'>Aluminum Prints</Title>
                        </Backdrop>
                    </Column>
                </Hero>
            </section>
            <section>
                <Hero width='50%' gap='2rem' m='auto' widthMd='100%'>
                    <Title size='2rem'>State  Of The Art Images</Title>
                    <Para color='dark' font='Roboto' alignW='center'>Get the most modern aluminum prints with us! Take advantage of the eye-popping vibrance and definition that&apos;s only possible though this medium. With up to three different finishes to select from; get the best look for your photography or artwork of your choice and showcase it like a pro</Para>
                </Hero>

                {/* DETAILS OF PRODUCT */}

                <Items6 width='100%' color='white' m='2rem' p='0'>
                    {dataPrintDetailAluminum.map((dataPrintDetailAluminum, index) => (
                        <Column gap='1rem' key={index} p='1rem'>
                            <Image alt={dataPrintDetailAluminum.title} src={dataPrintDetailAluminum.img} objectFit='contain' />
                            <div>
                                <Title>{dataPrintDetailAluminum.title}</Title>
                                <Para color='dark' align='center' alignW='center' font='Roboto'>{dataPrintDetailAluminum.sub}</Para>
                            </div>
                        </Column>
                    ))}
                </Items6>
            </section>
            <section>
                <Column m='auto'>
                    <Title size='2rem'>Available Surfaces</Title>
                    <Title2 font='Roboto'>Select between one of our finishes</Title2>
                    <Row wMd='50%' wSm='100%' m='auto'>
                        <Column p='0' m='2rem' color='white' gap='0' className='bg-white'>
                            <Image alt={reflection1} src={reflection1} />
                            <Flex color='none' p='2rem' m='0'>
                                <Title size='3rem'>Gloss</Title>
                                <Para color='black' font='Roboto'>• High Reflection / Vivid Colors</Para>
                            </Flex>
                        </Column>
                        <Column p='0' m='2rem' color='white' gap='0' className='bg-white'>
                            <Image alt={reflection2} src={reflection2} />
                            <Flex color='none' p='2rem' m='0'>
                                <Title size='3rem'>Satin</Title>
                                <Para color='black' font='Roboto'>• Low Reflection / Great Contrast</Para>
                            </Flex>
                        </Column>
                    </Row>
                </Column>
            </section>
            <section>
                <Hero color='none' m='auto' p='0'>
                    <BtnBlack m='auto' font='Oswald' href='/order'>
                        PLACE AN ORDER NOW
                    </BtnBlack>
                </Hero>
            </section>
            <section>
                <Column p='4rem' mt='2rem'>
                    <Title size='2rem' pt='2rem'>Wall Display Option</Title>
                    <Title2 font='Roboto'>We offer a variety of contemporary ways to hang and display your MetalPrints.</Title2>
                    <Grid justify='center' width='50%' gap='4rem' m='auto' pt='2rem'>
                        <Image objectFit='contain'alt={inset1} src={inset1} />
                        <Image objectFit='contain'alt={inset2} src={inset2} />
                    </Grid>
                </Column>
                <Carousel />

                <GalleryAluminum selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
                {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
            </section>
        </>
    );
};

export default Aluminum;
