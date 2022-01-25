import { Hero, Grid, Items, Backdrop } from './Styled/divs/Styled';
import { P, Title } from './Styled/fonts/Styled';
import { Btn, Button } from './Styled/buttons/Styled';
import logo from '../../images/tps-logo.svg';
import Image from 'next/image';

const HeroSection = () => {
    const link =
        'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1010&q=80';

    return (
        <Grid mr='2rem'ml='2rem'  gap="2rem">
            <Hero mt='0' mb='0' img={link} h="80vh" display="none" pt='0' pb='0'>
                <Image src={logo} alt="logo" width={200} height={900} />
            </Hero>
            <Hero mt='0' mb='0' imgMd={link} h="80vh" pt='0' pb='0'>
                <Backdrop>
                    <Title size="4rem">Fine Art</Title>
                    <Title size="6rem">Printing & Framing</Title>
                    <hr />
                    <P font="Roboto" size="2rem" mt="1.4rem" color="black" w='300'>
                        Handcarfted in the{' '}
                        <span className="spotlight">Cayman Islands</span>
                    </P>
                    `{' '}
                    <Btn transform="uppercase" ls="0.2rem">
                        Know More
                    </Btn>
                </Backdrop>
            </Hero>
        </Grid>
    );
};

export default HeroSection;
