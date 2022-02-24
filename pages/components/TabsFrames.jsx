import { useState } from 'react';
import { Flex, Items3 } from './Styled/divs/Styled';
import { Title, Title2 } from './Styled/fonts/Styled';

const TabsFrames = ({ setSelectedTab, selectedTab }) => {
    const frameTab = () => setSelectedTab('black');
    const selected = selectedTab;

    return (
        <Items3 m="2rem" gap="0" p="0">
            <Flex
                className="bg-white"
                color={`${selected === 'black' ? 'var(--off2)' : 'white'}`}
                cursor="pointer"
                m="0"
                align="start"
                onClick={frameTab}
            >
                <Title size="2rem">Black</Title>
                <Title2>- Satin / Gloss</Title2>
            </Flex>
            <Flex
                className="bg-white"
                color={`${selected === 'white' ? 'var(--off2)' : 'white'}`}
                cursor="pointer"
                m="0"
                onClick={() => setSelectedTab('white')}
            >
                <Title size="2rem">White</Title>
                <Title2>- Satin / Gloss</Title2>
            </Flex>
            <Flex
                className="bg-white"
                color={`${selected === 'natural' ? 'var(--off2)' : 'white'}`}
                cursor="pointer"
                m="0"
                onClick={() => setSelectedTab('natural')}
            >
                <Title size="2rem">Natural</Title>
                <Title2>- Satin / Gloss</Title2>
            </Flex>
        </Items3>
    );
};

// lassName={`${!frameTab ? "bg-black" : "bg-white"}`}

export default TabsFrames;
