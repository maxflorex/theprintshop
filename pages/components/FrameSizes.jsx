 import React from 'react';
import { Flex, Column } from '../../Styled/divs/Styled';
import { Title, Title2 } from '../../Styled/fonts/Styled';

const FrameSizes = () => {
    return (
        <>
            <Flex color="none" gap="4rem" align="start" mb='2rem' p='8rem' pSm='4rem' mSm='0'>
                <div p='2rem'>
                    <Title2 mb="1rem" w="400">
                        A
                    </Title2>
                    <img src='/FRAMES-01.svg' alt='Frame1' style={{width: '100%'}} />
                </div>
                <div p='2rem'>
                    <Title2 mb="1rem" w="400">
                        B
                    </Title2>
                    <img src='/FRAMES-02.svg' alt='Frame2' style={{width: '100%'}} />
                </div>
                <div p='2rem'>
                    <Title2 mb="1rem" w="400">
                        C
                    </Title2>
                    <img src='/FRAMES-03.svg' alt='Frame3' style={{width: '100%'}} />
                </div>
            </Flex>
            <Title font='Roboto' mb='4rem' w='400' size='1rem'>*Ask for moulding availability</Title>
        </>
    );
};

export default FrameSizes;
