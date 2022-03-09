import React, { useState } from 'react';
import Form from './components/Form';
import { Flex } from './components/Styled/divs/Styled';
import { Title } from './components/Styled/fonts/Styled';
import Image from 'next/image';
import acc from '../images/tps-logo-bw.svg'
import Account from './Account';


const order = () => {
  const [isAuth, setIsAuth] = useState(null)

  return (<section>
    <Account setIsAuth={setIsAuth} />
    {isAuth === null ? '' :  <Form />}
  </section>
  )
}

export default order
