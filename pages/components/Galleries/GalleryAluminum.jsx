import { getDownloadURL, listAll } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { gsAluminumRef, storage } from '../../firebase/config';
import { Column, Items6 } from '../Styled/divs/Styled';
import Image from 'next/image';
import { Title } from '../Styled/fonts/Styled';

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
    }, [listAll]);

    return (
        <Column>
            <Title size='3rem' mb='1rem'>Product Gallery</Title>
            <Items6 p='0'>
                {dataAluminum.map((val, index) => (
                    <Image
                        key={index}
                        src={val}
                        alt={val}
                        width={1}
                        height={1}
                        layout="responsive"
                        objectFit="cover"
                        style={{ borderRadius: '0.6rem' }}
                        className="imageGallery"
                        onClick={() => setSelectedImg(val)}
                    />
                ))}
            </Items6>
        </Column>
    );
}

export default GalleryAluminum;
