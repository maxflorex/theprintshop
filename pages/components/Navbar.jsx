import React, { useState } from 'react';
import { Title, Menu } from './../../Styled/fonts/Styled';
import { Flex } from '../../Styled/divs/Styled';
import { ButtonS } from '../../Styled/buttons/Styled';
import { AnimatePresence, motion } from 'framer-motion';
import Modal from './Menu/Modal';
import { FiMinus } from 'react-icons/fi';
import Link from 'next/link';

const Navbar = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    return (
        <Flex
            p="0"
            colorMd="transparent"
            mt="2rem"
            mb="2rem"
            mtSm="1rem"
            mbSm="1rem"
            color="transparent"
            justifyMd="space-between"
        >
            <div>
                <Menu
                    transform="uppercase"
                    weight="300"
                    ls="0.1rem"
                    size="1rem"
                >
                    <li>
                        <Link href="/products/canvas">Canvas </Link>
                    </li>
                    <li>
                        <Link href="/products/paper"> Paper </Link>
                    </li>
                    <li>
                        <Link href="/products/aluminum"> Aluminum </Link>
                    </li>
                    <li>
                        <Link href="/products/framing"> Framing </Link>
                    </li>
                    <li>
                        <Link href="/services">Services </Link>
                    </li>
                    <ButtonS transform="uppercase" font="Oswald" href="/order">
                        Order
                    </ButtonS>
                    <li>
                        <Link href="/support">Support</Link>
                    </li>
                </Menu>
                <div className="burger">
                    <motion.a
                        whileHover={{ scale: 2 }}
                        onClick={() => (modalOpen ? close() : open())}
                    >
                        <FiMinus
                        className='burgerIcon'
                        />
                    </motion.a>
                    <AnimatePresence
                        // Disable any initial animations on children that
                        // are present when the component is first rendered
                        initial={false}
                        // Only render one component at a time.
                        // The exiting component will finish its exit
                        // animation before entering component is rendered
                        exitBeforeEnter={true}
                        // Fires when all exiting nodes have completed animating out
                        onExitComplete={() =>  undefined}
                    >
                        {modalOpen && (
                            <Modal modalOpen={modalOpen} handleClose={close} />
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <Link href="/" passHref>
                <Flex
                    m="0"
                    p="0"
                    colorMd="transparent"
                    justify="end"
                    color="transparent"
                >
                    <Title
                        color="black"
                        font="Roboto"
                        ls="0.05rem"
                        style={{ cursor: 'pointer' }}
                        sizeSm='1.4rem'
                    >
                        The Printshop™
                    </Title>
                </Flex>
            </Link>
        </Flex>
    );
};

export default Navbar;
