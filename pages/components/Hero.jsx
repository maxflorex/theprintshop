import { Hero, Grid, Items, Backdrop } from './Styled/divs/Styled';
import { P, Title } from './Styled/fonts/Styled';
import { Btn, BtnBlack, Button } from './Styled/buttons/Styled';
import logo from '../../images/tps-logo.svg';
import Image from 'next/image';

const HeroSection = () => {
    const link =
        'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&width=987&q=80';

    return (
        <Grid mr="2rem" ml="2rem" gap="2rem">
            <Hero
                mt="0"
                mb="0"
                img={link}
                h="85vh"
                display="none"
                pt="0"
                pb="0"
                position="relative"
            >
                <div className="absolute">
                    <Image
                        src={logo}
                        alt="logo"
                        width={80}
                        height={80}
                        className="heroImg"
                    />
                </div>
            </Hero>

            <Hero mt="0" mb="0" imgMd={link} h="80vh" pt="0" pb="0">
                <Title size="4rem">Fine Art</Title>
                <Title size="6rem">Printing & Framing</Title>
                <hr />
                <P font="Roboto" size="2rem" mt="1.4rem" color="black" width="300" align='center' lh='3.2rem'>
                    Handcrafted in the{' '}
                    <span className="spotlight">Cayman Islands</span>
                </P>
                `{' '}
                <BtnBlack transform="uppercase" ls="0.2rem">
                    Know More
                </BtnBlack>
            </Hero>
        </Grid>
    );
};

export default HeroSection;
