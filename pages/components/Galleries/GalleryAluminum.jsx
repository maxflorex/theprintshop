import { getDownloadURL, listAll } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { gsAluminumRef, gsCanvasRef, storage } from '../../../firebase/config';
import { Column, Items6 } from '../../../Styled/divs/Styled';

import { Title } from '../../../Styled/fonts/Styled';

function GalleryAluminum({ setSelectedImg }) {
    // STATES TO PULL OUT THE DATA
    const [dataAluminum, setDataAluminum] = useState([]);
    const [image, setImage] = useState('');

    // LIST ALL THE ITEMS
    useEffect(() => {
        listAll(gsAluminumRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImage(url);
                    setDataAluminum((arrayUrl) => [...arrayUrl, url]);
                });
            });
        });
    }, []);

    return (
        <Column pb='0' pbSm='8rem'>
            <Title size="3rem" mb="1rem">
                Product Gallery
            </Title>
            <Items6 p="0" mSm="0">
                {dataAluminum.map((val, index) => (
                    <img
                        key={index}
                        src={val}
                        alt={val}
                        style={{
                            borderRadius: '0.6rem',
                            width: '100%',
                            height: '10rem',
                        }}
                        className="imageGallery"
                        onClick={() => setSelectedImg(val)}
                    />
                ))}
            </Items6>
        </Column>
    );
}

export default GalleryAluminum;
