import { Flex, Grid, Backdrop, Column } from './Styled/divs/Styled';
import { Title, P } from './Styled/fonts/Styled';
import { BtnBlack } from './Styled/buttons/Styled';

const Section = () => {
    return (
        <Column img="https://images.unsplash.com/photo-1550275994-2bc88dc68637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&width=987&q=80">
            <Grid mt="0" gap="0rem" mr="2rem" ml="2rem">
                <Flex h="25vh" p="0" m="0"                     color='none'>
                    <Backdrop className='shadow'>
                        <Title size="3.2rem">Hand-picked Art Papers</Title>
                        <P size="1.2rem" color="black" font="Roboto">
                            Museum Quality
                        </P>
                        <BtnBlack>Know more</BtnBlack>
                    </Backdrop>
                </Flex>
                <Flex
                    h="25vh"
                    p="0"
                    m="0"
                    color='none'
                >
                    <Backdrop className='shadow'>
                        <Title size="3.2rem">For Artists & Photographers</Title>
                        <P size="1.2rem" color="black" font="Roboto">
                            Get the best deals and fastest turnarounds
                        </P>
                        <BtnBlack>Know more</BtnBlack>
                    </Backdrop>
                </Flex>
            </Grid>
        </Column>
    );
};

export default Section;
