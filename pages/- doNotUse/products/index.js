import React from 'react';
import { data } from '../../api/dataProducts'
import Link from 'next/link';
import { Hero, Items, Row } from '../../components/Styled/divs/Styled';
import { Title } from '../../components/Styled/fonts/Styled';

const products = data;

const index = () => (
  <Hero>

      {Object.entries(products).map((value, index) => {
        return (
          <Row key={index}>
            <Link href="/products/[id]" as={"/products/" + value[0]}>
              <Title>{value[1].title}</Title>
            </Link>
          </Row>
        );
      })}

  </Hero>
);

export default index;
