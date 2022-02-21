import Image from 'next/image';
import React from 'react';
import { dataPrintDetailAluminum } from '../api/dataPrintDetails';
import { Backdrop, Column, Hero, Items6, Flex, Row, Grid } from '../components/Styled/divs/Styled';
import { P, Title, Title2 } from '../components/Styled/fonts/Styled';
import reflection1 from '../components/Images/reflections/mx-reflection-gloss.jpg'
import reflection2 from '../components/Images/reflections/mx-reflection-satin.jpg'
import inset1 from '../components/Images/inset/inset-01.svg'
import inset2 from '../components/Images/inset/inset-02-01.svg'
import Infinite from '../components/Infinite'
import { BtnBlack } from '../components/Styled/buttons/Styled';


const aluminum = () => {
    const link = 'https://images.unsplash.com/photo-1612504200882-d29bf3f2cc13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1056&q=80'
    const link2 = 'https://images.unsplash.com/photo-1565555334121-4a4f177af7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'



    return (
        <>
            {/* TITLE & HERO */}

            <section>
                <Hero img={link} imgMd={link2} m='2rem' h='25vh'>
                    <Column>
                        <Backdrop h='25vh' h='100%' p='4rem'>
                            <Title size='4rem'>Aluminum Prints</Title>
                        </Backdrop>
                    </Column>
                </Hero>
            </section>
            <section>
                <Hero m='2rem' width='50%' gap='2rem' m='auto' widthMd='100%'>
                    <Title size='2rem'>We produce the highest quality Canvas Prints available.</Title>
                    <P color='dark' font='Roboto' alignW='center'>With Bay Photo's Canvas Prints, you can display your photos like fine art. Canvas Prints can be made from prints on Professional Photo Papers bonded onto museum quality canvas, or Fine Art Prints printed directly onto the canvas material. The resulting prints can then be stretched and stapled onto a wood artists stretcher bar frame, mounted on gatorfoam board, or delivered loose (unmounted).</P>
                </Hero>

                {/* DETAILS OF PRODUCT */}

                <Items6 width='100%' color='white' m='2rem' p='0'>
                    {dataPrintDetailAluminum.map((dataPrintDetailAluminum, index) => (
                        <Column gap='1rem' key={index} p='1rem'>
                            <Image src={dataPrintDetailAluminum.img} objectFit='contain' />
                            <div>
                                <Title>{dataPrintDetailAluminum.title}</Title>
                                <P color='dark' align='center' alignW='center' font='Roboto'>{dataPrintDetailAluminum.sub}</P>
                            </div>
                        </Column>
                    ))}
                </Items6>
            </section>
            <section>
                <Column width='50%' m='auto'>
                    <Title size='2rem'>Available Surfaces</Title>
                    <Title2 font='Roboto'>Select between one of our finishes</Title2>
                    <Row gap='4rem'>
                        <Column p='0' m='0' color='white' gap='0' className='bg-white'>
                            <Image src={reflection1} />
                            <Flex color='none' p='2rem' m='0'>
                                <Title size='3rem'>Gloss</Title>
                                <P color='black' font='Roboto'>• High Reflection / Vivid Colors</P>
                            </Flex>
                        </Column>
                        <Column p='0' m='0' color='white' gap='0' className='bg-white'>
                            <Image src={reflection2} />
                            <Flex color='none' p='2rem' m='0'>
                                <Title size='3rem'>Satin</Title>
                                <P color='black' font='Roboto'>• Low Reflection / Great Contrast</P>
                            </Flex>
                        </Column>
                    </Row>
                </Column>
            </section>
            <section>
                <Hero color='none' m='auto'>

                    <BtnBlack m='auto' font='Oswald'>
                        Place an Order now
                    </BtnBlack>
                </Hero>
            </section>
            <section>
                <Column p='4rem'>
                    <Title size='2rem'>Wall Display Option</Title>
                    <Title2 font='Roboto'>We offer a variety of contemporary ways to hang and display your MetalPrints.</Title2>
                    <Grid justify='center' width='50%' gap='4rem' m='auto' pt='2rem'>
                        <Image objectFit='contain' src={inset1} />
                        <Image objectFit='contain' src={inset2} />
                    </Grid>
                </Column>
                <Infinite />
            </section>
        </>
    );
};

export default aluminum;
