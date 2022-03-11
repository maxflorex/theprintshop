import Link from 'next/link';
import { Flex, Column, Items } from './Styled/divs/Styled';
import { P, Title, Para } from './Styled/fonts/Styled';

function Footer() {
    return (
        <div>
            <div className="bg-black">
                <section>
                    <Items mb="0" pt="4rem" mt="6rem">
                        <Column>
                            <Title
                                mb="1rem"
                                color="white"
                                align="left"
                                size="2rem"
                            >
                                Contact
                            </Title>
                            <Para ls="0.05rem" color="white" font="Roboto">
                                <Link href="mailto:prints@artcaymanco.com">
                                    prints@artcaymanco.com
                                </Link>
                            </Para>
                            <Para ls="0.05rem" color="white" font="Roboto">
                                <Link href="tel:+3459232222">
                                    +1(345) 923-2222
                                </Link>
                            </Para>
                        </Column>
                        <Column>
                            <Title
                                mb="1rem"
                                color="white"
                                align="left"
                                size="2rem"
                            >
                                Printing
                            </Title>
                            <Para ls="0.05rem" color="white" font="Roboto">
                                Giclee
                            </Para>
                            <Para ls="0.05rem" color="white" font="Roboto">
                                Framing
                            </Para>
                            <Para ls="0.05rem" color="white" font="Roboto">
                                Photo Restoration
                            </Para>
                            <Para ls="0.05rem" color="white" font="Roboto">
                                Test Prints
                            </Para>
                        </Column>
                        <Column>
                            <Title
                                mb="1rem"
                                color="white"
                                align="left"
                                size="2rem"
                            >
                                Artists
                            </Title>
                            <Para ls="0.05rem" color="white" font="Roboto">
                                Discounts
                            </Para>
                            <Para ls="0.05rem" color="white" font="Roboto">
                                Prices
                            </Para>
                        </Column>
                        <Column>
                            <Title
                                mb="1rem"
                                color="white"
                                align="left"
                                size="2rem"
                            >
                                The Printshop
                            </Title>
                            <Para ls="0.05rem" color="white" font="Roboto">
                                Our Team
                            </Para>
                            <Para ls="0.05rem" color="white" font="Roboto">
                                Contact
                            </Para>
                            <Para ls="0.05rem" color="white" font="Roboto">
                                News
                            </Para>
                            <Para ls="0.05rem" color="white" font="Roboto">
                                Print Studio
                            </Para>
                            <Para ls="0.05rem" color="white" font="Roboto">
                                Privacy Policy
                            </Para>
                        </Column>
                    </Items>
                </section>
            </div>
            <div>
                <Flex m="0" radius="0" color="var(--off1)" pt="1rem" pb="1rem">
                    <div>
                        <Para color="black" font="Roboto" ls="0.05rem">
                            The Printshop™
                        </Para>
                    </div>
                    <div>
                        <Para color="black" font="Roboto" ls="0.05rem">
                            Art Cayman Co. - 2022
                        </Para>
                    </div>
                </Flex>
            </div>
        </div>
    );
}

export default Footer;
