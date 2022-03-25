import React from 'react';
import { BtnBlack } from '../../Styled/buttons/Styled'
import { Column, Flex, Grid, Row } from '../../Styled/divs/Styled';
import { Para, Title } from '../../Styled/fonts/Styled';

const link =
    'https://images.pexels.com/photos/2874998/pexels-photo-2874998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&width=940';

const About = () => {
    return (
        <Grid mt="6rem" mb="6rem" mr="2rem" ml="2rem" gap="4rem">
            <Column p="2rem">
                <Title size="3.2rem" align="left" mb="0.6rem">
                    The Printshop
                </Title>
                <Para color="black" font="Roboto">
                    We are The Printshop™, your professional fine art ptinting
                    company. From canvas prints to mesmerizing aluminum prints;
                    We&apos;ve got you covered. We Specialize in faster
                    turnarounds (Including same day service) and supreme museum
                    quality.
                </Para>
                <Para color="black" font="Roboto">
                    Based in Grand Cayman, Cayman Islands. You can find us in
                    any of our locations from 7 Mile Beach to West Bay. Proud to
                    be locally own & operated.
                </Para>
                <BtnBlack bg="var(--off2)">
                    <Title size="1.4rem" color="black" colorH="white">
                        Make an Order
                    </Title>
                </BtnBlack>
            </Column>
            <Column m="0" img={link} mt="0" radius="0" p="0" />
        </Grid>
    );
};

export default About;