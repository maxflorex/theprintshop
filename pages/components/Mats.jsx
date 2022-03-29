import React from 'react';
import { Column } from '../../Styled/divs/Styled';
import { Title } from '../../Styled/fonts/Styled';

const link2 =
    'https://images.pexels.com/photos/8947627/pexels-photo-8947627.jpeg?cs=srgb&dl=pexels-karolina-grabowska-8947627.jpg&fm=jpg';

const Mats = () => {
    return (
        <Column img={link2} imgMd={link2} m="2rem" p="0" attach='fixed' displaySm='none'>
            <Column color="var(--gradient2)" p="0" m="0" h="25vh">
                <Title size="6rem" w="100" sizeSm="3rem">
                    Custom Sized Mats
                </Title>
                <Title font="Roboto" w="400" size="1rem">
                    *Ask for color availability
                </Title>
            </Column>
        </Column>
    );
};

export default Mats;
