import { Flex, Column, Items } from './Styled/divs/Styled';
import { Title, P } from './Styled/fonts/Styled';

function Footer() {
    return (
        <>
            <div className="bg-black">
                <section>
                    <Items mb="0" pt="4rem" mt="6rem">
                        <Column>
                            <Title
                                size="1rem"
                                color="white"
                                font="Roboto"
                                w="300"
                            >
                                Contact
                            </Title>
                            <Title
                                size="1rem"
                                color="white"
                                font="Roboto"
                                w="300"
                            >
                                prints@artcaymanco.com
                            </Title>
                            <Title
                                size="1rem"
                                color="white"
                                font="Roboto"
                                w="300"
                            >
                                +1(345) 923-2222
                            </Title>
                        </Column>
                        <Column>
                            <Title
                                size="1rem"
                                color="white"
                                font="Roboto"
                                w="300"
                            >
                                Printing
                            </Title>
                            <Title
                                size="1rem"
                                color="white"
                                font="Roboto"
                                w="300"
                            >
                                Giclee
                            </Title>
                            <Title
                                size="1rem"
                                color="white"
                                font="Roboto"
                                w="300"
                            >
                                Framing
                            </Title>
                            <Title
                                size="1rem"
                                color="white"
                                font="Roboto"
                                w="300"
                            >
                                Photo Restoration
                            </Title>
                            <Title
                                size="1rem"
                                color="white"
                                font="Roboto"
                                w="300"
                            >
                                Test Prints
                            </Title>
                        </Column>
                        <Column>
                            <Title
                                size="1rem"
                                color="white"
                                font="Roboto"
                                w="300"
                            >
                                Artists
                            </Title>
                            <Title
                                size="1rem"
                                color="white"
                                font="Roboto"
                                w="300"
                            >
                                Discounts
                            </Title>
                            <Title
                                size="1rem"
                                color="white"
                                font="Roboto"
                                w="300"
                            >
                                Prices
                            </Title>
                        </Column>
                        <Column>
                            <Title
                                size="1rem"
                                color="white"
                                font="Roboto"
                                w="300"
                            >
                                About The Printshop
                            </Title>
                            <Title
                                size="1rem"
                                color="white"
                                font="Roboto"
                                w="300"
                            >
                                Our Team
                            </Title>
                            <Title
                                size="1rem"
                                color="white"
                                font="Roboto"
                                w="300"
                            >
                                Contact
                            </Title>
                            <Title
                                size="1rem"
                                color="white"
                                font="Roboto"
                                w="300"
                            >
                                News
                            </Title>
                            <Title
                                size="1rem"
                                color="white"
                                font="Roboto"
                                w="300"
                            >
                                Print Studio
                            </Title>
                            <Title
                                size="1rem"
                                color="white"
                                font="Roboto"
                                w="300"
                            >
                                Privacy Policy
                            </Title>
                        </Column>
                    </Items>
                </section>
            </div>
                <footer>
                    <Flex m="0" radius="0" color='var(--off1)' pt='1rem' pb='1rem'>
                        <div>
                            <P color="black" font="Roboto" w="300" size="1rem">
                                The Printshop™
                            </P>
                        </div>
                        <div>
                            <P color="black" font="Roboto" w="300" size="1rem">
                                Art Cayman Co. - 2022
                            </P>
                        </div>
                    </Flex>
                </footer>
        </>
    );
}

export default Footer;
