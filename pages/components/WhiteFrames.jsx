import React from 'react';
import Image from 'next/image';
import FrameSizes from './FrameSizes';
import { Column } from './Styled/divs/Styled';

import bigframeN from './Images/frames/FRAMES-04.svg';

const WhiteFrames = () => {
    return (
        <section>
            <Column width="75%" m="auto">
                <Image src={bigframeN} objectFit="contain" />
            </Column>
            <FrameSizes />
        </section>
    );
};

export default WhiteFrames;
