import { motion } from 'framer-motion';
import { Btn, ButtonS } from '../../../Styled/buttons/Styled';
import { Column } from '../../../Styled/divs/Styled';
import { Menu, Para, Title } from '../../../Styled/fonts/Styled';
import Backdrop from './Backdrop';

const dropIn = {
    hidden: {
        y: '-100vh',
        opacity: 0,
    },
    visible: {
        y: '0',
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: '100vh',
        opacity: 0,
    },
};

const Modal = ({ handleClose }) => {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal orange-gradient"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Column gap="2rem" overflow="visible">
                    <motion.a
                        whileHover={{
                            scale: 1.4,
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        href="/products/canvas"
                    >
                        <Title size="3rem" color="white">
                            Canvas
                        </Title>
                    </motion.a>

                    <motion.a
                        whileHover={{
                            scale: 1.4,
                            transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        href="/products/paper"
                    >
                        <Title size="3rem" color="white">
                            Paper
                        </Title>
                    </motion.a>

                    <motion.a
                        whileHover={{
                            scale: 1.4,
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        href="/products/aluminum"
                    >
                        <Title size="3rem" color="white">
                            Aluminum
                        </Title>
                    </motion.a>

                    <motion.a
                        whileHover={{
                            scale: 1.4,
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        href="/products/framing"
                    >
                        <Title size="3rem" color="white">
                            Framing
                        </Title>
                    </motion.a>

                    <motion.a
                        whileHover={{
                            scale: 1.4,
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        href="/services"
                    >
                        <Title size="3rem" color="white">
                            Services
                        </Title>
                    </motion.a>

                    <motion.a
                        whileHover={{
                            scale: 1.4,
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        href="/contact"
                    >
                        <Title size="3rem" color="white">Contact</Title>
                    </motion.a>

                    <Btn font="Oswald" size="3rem" href="/order">
                        Order
                    </Btn>

                    <motion.a
                        whileHover={{
                            scale: 1.4,
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        href="/support"
                    >
                        <Title size="3rem" color="white">
                            Support
                        </Title>
                    </motion.a>
   
                </Column>
            </motion.div>
        </Backdrop>
    );
};

export default Modal;
