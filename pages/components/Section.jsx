import {
    Flex,
    Grid,
    Backdrop,
    Column,
    Row,
    FlexItems,
    BackdropDark,
} from '../../Styled/divs/Styled';
import { Title, P, Para } from '../../Styled/fonts/Styled';
import { BtnBlack, Button } from '../../Styled/buttons/Styled';
import Link from 'next/link';

const link =
    'https://images.unsplash.com/photo-1550275994-2bc88dc68637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&width=987&q=80';

const Section = () => {
    return (
        <Column img={link} imgMd={link} p="0" m="2rem" mSm='1rem' attach="fixed">
            <BackdropDark mSm='0'>
                <Row gap="4rem" p="4rem" pSm='2rem' gapSm='2rem'>
                    <Backdrop p="4rem">
                        <Title size="3rem" sizeSm='2rem' mb='1rem'>Hand-picked Art Papers</Title>
                        <Para
                            size="1.2rem"
                            color="black"
                            font="Roboto"
                            align="center"
                        >
                            Museum Quality
                        </Para>
                        <Link href="/products/paper" passHref>
                            <BtnBlack>Know more</BtnBlack>
                        </Link>
                    </Backdrop>

                    <Backdrop className="shadow" p="4rem">
                        <Title size="3rem" sizeSm='2rem' mb='1rem'>For Artists & Photographers</Title>
                        <Para
                            size="1.2rem"
                            color="black"
                            font="Roboto"
                            align="center"
                        >
                            Get the best deals and fastest turnarounds
                        </Para>
                        <Link href="/contact" passHref>
                            <BtnBlack>Know more</BtnBlack>
                        </Link>
                    </Backdrop>
                </Row>
            </BackdropDark>
        </Column>
    );
};

export default Section;
