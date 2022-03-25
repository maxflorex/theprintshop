import { Slideshow, Slide } from './Slideshow';
import { Column, Flex } from './Styled/divs/Styled';
import { slides } from '../api/dataOtherServices';
import { Title } from './Styled/fonts/Styled';


const colorOpa = 'rgba(0, 0, 0, 0.7)'
const bg =
    'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80';

const Carousel = () => {
    return (
        <container>
            <Column img={bg} imgMd={bg} p="4rem" attach="fixed" gap="2rem" gapMd='0' mt='8rem' mb='8rem'>
                <Slideshow navigation={true} autoplay={true}>
                    {slides.map((data, index) => (
                        <Slide key={index}>
                            <a href={data.link}>
                                <Column color="white" p="0" gap='0' className='shadow'>
                                    <Title size="2rem" mb='1rem' mt='1rem'>{data.title}</Title>
                                    <Column img={data.img} imgMd={data.img} m="0" p='0' radius='0'>
                                        <Column color={colorOpa} colorH='transparent' m='0' radius='0'/>
                                    </Column>
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