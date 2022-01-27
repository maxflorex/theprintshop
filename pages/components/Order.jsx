import React from 'react';
import { Btn, BtnBlack } from './Styled/buttons/Styled';
import { BackdropDark, Column, Hero, Flex, Grid } from './Styled/divs/Styled';
import { P, Title } from './Styled/fonts/Styled';

const link =
    'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80s';

const Order = () => {
    return (
        <Hero img={link} imgMd={link} p="4rem" mt="0" ml='2rem' mr='2rem'>
            <BackdropDark p="8rem">
                <Title size="4rem" color='white'>
                    Same Day <span className="highlight2">Print</span>
                </Title>
                <P font='Roboto' align='center'>
                    In a rush? You can count on us to get your prints done the
                    same day
                </P>
                <Grid gap='2rem' gapH='0.4rem'>
                    <Btn>MAKE A RUSH ORDER</Btn>
                    <BtnBlack>Get a Quote</BtnBlack>
                </Grid>
            </BackdropDark>
        </Hero>
    );
};

export default Order;
