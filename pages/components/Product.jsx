import React from 'react';
import Link from 'next/link';
import { Title } from './Styled/fonts/Styled';
import { Btn } from '../components/Styled/buttons/Styled';
import { Column } from './Styled/divs/Styled';

const Product = ({ id, title, desc }) => {
    return (
        <Column align="center" justify='center'>
            <Title font="Roboto">{title}</Title>
            <Link href={`/product/[id]`} as={`/product/${id}`} passHref>
                <Btn>Link</Btn>
            </Link>
        </Column>
    );
};

export default Product;
