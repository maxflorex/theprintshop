import Image from 'next/image';
import React from 'react';
import { Flex, Column } from '../../Styled/divs/Styled';
import { Title, Title2 } from '../../Styled/fonts/Styled';

import frame1 from './Images/frames/FRAMES-01.svg';
import frame2 from './Images/frames/FRAMES-02.svg';
import frame3 from './Images/frames/FRAMES-03.svg';

const FrameSizes = () => {
    return (
        <>
            <Flex color="none" gap="4rem" align="start" mb='2rem' p='0'>
                <Column p='2rem'>
                    <Title2 mb="1rem" w="400">
                        A
                    </Title2>
                    <Image src={frame1} alt={frame1} objectFit="contain" />
                </Column>
                <Column p='2rem'>
                    <Title2 mb="1rem" w="400">
                        B
                    </Title2>
                    <Image src={frame2} alt={frame2} objectFit="contain" />
                </Column>
                <Column p='2rem'>
                    <Title2 mb="1rem" w="400">
                        C
                    </Title2>
                    <Image src={frame3} alt={frame3} objectFit="contain" />
                </Column>
            </Flex>
            <Title font='Roboto' mb='4rem' w='400' size='1rem'>*Ask for moulding availability</Title>
        </>
    );
};

export default FrameSizes;
