import React from 'react';
import { Btn, BtnBlack, BtnS, Button } from './Styled/buttons/Styled';
import { BackdropDark, Column, Hero, Flex, Grid } from './Styled/divs/Styled';
import { P, Title } from './Styled/fonts/Styled';

const link =
    'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&width=1974&q=80s';

const SameDayPrint = () => {
    return (
        <Hero
            img={link}
            imgMd={link}
            mt="0"
            ml="2rem"
            mr="2rem"
            p="0"
            attach="fixed"
        >
            <BackdropDark p="8rem" m="0">
                <Title size="4rem" color="white">
                    Same Day <span className="highlight2">Print</span>
                </Title>
                <P font="Roboto" align="center">
                    In a rush? You can count on us to get your prints done the
                    same day
                </P>
                <Grid gap="2rem" gapH="0.4rem" color='none'>
                    <BtnS a href="/order">MAKE A RUSH ORDER</BtnS>
                    <BtnBlack href="/order">GET AN ORDER</BtnBlack>
                </Grid>
            </BackdropDark>
        </Hero>
    );
};

export default SameDayPrint;
