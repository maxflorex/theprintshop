import { Slideshow, Slide } from './Slideshow';
import Image from 'next/image';
import { Column, Flex } from './Styled/divs/Styled';
import { data } from '../api/dataServices';
import { Title } from './Styled/fonts/Styled';

const bg =
    'https://images.unsplash.com/photo-1618367588411-d9a90fefa881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80';

const Carousel = () => {
    return (
        <container>
            <Column img={bg} imgMd={bg} p="4rem" attach="fixed" gap="2rem">
                <Slideshow navigation={true}>
                    {data.map((data, index) => (
                        <Slide key={index}>
                            <a href={data.link}>
                                <Column color="white" p="0">
                                    <Title size="2rem">{data.title}</Title>
                                    <Image
                                        src={data.bg}
                                        alt={data.title}
                                        width={200}
                                        height={100}
                                        objectFit="cover"
                                    />
                                </Column>
                            </a>
                        </Slide>
                    ))}
                </Slideshow>
            </Column>
        </container>
    );
};

export default Carousel;
