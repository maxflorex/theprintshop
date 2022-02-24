import {
    Flex,
    Items,
    Column,
    Grid,
    Row,
    BackdropDark,
} from './Styled/divs/Styled';
import { data } from '../api/dataServices';
import { P, Title } from './Styled/fonts/Styled';
import Image from 'next/image';

const link =
    'https://images.unsplash.com/photo-1540275994-cdc89cd1948f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&width=987&q=80';

const Cards = () => {
    return (
        <Items mt="4rem" mb="4rem" mr="2rem" ml="2rem" pt='2rem' pb='2rem'>
            {data.map((data, index) => (
                <Row
                    p="0"
                    m="0"
                    key={index}
                    className="bg-white rounded"
                    align="center"
                >
                    <Flex m="0" p="1rem">
                        <Title size="2.4rem">{data.title}</Title>
                    </Flex>
                    <Column m="0" img={data.bg} mt="0" radius="0">
                        <Column align="center" m="0" p="0">
                            <Image
                                src={data.image}
                                alt={data.title}
                                height={60}
                                width={100}
                            />
                        </Column>
                    </Column>
                </Row>
            ))}
        </Items>
    );
};

export default Cards;
