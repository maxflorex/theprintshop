import React from 'react';
import { Column } from '../components/Styled/divs/Styled';
import { Title } from '../components/Styled/fonts/Styled';
import { data } from '../api/dataServices';
import Image from 'next/image';

const ProductDetails = () => {
    return <div>
        <Column>
            <Title size='3rem'>This is the Title</Title>
        </Column>
    </div>;
};

export default ProductDetails;
