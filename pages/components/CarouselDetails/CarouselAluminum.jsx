import SlideshowDetails, { Slide } from '../SlideshowDetails';

import { Column, Flex } from '../../../Styled/divs/Styled';
import { Para, Title } from '../../../Styled/fonts/Styled';
import { dataPrintDetailAluminum } from '../../api/dataPrintDetails';

const CarouselDetails = () => {
    return (
        <div>
            <Column color="white" p="2rem" gap="2rem" pSm="1rem">
                <SlideshowDetails autoplay={true}>
                    {dataPrintDetailAluminum.map((data, index) => (
                        <Slide key={index}>
                            <Column p="0" mSm="1rem">
                                <img
                                    src={data.img}
                                    alt={data.title}
                                    style={{ height: '3rem', margin: 'auto' }}
                                />
                                <div>
                                    <Title size="1.4rem" sizeSm="1rem">
                                        {data.title}
                                    </Title>
                                    <Para
                                        color="black"
                                        font="Roboto"
                                        size="1rem"
                                        sizeSm="0.8rem"
                                        alignW="center"
                                        align="center"
                                        displayMd="none"
                                    >
                                        {data.sub}
                                    </Para>
                                </div>
                            </Column>
                        </Slide>
                    ))}
                </SlideshowDetails>
            </Column>
        </div>
    );
};

export default CarouselDetails;
