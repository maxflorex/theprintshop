import Image from 'next/image';
import React from 'react';
import { dataPrintDetailPaper } from '../api/dataPrintDetails';
import Papers from '../components/Papers';
import { Backdrop, Column, Hero, Items6 } from '../components/Styled/divs/Styled';
import { P, Title } from '../components/Styled/fonts/Styled';

const paper = () => {

  const link = 'https://images.unsplash.com/photo-1479009956747-647858cb2b07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
  const link2 = 'https://images.unsplash.com/photo-1565555334121-4a4f177af7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'

  return (
    <>
      {/* TITLE & HERO */}

      <section>
        <Hero img={link} imgMd={link2} m='2rem' h='25vh'>
          <Column>
            <Backdrop w='100%' p='4rem' >
              <Title size='4rem'>Fine Art Papers</Title>
            </Backdrop>
          </Column>
        </Hero>
      </section>
      <section>
        <Hero m='auto' width='50%' gap='2rem' widthMd='100%'>
          <Title size='2rem'>Professional quality for discerning photographers.</Title>
          <P color='dark' font='Roboto' alignW='center'>Bay Photo Lab has been providing professional photographers with the highest quality prints, mounting, and photo finishing services for nearly 45 years, so you can trust us when it comes to making the best prints possible from your images. We offer the largest range of sizes, including custom sizes, as well as a large variety of texture, coating, and other options to enhance the appearance of your prints.</P>
        </Hero>

        {/* DETAILS OF PRODUCT */}

        <Items6 width='100%' color='white' m='2rem' p='0'>
          {dataPrintDetailPaper.map((dataPrintDetailPaper, index) => (
            <Column gap='1rem' key={index} p='1rem'>
              <Image src={dataPrintDetailPaper.img} objectFit='contain' />
              <div>
                <Title>{dataPrintDetailPaper.title}</Title>
                <P color='dark' align='center' alignW='center' font='Roboto'>{dataPrintDetailPaper.sub}</P>
              </div>
            </Column>
          ))}
        </Items6>

        {/* PAPER DETAILS */}

        <Papers />
      </section>
    </>
  );
};

export default paper;
