import Image from 'next/image';
import React from 'react';
import FrameSizes from './FrameSizes';
import { Column } from './Styled/divs/Styled';


import bigframeN from './Images/frames/FRAMES-04-2.svg';

const NaturalFrames = () => {
    return (
        <section>
            <Column width="75%" m="auto">
                <Image src={bigframeN} alt={bigframeN} objectFit="contain" />
            </Column>
            <FrameSizes />
        </section>
    );
};

export default NaturalFrames;
