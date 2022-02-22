import React from 'react';
import { Column, Flex } from './Styled/divs/Styled';
import { Title } from './Styled/fonts/Styled';
import Image from 'next/image';

import bigframe from './Images/frames/FRAMES-04-3.svg';
import FrameSizes from './FrameSizes';


const BlackFrames = () => {
    return (
        <section>
            <Column width="75%" m="auto">
                <Image src={bigframe} objectFit="contain" />
            </Column>
            <FrameSizes />
        </section>
    );
};

export default BlackFrames;
