import React from 'react';
import {
    Title,
    TitleMd,
    TitleLg,
    TitleXl,
    TitleXxl,
    P,
    Menu,
} from './Styled/fonts/Styled';
import { Flex, Hero, Row } from './Styled/divs/Styled';
import { Button } from './Styled/buttons/Styled';
import logo from '../../images/tps-logo.svg';
import Image from 'next/image';

const Navbar = () => {
    return (
        <Flex>
            <div>
                <Menu
                    transform="uppercase"
                    weight="200"
                    weight="300"
                    ls="0.1rem"
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
                    <li className="highlight">
                        <a href="/support">Support</a>
                    </li>
                    <Button
                        transform="uppercase"
                        className="accent"
                        font="Oswald"
                        href="/order"
                    >
                        Order
                    </Button>
                </Menu>
            </div>
            <a href="/">
                <Flex m='0' p='0'>
                    <Image src={logo} />
                    <Title
                        width="400"
                        transform="uppercase"
                        ls="0.4rem"
                        size="1rem"
                    >
                        The Printshop
                    </Title>
                </Flex>
            </a>
        </Flex>
    );
};

export default Navbar;
