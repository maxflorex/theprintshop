import React from 'react';
import { Title, Menu } from './Styled/fonts/Styled';
import { Flex } from './Styled/divs/Styled';
import { ButtonS } from './Styled/buttons/Styled';
import logo from '../../images/tps-logo.svg';
import Image from 'next/image';

const Navbar = () => {
    return (
        <Flex
            p="0"
            colorMd="transparent"
            mt="2rem"
            mb="2rem"
            color="transparent"
        >
            <div>
                <Menu
                    transform="uppercase"
                    weight="300"
                    ls="0.1rem"
                    size="1rem"
                >
                    <li>
                        <a href="/products/canvas">Canvas </a>
                    </li>
                    <li>
                        <a href="/products/paper"> Paper </a>
                    </li>
                    <li>
                        <a href="/products/aluminum"> Aluminum </a>
                    </li>
                    <li>
                        <a href="/products/framing"> Framing </a>
                    </li>
                    <li>
                        <a href="/services">Services </a>
                    </li>
                    <li>
                        <ButtonS
                            transform="uppercase"
                            font="Oswald"
                            href="/order"
                        >
                            Order
                        </ButtonS>
                    </li>
                    <li>
                        <a href="/support">Support</a>
                    </li>
                </Menu>
            </div>
            <a href="/">
                <Flex
                    m="0"
                    p="0"
                    colorMd="transparent"
                    justify="end"
                    color="transparent"
                >
                    {/* <Image src={logo} /> */}
                    <Title color="black" font="Roboto" ls="0.05rem">
                        The Printshop™
                    </Title>
                </Flex>
            </a>
        </Flex>
    );
};

export default Navbar;
