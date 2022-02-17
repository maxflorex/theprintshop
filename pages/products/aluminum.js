import Image from 'next/image';
import React from 'react';
import { dataPrintDetailAluminum } from '../api/dataPrintDetails';
import { Backdrop, Column, Hero, Items6 } from '../components/Styled/divs/Styled';
import { P, Title } from '../components/Styled/fonts/Styled';

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
                            <Title size='4rem'>Custom Framing</Title>
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
        </>
    );
};

export default aluminum;
