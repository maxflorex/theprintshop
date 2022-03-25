import React from 'react';
import { BtnS, Button } from '../../Styled/buttons/Styled';
import {
    Backdrop,
    BackdropDark,
    Column,
    Flex,
    Hero,
} from '../../Styled/divs/Styled';
import { Para, Title } from '../../Styled/fonts/Styled';

const background =
    'https://images.unsplash.com/photo-1550275994-72944c00abde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&width=987&q=80';

const Error = () => {
    return (
        <>
            <Column img={background} h="100%" m="2rem" p="0">
                <BackdropDark h="50vh">
                    <Title size="6rem" color="white">
                        Oh no!
                    </Title>
                    <Para>This page doesn&apos;t exist</Para>
                    <BtnS href="/">Home</BtnS>
                </BackdropDark>
            </Column>
        </>
    );
};

export default Error;
