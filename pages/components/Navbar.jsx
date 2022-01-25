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
import { Flex } from './Styled/divs/Styled';
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
                    <li>Canvas</li>
                    <li>Paper</li>
                    <li>Aluminum</li>
                    <li>Framing</li>
                    <li>Services</li>
                    <li className="highlight">Support</li>
                    <Button transform="uppercase" className="accent">
                        Order
                    </Button>
                </Menu>
            </div>
            <a href="/">
                <Image src={logo} />
                <Title w="400" transform="uppercase" ls="0.4rem" size='1rem'>
                    The Printshop
                </Title>
            </a>
        </Flex>
    );
};

export default Navbar;
