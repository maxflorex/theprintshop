import Image from 'next/image';
import { Column, Flex, Grid } from './Styled/divs/Styled';
import { Title, Title2 } from './Styled/fonts/Styled';
import floater1 from '../components/Images/stretchers/outlined-1-floaters.svg';
import floater2 from '../components/Images/stretchers/outlined-2.floaters.svg';
const link =
    'http://www.holtonframes.com/wp-content/uploads/2019/05/1-FL-25in-on-Coy-a-web1200.jpg';

const Floaters = () => {
    return (
        <Grid>
            <Flex img={link} h="25vh" m="2rem" bgSize='105%' p='4rem'/>
            <Flex ml='0' mr='0' color='none'>
                <Column color="none" justify="center" pb="2rem" m='auto'>
                    <Title align="center" size="3rem">
                        Floater Options
                    </Title>
                    <Title2 align="center">Colors Available</Title2>
                    <Flex justify="center" color="none" gap="4rem" p="0" m="0">
                        <span className="dot color1"></span>
                        <span className="dot color2"></span>
                        <span className="dot color3"></span>
                    </Flex>
                    <Flex color="none" justify="center" gap="4rem">
                        <Image src={floater2} objectFit="contain" />
                        <Image src={floater1} objectFit="contain" />
                    </Flex>
                </Column>
            </Flex>
        </Grid>
    );
};

export default Floaters;
