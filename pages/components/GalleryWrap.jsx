import { dataBorders } from '../api/dataBorders';
import { Column, Items3 } from '../../Styled/divs/Styled';
import { Title } from '../../Styled/fonts/Styled';

const GalleryWrap = () => {
    return (
        <div >
            <Column p="4rem" gap="2rem" mSm='2rem' pSm='2rem' >
                <Title size="3rem" sizeSm='2rem' mb='2rem'>Gallery Wrap Options</Title>
                <Items3 m="0" p="0" gapSm="2rem" columns='repeat(2, minmax(0, 1fr))'>
                    {dataBorders.map((dataBorders, index) => (
                        <Column key={index} m="0" p="2rem" pSm='0'>
                            <img
                                src={dataBorders.img}
                                alt={dataBorders.title}
                                style={{ width: '100%', height: 'auto' }}
                            />
                            <Title size="1rem" displaymD='none' >Border Style</Title>
                            <Title size="2rem" sizeSm='1rem' font="Roboto">
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
