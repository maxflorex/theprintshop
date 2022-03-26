import React from 'react';

import FrameSizes from './FrameSizes';
import { Column } from '../../Styled/divs/Styled';

const WhiteFrames = () => {
    return (
        <section>
            <Column width="75%" m="auto">
                <img src='/FRAMES-04.svg' alt='Frame' />
            </Column>
            <FrameSizes />
        </section>
    );
};

export default WhiteFrames;
