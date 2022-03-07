import { useState } from 'react';
import { Flex, Items3 } from './Styled/divs/Styled';
import { Title } from './Styled/fonts/Styled';


const Tabs = ({ setSelectedTab, selectedTab }) => {

    const stretcherTab = () => setSelectedTab('stretchers')
    const selected  = selectedTab

    return (
        <Items3 m="0" gap="2rem" p='0'>
   
            <Flex className='bg-white' color={`${selected === 'stretchers' ? 'var(--off2)' : 'white'}`} cursor='pointer' m="0" onClick={() => setSelectedTab('stretchers')}>
                <Title size="2rem">Stretcher Bars</Title>
            </Flex>
            <Flex className='bg-white' color={`${selected === 'wrap' ? 'var(--off2)' : 'white'}`} cursor='pointer' m="0" onClick={() => setSelectedTab('wrap')}>
                <Title size="2rem">Gallery Wraps</Title>
            </Flex>
            <Flex className='bg-white' color={`${selected === 'floaters' ? 'var(--off2)' : 'white'}`}  cursor='pointer' m="0" onClick={() => setSelectedTab('floaters')}>
                <Title size="2rem">Floating Frames</Title>
            </Flex>
        </Items3>
    );
};

// lassName={`${!stretcherTab ? "bg-black" : "bg-white"}`}

export default Tabs;
