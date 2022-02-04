import React from 'react';
import { Btn, Button } from './Styled/buttons/Styled';
import {
    Backdrop,
    BackdropDark,
    Column,
    Flex,
    Hero,
} from './Styled/divs/Styled';
import { P, Title } from './Styled/fonts/Styled';
import Footer from './Footer';

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
                    <P>This page doesn't exist</P>
                    <Btn href="/">Home</Btn>
                </BackdropDark>
            </Column>
            <Footer />
        </>
    );
};

export default Error;
