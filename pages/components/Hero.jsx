import { Hero, Grid, Items, Backdrop, Column } from '../../Styled/divs/Styled';
import { P, Para, Title } from '../../Styled/fonts/Styled';
import { Btn, BtnBlack, Button } from '../../Styled/buttons/Styled';
import logo from '../../images/tps-logo.svg';
import Image from 'next/image';

const HeroSection = () => {
    const link = '/_MX82804.jpg';
    const colorOpa = 'rgba(0, 0, 0, 0.5)';

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
                position="center"
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

            <Column imgMd={link} m='0' p='0' attach='fixed'>
                <Hero mt="0" mb="0" h="80vh" hMd='60vh' pt="0" pb="0" colorMd={colorOpa}>
                    <Title size="2rem" colorMd='white'>Fine Art</Title>
                    <Title size="4rem" colorMd='white'>Printing & Framing</Title>
                    <Para
                        font="Roboto"
                        size="1.6rem"
                        mt="1rem"
                        color="black"
                        width="300"
                        align="center"
                        displayMd="none"
                    >
                        Handcrafted in the{' '}
                        <span className="spotlight">Cayman Islands</span>
                    </Para>
                    <BtnBlack transform="uppercase" ls="0.2rem" href='/about'>
                        Know More
                    </BtnBlack>
                </Hero>
            </Column>
        </Grid>
    );
};

export default HeroSection;
