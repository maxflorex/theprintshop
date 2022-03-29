import { getDownloadURL, listAll } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { gsCanvasRef, storage } from '../../../firebase/config';
import { Column, Items6 } from '../../../Styled/divs/Styled';

import { Title } from '../../../Styled/fonts/Styled';

function GalleryCanvas({ setSelectedImg }) {
    // STATES TO PULL OUT THE DATA
    const [dataAluminum, setDataAluminum] = useState([]);
    const [image, setImage] = useState('');

    // LIST ALL THE ITEMS
    useEffect(() => {
        listAll(gsCanvasRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImage(url);
                    setDataAluminum((arrayUrl) => [...arrayUrl, url]);
                });
            });
        });
    }, []);

    return (
        <>
            <Title size="3rem" mb="1rem" mt="6rem">
                Product Gallery
            </Title>
            <Items6 p="0" mSm='2rem'>
                {dataAluminum.map((val, index) => (
                    <img
                        key={index}
                        src={val}
                        alt={val}
                        style={{ borderRadius: '0.6rem', width: '100%', height: '10rem' }}
                        className="imageGallery"
                        onClick={() => setSelectedImg(val)}
                    />
                ))}
            </Items6>
        </>
    );
}

export default GalleryCanvas;
