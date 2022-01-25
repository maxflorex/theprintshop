import { Flex, Items } from './Styled/divs/Styled';
import { data } from '../api/dataServices';
import { P, Title } from './Styled/fonts/Styled';
import Image from 'next/image';

const Cards = () => {
    return (
        <Items mt='0' mb='0'>
            {data.map((data, index) => (
                <div key={index} className="bg-white rounded">
                    <Flex m="0" p="2rem" color="none">
                        <Title size="2.4rem" >
                            {data.title}
                        </Title>
                        <Image
                            src={data.image}
                            alt={data.title}
                            height={50}
                            width={50}
                        />
                    </Flex>
                </div>
            ))}
        </Items>
    );
};

export default Cards;
