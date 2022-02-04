import React from 'react';
import { Hero, Row } from '../components/Styled/divs/Styled'
import { Title } from '../components/Styled/fonts/Styled'

const canvas = () => {

  const link = 'https://images.unsplash.com/photo-1535732820275-9ffd998cac22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'

  return (

      <Row p='0'>
        <Hero img={link} h='100vh' m='0'>
          <Title>Finally</Title>
        </Hero>
        <Hero>
          <Title>A lot better</Title>
        </Hero>
      </Row>
  )
};

export default canvas;
