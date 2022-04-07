import Slideshow, { Slide } from './Slideshow';

import { Column, Flex } from '../../Styled/divs/Styled';
import { data } from '../api/dataServices';
import { Title } from '../../Styled/fonts/Styled';

const bg =
    'https://images.unsplash.com/photo-1618367588411-d9a90fefa881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80';

const Carousel = () => {
    return (
        <div>
            <Column img={bg} imgMd={bg} p="4rem" attach="fixed" gap="2rem"  pSm='1rem' mSm='1rem'>
                <Slideshow navigation={true}>
                    {data.map((data, index) => (
                        <Slide key={index}>
                            <a href={data.link}>
                                <Column color="white" p="0">
                                    <Title size="2rem">{data.title}</Title>
                                    <img src={data.bg} alt={data.title} style={{height: '10rem'}}/>
                                </Column>
                            </a>
                        </Slide>
                    ))}
                </Slideshow>
            </Column>
        </div>
    );
};

export default Carousel;
