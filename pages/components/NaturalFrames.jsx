import React from 'react';
import FrameSizes from './FrameSizes';
import { Column } from '../../Styled/divs/Styled';

const NaturalFrames = () => {
    return (
        <section>
            <Column width="75%" m="auto">
                <img src='/FRAMES-04-2.svg' alt='Natural' />
            </Column>
            <FrameSizes />
        </section>
    );
};

export default NaturalFrames;
