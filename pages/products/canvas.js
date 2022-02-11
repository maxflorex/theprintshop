import { Backdrop, BackdropDark, Column, Hero, Items, Items6, Row, Flex, Items3, Grid } from '../components/Styled/divs/Styled'
import { P, Title, Title2 } from '../components/Styled/fonts/Styled'
import Image from 'next/image';
import { dataPrintDetails } from '../api/dataPrintDetails';
import { BtnBlack } from '../components/Styled/buttons/Styled'
import Floaters from '../components/Floaters'
import Stretchers from '../components/Stretchers'
import GalleryWrap from '../components/GalleryWrap'
import Tabs from '../components/Tabs';
import { useState } from 'react';
import Carousel, { CarouselItem } from '../components/Carousel';



const TAB = {
  'floaters': <Floaters />,
  'stretchers': <Stretchers />,
  'wrap': <GalleryWrap />
}





const canvas = () => {

  const link = 'https://images.unsplash.com/reserve/O7A9fAvYSXC7NTdz8gLQ_IMGP1039.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2948&q=80'
  const link2 = 'https://images.unsplash.com/photo-1565555334121-4a4f177af7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'

  const [selectedTab, setSelectedTab] = useState('null');

  return (

    <>
      {/* TITLE & HERO */}

      <section>
        <Hero img={link} imgMd={link2} m='2rem' h='25vh'>
          <Column>
            <Backdrop h='25vh' h='100%' p='4rem'>
              <Title size='4rem'>Canvas</Title>
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
          {dataPrintDetails.map((dataPrintDetails, index) => (
            <Column gap='1rem' key={index}>
              <Image src={dataPrintDetails.img} objectFit='contain' />
              <div>
                <Title>{dataPrintDetails.title}</Title>
                <P color='dark' align='center' alignW='center' font='Roboto'>{dataPrintDetails.sub}</P>
              </div>
            </Column>
          ))}
        </Items6>

        {/* COMPONENTS */}



        <Hero color='none' m='auto'>

          <BtnBlack m='auto' font='Oswald'>
            Place an Order now
          </BtnBlack>
        </Hero>


        <Tabs setSelectedTab={setSelectedTab} />
        {TAB[selectedTab]}


        <Carousel>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </Carousel>


      </section>
    </>
  )
};

export default canvas;
