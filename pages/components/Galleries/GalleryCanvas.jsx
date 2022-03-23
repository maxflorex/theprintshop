import { getDownloadURL, listAll } from 'firebase/storage';
import { useEffect, useState } from 'react';
import {  gsCanvasRef,  storage } from '../../firebase/config';
import { Column, Items6 } from '../Styled/divs/Styled';
import Image from 'next/image';
import { Title } from '../Styled/fonts/Styled';

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
            <Title size='3rem' mb='1rem' mt='6rem'>Product Gallery</Title>
            <Items6 p='0'>
                {dataAluminum.map((val, index) => (
                    <Image
                        key={index}
                        src={val}
                        alt={val}
                        width={100}
                        height={200}
                        objectFit="cover"
                        style={{ borderRadius: '0.6rem' }}
                        className="imageGallery"
                        onClick={() => setSelectedImg(val)}
                    />
                ))}
            </Items6>
        </>
    );
}

export default GalleryCanvas;
