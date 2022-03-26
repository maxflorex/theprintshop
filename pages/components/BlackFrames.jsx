import React from 'react';
import { Column, Flex } from '../../Styled/divs/Styled';
 import FrameSizes from './FrameSizes';


const BlackFrames = () => {
    return (
        <section>
            <Column width="75%" m="auto">
                <img src='/FRAMES-04-3.svg' alt='Big Frame' />
            </Column>
            <FrameSizes />
        </section>
    );
};

export default BlackFrames;
