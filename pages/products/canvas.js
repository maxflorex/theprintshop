import React from 'react';
import { Backdrop, BackdropDark, Column, Hero, Items, Items6, Row, Flex } from '../components/Styled/divs/Styled'
import { P, Title } from '../components/Styled/fonts/Styled'

const canvas = () => {

  const link = 'https://images.unsplash.com/reserve/O7A9fAvYSXC7NTdz8gLQ_IMGP1039.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2948&q=80'
  const link2 = 'https://images.unsplash.com/photo-1565555334121-4a4f177af7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'

  return (

    <>
      <section>
        <Hero img={link} imgMd={link2} m='2rem' h='25vh'>
          <Column>
            <Backdrop h='25vh' h='100%' p='4rem' tras>
              <Title size='4rem'>This is the main title</Title>
            </Backdrop>
          </Column>
        </Hero>
      </section>
      <section>
        <Hero m='2rem' width='50%' gap='2rem' m='auto' widthMd='100%'>
          <Title size='2rem'>We produce the highest quality Canvas Prints available.</Title>
          <P color='dark' font='Roboto' alignW='center'>With Bay Photo's Canvas Prints, you can display your photos like fine art. Canvas Prints can be made from prints on Professional Photo Papers bonded onto museum quality canvas, or Fine Art Prints printed directly onto the canvas material. The resulting prints can then be stretched and stapled onto a wood artists stretcher bar frame, mounted on gatorfoam board, or delivered loose (unmounted).</P>
        </Hero>
        <hr className='hr' />
        <Items6 width='100%'>
          <div>Archival Life</div>
          <div>100% RGB</div>
          <div>Pigment Inks</div>
          <div>Extreme Color Balance</div>
          <div>High Resolution</div>
          <div>Weight</div>
        </Items6>
        <Column>
          <Title>Stretcher Bar Depths</Title>
          <Flex>
            <p>7/8</p>
            <p>1 3/8</p>
            <p>2</p>
          </Flex>
        </Column>
        <Column>
          <Title>Gallery Wrap Options</Title>
          <Items>
            <Flex>Natural Wrap</Flex>
            <Flex>Solid Color</Flex>
            <Flex>Mirrored</Flex>
            <Flex>Digital Wrap</Flex>
          </Items>
        </Column>
        <Flex>
          <Title>Floater Options</Title>
        </Flex>
      </section>
    </>
  )
};

export default canvas;
