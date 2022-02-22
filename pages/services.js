import React from 'react';
import { Column, Items3, Flex } from './components/Styled/divs/Styled';
import { Title, Title2 } from './components/Styled/fonts/Styled';
import { slides } from './api/dataOtherServices';
import { BiRightArrow } from "react-icons/bi";
import ServicesSlider from './components/servicesSlider';

const services = () => {

  const link = 'https://images.unsplash.com/photo-1537346439163-eafb59bdc400?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80'

  return <>
    <section>
      <Items3 m='0' p='0'>

        {slides.map((data, index) => (

          <Column m='0' p='0' key={index}>
            <Column img={data.img} h='60vh' />
            <Title size='2rem'>{data.title}</Title>
            <Title2 font='Roboto'>{data.desc}</Title2>
            <Flex m='auto' p='1rem'>
              <BiRightArrow />
            </Flex>
          </Column>
        ))}
      </Items3>
    </section>
    <section>
      <ServicesSlider />
    </section>
  </>;
};

export default services;
