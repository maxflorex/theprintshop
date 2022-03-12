import React, { useEffect, useState } from 'react';
import { dataBorders } from '../../api/dataBorders';
import { Column, Flex, Items, Items3, Items6, Row } from '../Styled/divs/Styled';
import { Title } from '../Styled/fonts/Styled';
import { FiChevronDown, FiDownloadCloud } from 'react-icons/fi';
import { dataStretchers } from '../../api/dataStretchers';
import { dataFloaters } from '../../api/dataFloaters';
import { storage } from '../../firebase/config';
import { ref, uploadBytesResumable } from 'firebase/storage';
import Image from 'next/image';
import Instructions from '../Instructions';

const FormCanvas = ({
    setIsBorder,
    setStretchers,
    setIsFloaters,
    qty,
    wide,
    tall,
    instructions,
    handleChange,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSb, setIsOpenSb] = useState(false);
    const [isOpenF, setIsOpenF] = useState(false);
    const [isOpenC, setIsOpenC] = useState(false);

    // UPLOAD FILES
    const uploadFiles = () => {
        document.getElementById('files').click();
    };

    // PREVIEW IMAGE UPLOADED
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);

    let txt = selectedImage === null ? 'Upload your image' : 'Image Uploaded!';

    // FIREBASE STORAGE
    const upload = (e) => {
        let file = e.target.files[0];
        // CREATE REF
        let fileRef = ref(storage, file.name);
        // UPLOAD TASK
        const uploadTask = uploadBytesResumable(fileRef, file);
        // TRACK PROGRESS
        uploadTask.on('state_changed', (snapshot) => {
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            console.log('Upload is' + progress + '% done');
        });
        // PREV FN
        setSelectedImage(file);
    };

     

    return (
        <>
            {/* ----------------------------------------------- */}
            {/* TAB - BORDERS */}
            <Flex
                color="none"
                m="0"
                p="0"
                bb="solid var(--off3) 1px"
                radius="0"
                colorH="var(--off2)"
                cursor="pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Flex
                    m="0"
                    p="0 "
                    mb="2rem"
                    color="none"
                    justify="start"
                    gap="0"
                >
                    <Title m="2rem">Select Borders</Title>
                    <FiChevronDown />
                </Flex>
                <Title font='Roboto' size='1rem'mr='2rem' w='400'>Default: Mirrored</Title>
            </Flex>

            {/* TAB - BORDERS - CONTENT */}

            {isOpen && (
                <Items6 mt="2rem" ml="0" mr="0" p="0" color="transparent">
                    {dataBorders.map((data, index) => (
                        <Flex
                            mr="0"
                            ml="0"
                            gapMd="1rem"
                            key={index}
                            cursor="pointer"
                            colorF="var(--accent)"
                            colora="var(--accent)"
                            className="bg-white"
                            p="1rem"
                            onClick={() => setIsBorder(data.title)}
                        >
                            <Title m="1rem">{data.title}</Title>
                            <Image
                                src={data.img}
                                objectFit="cover"
                                height={800}
                                width={800}
                            />
                        </Flex>
                    ))}
                </Items6>
            )}

            {/* ----------------------------------------------- */}
            {/* TAB - STRETCHER BARS */}
            <Flex
                color="none"
                m="0"
                p="0"
                bb="solid var(--off3) 1px"
                radius="0"
                colorH="var(--off2)"
                cursor="pointer"
                onClick={() => setIsOpenSb(!isOpenSb)}
            >
                <Flex
                    m="0"
                    p="0 "
                    mb="2rem"
                    color="none"
                    justify="start"
                    gap="0"
                >
                    <Title m="2rem">Select Stretchers</Title>
                    <FiChevronDown />
                </Flex>
                <Title font='Roboto' size='1rem'mr='2rem' w='400'>Default: 1.5"</Title>
            </Flex>

            {/* TAB - STRETCHER BARS -CONTENT */}

            {isOpenSb && (
                <Items3 mt="2rem" ml="0" mr="0" p="0" color="transparent">
                    {dataStretchers.map((data, index) => (
                        <Flex
                            mr="0"
                            ml="0"
                            gapMd="1rem"
                            key={index}
                            cursor="pointer"
                            colorF="var(--accent)"
                            colora="var(--accent)"
                            className="bg-white"
                            onClick={() => setStretchers(data.title)}
                        >
                            <Title>{data.title}</Title>
                            <Flex
                                m="0"
                                p="0"
                                color="none"
                                width="80%"
                                hMax="8rem"
                                justify="end"
                                justifyMd="end"
                            >
                                <Image src={data.img2} objectFit="contain" />
                            </Flex>
                        </Flex>
                    ))}
                </Items3>
            )}

            {/* ----------------------------------------------- */}
            {/* TAB - FLOATERS */}

            <Flex
                color="none"
                m="0"
                p="0"
                bb="solid var(--off3) 1px"
                radius="0"
                colorH="var(--off2)"
                cursor="pointer"
                onClick={() => setIsOpenF(!isOpenF)}
            >
                <Flex
                    m="0"
                    p="0 "
                    mb="2rem"
                    color="none"
                    justify="start"
                    gap="0"
                >
                    <Title m="2rem">Select Floaters</Title>
                    <FiChevronDown />
                </Flex>
                <Title font='Roboto' size='1rem'mr='2rem' w='400'>Default: No Floaters</Title>
            </Flex>

            {/* TAB - FLOATERSS -CONTENT */}

            {isOpenF && (
                <Items mt="2rem" ml="0" mr="0" p="0" color="transparent">
                    {dataFloaters.map((data, index) => (
                        <Flex
                            color="none"
                            colorH="var(--off2)"
                            mr="0"
                            ml="0"
                            gapMd="1rem"
                            key={index}
                            cursor="pointer"
                            onClick={() => setIsFloaters(data.title)}
                        >
                            <Column m="auto" p="0" align="centre">
                                <span className={data.color}></span>
                                <Title>{data.title}</Title>
                            </Column>
                        </Flex>
                    ))}
                </Items>
            )}

            {/* ----------------------------------------------- */}
            {/* QTY / INSTRUCTIONS / FILE */}

            <Flex
                color="none"
                m="0"
                p="0"
                bb="solid var(--off3) 1px"
                radius="0"
                colorH="var(--off2)"
                cursor="pointer"
                onClick={() => setIsOpenC(!isOpenC)}
            >
                <Flex
                    m="0"
                    p="0 "
                    mb="2rem"
                    color="none"
                    justify="start"
                    gap="0"
                >
                    <Title m="2rem">Select Size & Quantity</Title>
                    <FiChevronDown />
                </Flex>
                <Title font='Roboto' size='1rem'mr='2rem' w='400'>Complete to Order</Title>
            </Flex>

            {isOpenC && (
                <Instructions
                    qty={qty}
                    handleChange={handleChange}
                    wide={wide}
                    tall={tall}
                    txt={txt}
                    uploadFiles={uploadFiles}
                    upload={upload}
                    imageUrl={imageUrl}
                    selectedImage={selectedImage}
                    instructions={instructions}
                />
            )}
        </>
    );
};

export default FormCanvas;
