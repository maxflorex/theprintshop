import React from 'react';
import Form from './components/Form';
import { Flex } from './components/Styled/divs/Styled';
import { Title } from './components/Styled/fonts/Styled';
import Image from 'next/image';
import acc from '../images/tps-logo-bw.svg'

const order = () => {

  return (<section>
    <Title size='4rem' mt='4rem'>Place an Order</Title>
    <Form />
  </section>
  )
}

export default order
