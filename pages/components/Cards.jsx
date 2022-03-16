import {
    Flex,
    Items,
    Column,
    Row,
    Backdrop,
} from './Styled/divs/Styled';
import { data } from '../api/dataServices';
import { Title } from './Styled/fonts/Styled';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Cards = () => {
    const [inUseCard, setInUseCard] = useState(null);

    const variants = {
        show: { display: 'block' },
        hide: { display: 'none' },
    };

    const colorOpa = 'rgba(0, 0, 0, 0.7)';

    return (
        <Items mr="2rem" ml="2rem" p="0">
            {data.map((data, index) => (
                <a key={index} href={data.link}>
                    <Row
                        p="0"
                        m="0"
                        className="bg-white rounded"
                        align="center"
                        onMouseEnter={() => setInUseCard(data.title)}
                        onMouseLeave={() => setInUseCard(null)}
                    >
                        <Title size="2rem">{data.title}</Title>

                        <Column m="0" img={data.bg} radius="0" p="0" h="10rem"> 
                            <motion.div
                                animate={
                                    inUseCard === data.title ? 'show' : 'hide'
                                }
                                variants={variants}
                            >
                                <Backdrop
                                    align="center"
                                    m="0"
                                    p="0"
                                    radius="0"
                                    h="10rem"
                                >
                                    <Flex color="none" m="0" p="0">
                                        <Image
                                            src={data.image}
                                            alt={data.title}
                                            width={100}
                                            height={60}
                                        />
                                    </Flex>
                                </Backdrop>
                            </motion.div>
                        </Column>
                    </Row>
                </a>
            ))}
        </Items>
    );
};

export default Cards;
