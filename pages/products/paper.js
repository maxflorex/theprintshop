import Head from 'next/head'
import React from 'react';
import { dataPrintDetailPaper } from '../api/dataPrintDetails';
import Papers from '../components/Papers';
import { Backdrop, Column, Hero, Items6 } from '../../Styled/divs/Styled';
import { Para, Title } from '../../Styled/fonts/Styled';
import Carousel from '../components/CarouselOtherServices';

const Paper = () => {

  const link = 'https://images.unsplash.com/photo-1479009956747-647858cb2b07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'

  return (
    <>
      <Head>
        <title>The Printshop - Paper</title>
      </Head>
      {/* TITLE & HERO */}

      <section>
        <Hero img={link} imgMd={link} m='2rem' mSm='0' radius='0'>

          <Backdrop width='auto' h='100%' p='4rem'>
            <Title size='4rem' sizeSm='3rem'>Fine Art Papers</Title>
          </Backdrop>

        </Hero>
      </section>
      <section>
        <Hero m='auto' width='50%' gap='2rem' widthMd='100%' pSm='2rem'>
          <Title size='2rem'>Museum Quality Fine Art Prints</Title>
          <Para color='dark' font='Roboto' alignW='center'>The Printshop by ACC, has been providing professional and enthusiasts enthusiasts in the Cayman Islands with the highest quality prints, mounting, and photo finishing services, so you can trust us when it comes to making the best prints possible from your images. We offer the largest range of sizes, including custom sizes, as well as a large variety of texture, coating, and other options to enhance the appearance of your prints.</Para>
        </Hero>

        {/* DETAILS OF PRODUCT */}

        <Items6 width='100%' color='white' m='2rem' p='0' gapSm='0'>
          {dataPrintDetailPaper.map((dataPrintDetailPaper, index) => (
            <Column gap='1rem' key={index} p='1rem'>
              <img src={dataPrintDetailPaper.img} alt={dataPrintDetailPaper.title} style={{ maxWidth: '3rem', maxHeight: '3rem', margin: 'auto' }} />
              <div>
                <Title>{dataPrintDetailPaper.title}</Title>
                <Para color='dark' align='center' alignW='center' font='Roboto'>{dataPrintDetailPaper.sub}</Para>
              </div>
            </Column>
          ))}
        </Items6>

        {/* PAPER DETAILS */}

        <Papers />
        <Carousel />

      </section>
    </>
  );
};

export default Paper;
