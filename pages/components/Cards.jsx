import {
    Flex,
    Items,
    Column,
    Row,
    Backdrop,
    BackdropDark,
} from '../../Styled/divs/Styled';
import { data } from '../api/dataServices';
import { Title } from '../../Styled/fonts/Styled';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Cards = () => {
    const [inUseCard, setInUseCard] = useState(null);

    const container = {
        hidden: { y: '-100%', opacity: 0 },
        show: {
            y: '0', opacity: 1,
            transition: {
                delayChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { y: '-100%' },
        show: { y: '0' },
    };

    const colorOpa = 'rgba(0, 0, 0, 0.4)';

    return (
        <Items mr="2rem" ml="2rem" p="0">
            {data.map((data, index) => (
                <Link key={index} href={data.link} passHref>
                    <Row
                        p="0"
                        m="0"
                        className="bg-white rounded"
                        align="center"
                        onMouseEnter={() => setInUseCard(data.title)}
                        onMouseLeave={() => setInUseCard(null)}
                    >
                        <Title size="2rem">{data.title}</Title>

                        <Column
                            m="0"
                            img={data.bg}
                            imgMd={data.bg}
                            radius="0"
                            p="0"
                        >
                            <Column
                                m="0"
                                p="0"
                                color={colorOpa}
                                h="10rem"
                                radius="0"
                            >
                                <motion.div
                                    variants={container}
                                    initial="hidden"
                                    animate={
                                        inUseCard === data.title
                                            ? 'show'
                                            : 'hidden'
                                    }
                                >
                                    <motion.div variants={item}>
                                        <Backdrop
                                            align="center"
                                            m="0"
                                            p="0"
                                            radius="0"
                                            h="10rem"
                                        >
                                            <img
                                                src={data.img}
                                                alt={data.title}
                                                style={{
                                                    maxWidth: '6rem',
                                                    height: '100%',
                                                    margin: 'auto',
                                                }}
                                            />
                                        </Backdrop>
                                    </motion.div>
                                </motion.div>
                            </Column>
                        </Column>
                    </Row>
                </Link>
            ))}
        </Items>
    );
};

export default Cards;
