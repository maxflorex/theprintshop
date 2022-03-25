import { Column, Flex, Grid } from '../../Styled/divs/Styled';
import { Title, Title2 } from '../../Styled/fonts/Styled';
const link =
    'https://cdn.shopify.com/s/files/1/1419/1428/articles/in-the-making-studio-JWEMsn3ES1U-unsplash_1000x.jpg?v=1642594500';

const Floaters = () => {
    return (
        <Grid>
            <Flex img={link} h="25vh" mt="6rem" mb='4rem' bgSize='100%' p='4rem'/>
            <Flex ml='0' mr='0' color='none'>
                <Column color="none" justify="center" p='0' m='auto'>
                    <Title align="center" size="3rem">
                        Floater Options
                    </Title>
                    <Title2 align="center">Colors Available</Title2>
                    <Flex justify="center" color="none" gap="4rem" p="0" m="0" gapMd='2rem'>
                        <span className="dot color1"></span>
                        <span className="dot color2"></span>
                        <span className="dot color3"></span>
                    </Flex>
                </Column>
            </Flex>
        </Grid>
    );
};

export default Floaters;
