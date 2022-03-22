import Image from 'next/image';
import { dataBorders } from '../api/dataBorders';
import { Column, Items3 } from './Styled/divs/Styled';
import { Title } from './Styled/fonts/Styled';

const GalleryWrap = () => {
    return (
        <div>
            <Column p="4rem" gap="2rem">
                <Title size="3rem">Gallery Wrap Options</Title>
                <Items3 m="0" p="0" gapSm='0'>
                    {dataBorders.map((dataBorders, index) => (
                        <Column key={index} m="0" p='2rem'>
                            <Image src={dataBorders.img} objectFit="contain" width={200} height={200} />
                            <Title size="1rem">Border Style</Title>
                            <Title size="2rem" font="Roboto">
                                {dataBorders.title}
                            </Title>
                        </Column>
                    ))}
                </Items3>
            </Column>
        </div>
    );
};

export default GalleryWrap;
