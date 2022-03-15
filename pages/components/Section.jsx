import {
    Flex,
    Grid,
    Backdrop,
    Column,
    Row,
    FlexItems,
    BackdropDark,
} from './Styled/divs/Styled';
import { Title, P, Para } from './Styled/fonts/Styled';
import { BtnBlack, Button } from './Styled/buttons/Styled';

const link = 'https://images.unsplash.com/photo-1550275994-2bc88dc68637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&width=987&q=80'

const Section = () => {
    return (
        <Column img={link}p='0' m='2rem'  attach='fixed'>
            <BackdropDark>
                <Row gap="4rem" p="4rem">
                    <Backdrop p="4rem">
                        <Title size="3.2rem">Hand-picked Art Papers</Title>
                        <Para
                            size="1.2rem"
                            color="black"
                            font="Roboto"
                            align="center"
                        >
                            Museum Quality
                        </Para>
                        <BtnBlack>
                            <a href="/products/paper">Know more</a>
                        </BtnBlack>
                    </Backdrop>

                    <Backdrop className="shadow" p="4rem">
                        <Title size="3.2rem">For Artists & Photographers</Title>
                        <Para
                            size="1.2rem"
                            color="black"
                            font="Roboto"
                            align="center"
                        >
                            Get the best deals and fastest turnarounds
                        </Para>
                        <BtnBlack>
                            <a href="/contact">Know more</a>
                        </BtnBlack>
                    </Backdrop>
                </Row>
            </BackdropDark>
        </Column>
    );
};

export default Section;
