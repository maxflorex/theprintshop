import React from 'react';
import { Btn } from './Styled/buttons/Styled';
import { Column, Grid, Row } from './Styled/divs/Styled';
import { P, Title } from './Styled/fonts/Styled';

const link =
    'https://images.pexels.com/photos/2874998/pexels-photo-2874998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&width=940';

const About = () => {
    return (
        <Grid mt="8rem" mb="8rem" mr="2rem" ml="2rem" gap="4rem">
            <Column>
                <Title size="3.2rem" align="left" mb="0.6rem">
                    The Printshop
                </Title>
                <P  color="black" font="Roboto">
                    We are The Printshop™, your professional fine art ptinting
                    company. From canvas prints to mesmerizing aluminum prints;
                    We've got you covered. We Specialize in faster turnarounds
                    (Including same day service) and supreme museum quality.
                </P>
                <P  color="black" font="Roboto">
                    Based in Grand Cayman, Cayman Islands. You can find us in
                    any of our locations from 7 Mile Beach to West Bay. Proud to
                    be locally own & operated.
                </P>
                <a href="">
                    <Title  size='1.4rem' mt="0.4rem">
                        Make an Order
                    </Title>
                </a>
            </Column>
            <Column m="0" img={link} mt="0" radius="0" p="0" />
        </Grid>
    );
};

export default About;
