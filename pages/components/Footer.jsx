import Link from 'next/link';
import { Flex, Column, Items } from '../../Styled/divs/Styled';
import { Title, Para } from '../../Styled/fonts/Styled';

function Footer() {
    return (
        <>
            <div className="bg-black">
                <section>
                    <Items mb="0" pt="4rem" mt="6rem" mSm="0" gridSm='repeat(1, minmax(0, 1fr))' gapSm='0'>
                        <Column m="0" items="center" p='2rem'>
                            <Title
                                mb="1rem"
                                color="white"
                                align="left"
                                size="2rem"
                            >
                                Contact
                            </Title>
                            <Para
                                size="1rem"
                                cursor="pointer"
                                ls="0.05rem"
                                color="white"
                                font="Roboto"
                            >
                                <Link
                                    passHref
                                    href="mailto:prints@artcaymanco.com"
                                >
                                    prints@artcaymanco.com
                                </Link>
                            </Para>
                            <Para
                                size="1rem"
                                cursor="pointer"
                                ls="0.05rem"
                                color="white"
                                font="Roboto"
                            >
                                <Link passHref href="tel:+3459232222">
                                    +1(345) 923-2222
                                </Link>
                            </Para>
                        </Column>
                        <Column m="0" items="center" p='2rem'>
                            <Title
                                mb="1rem"
                                color="white"
                                align="left"
                                size="2rem"
                            >
                                Printing
                            </Title>
                            <Link passHref href="/products/canvas">
                                <Para
                                    size="1rem"
                                    cursor="pointer"
                                    ls="0.05rem"
                                    color="white"
                                    font="Roboto"
                                >
                                    Canvas
                                </Para>
                            </Link>
                            <Link passHref href="/products/framing">
                                <Para
                                    size="1rem"
                                    cursor="pointer"
                                    ls="0.05rem"
                                    color="white"
                                    font="Roboto"
                                >
                                    Framing
                                </Para>
                            </Link>
                            <Link passHref href="/products/paper">
                                <Para
                                    size="1rem"
                                    cursor="pointer"
                                    ls="0.05rem"
                                    color="white"
                                    font="Roboto"
                                >
                                    Fine Art Papers
                                </Para>
                            </Link>
                            <Link passHref href="/products/aluminum">
                                <Para
                                    size="1rem"
                                    cursor="pointer"
                                    ls="0.05rem"
                                    color="white"
                                    font="Roboto"
                                >
                                    Aluminum
                                </Para>
                            </Link>
                        </Column>
                        <Column m="0" items="center" p='2rem' displaySm='none' >
                            <Title
                                mb="1rem"
                                color="white"
                                align="left"
                                size="2rem"
                            >
                                Artists
                            </Title>
                            <Link passHref href="/contact">
                                <Para
                                    size="1rem"
                                    cursor="pointer"
                                    ls="0.05rem"
                                    color="white"
                                    font="Roboto"
                                >
                                    Discounts
                                </Para>
                            </Link>
                            <Link passHref href="/contact">
                                <Para
                                    size="1rem"
                                    cursor="pointer"
                                    ls="0.05rem"
                                    color="white"
                                    font="Roboto"
                                >
                                    Prices
                                </Para>
                            </Link>
                        </Column>
                        <Column m="0" items="center" p='2rem'>
                            <Title
                                mb="1rem"
                                color="white"
                                align="left"
                                size="2rem"
                            >
                                The Printshop
                            </Title>
                            <Link passHref href="/about">
                                <Para
                                    size="1rem"
                                    cursor="pointer"
                                    ls="0.05rem"
                                    color="white"
                                    font="Roboto"
                                >
                                    About Us
                                </Para>
                            </Link>
                            <Link passHref href="/contact">
                                <Para
                                    size="1rem"
                                    cursor="pointer"
                                    ls="0.05rem"
                                    color="white"
                                    font="Roboto"
                                >
                                    Contact
                                </Para>
                            </Link>
                            <Link passHref href="/news">
                                <Para
                                    size="1rem"
                                    cursor="pointer"
                                    ls="0.05rem"
                                    color="white"
                                    font="Roboto"
                                >
                                    News
                                </Para>
                            </Link>
                            <Link passHref href="/privacy-policy">
                                <Para
                                    size="1rem"
                                    cursor="pointer"
                                    ls="0.05rem"
                                    color="white"
                                    font="Roboto"
                                >
                                    Privacy Policy
                                </Para>
                            </Link>
                        </Column>
                    </Items>
                </section>
            </div>
            <div>
                <Flex
                    m="0"
                    radius="0"
                    color="var(--off1)"
                    pt="1rem"
                    pb="1rem"
                    justifyMd="space-between"
                >
                    <div>
                        <Para
                            size="1rem"
                            cursor="pointer"
                            color="black"
                            font="Roboto"
                            ls="0.05rem"
                        >
                            The Printshop™
                        </Para>
                    </div>
                    <div>
                        <Para
                            size="1rem"
                            cursor="pointer"
                            color="black"
                            font="Roboto"
                            ls="0.05rem"
                        >
                            Art Cayman Co. - 2022
                        </Para>
                    </div>
                </Flex>
            </div>
        </>
    );
}

export default Footer;
