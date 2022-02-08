import React from 'react';
import { Backdrop, BackdropDark, Column, Hero, Items, Items6, Row, Flex, Items3 } from '../components/Styled/divs/Styled'
import { P, Title } from '../components/Styled/fonts/Styled'
import { dataBorders } from '../api/dataBorders';
import { dataStretchers } from '../api/dataStretchers'
import Image from 'next/image';

const canvas = () => {

  const link = 'https://images.unsplash.com/reserve/O7A9fAvYSXC7NTdz8gLQ_IMGP1039.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2948&q=80'
  const link2 = 'https://images.unsplash.com/photo-1565555334121-4a4f177af7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
  const link3 = 'https://images.unsplash.com/photo-1579547944212-c4f4961a8dd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=939&q=80'
  const link4 = 'https://images.unsplash.com/photo-1579547944212-c4f4961a8dd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=939&q=80'

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

        <Items6 width='100%' color='white' m='2rem'>
          <Column gap='0'>
            <Title>Archival Life</Title>
            <P color='dark' align='center' alignW='center' font='Roboto'>100+ Years</P>
          </Column>
          <Column gap='0'>
            <Title>OBA Free</Title>
            <P color='dark' align='center' alignW='center' font='Roboto'>Stable Colors</P>
          </Column>
          <Column gap='0'>
            <Title>Pigment Inks</Title>
            <P color='dark' align='center' alignW='center' font='Roboto'>Aqueous Technology</P>
          </Column>
          <Column gap='0'>
            <Title>Extreme Color Balance</Title>
            <P color='dark' align='center' alignW='center' font='Roboto'>CMYK & RGB</P>
          </Column>
          <Column gap='0'>
            <Title>High Resolution</Title>
            <P color='dark' align='center' alignW='center' font='Roboto'>2880 X 1440 DPI</P>
          </Column>
          <Column gap='0'>
            <Title>Weight</Title>
            <P color='dark' align='center' alignW='center' font='Roboto'>400GSM</P>
          </Column>
        </Items6>


        <Column img={link4} p='0' gap='2rem' attach='fixed'>


          <BackdropDark p='4rem'>
            <Title color='white' size='3rem' mb='2rem'>Stretcher Bar Depths</Title>
            <Items3 p='0' m='0' gap='4rem'>
              {dataStretchers.map((dataStretchers, index) => (

                <Column m='0' p='0' key={index}>

                  <Image src={dataStretchers.img} objectFit='cover' />
                  <Title color='white'>{dataStretchers.title}</Title>
                </Column>

              ))}
            </Items3>
          </BackdropDark>
        </Column>



        <Column pt='16em' pb='16rem' gap='0'>

          <Title size='3rem'>Gallery Wrap Options</Title>
          <Items m='0' p='0'>
            {dataBorders.map((dataBorders, index) => (
              <Column key={index}>
                <Image src={dataBorders.img} objectFit='contain' />
                <Title size='1rem'>Border Style</Title>
                <Title size='2rem' font='Roboto'>{dataBorders.title}</Title>
              </Column>
            ))}
          </Items>
        </Column>
        <Flex>
          <Title>Floater Options</Title>
        </Flex>
        <Column>
          <Title>Order now</Title>
        </Column>
        <Items>
          <div>Service1</div>
          <div>Service2</div>
          <div>Service3</div>
          <div>Service4</div>
        </Items>
      </section>
    </>
  )
};

export default canvas;
