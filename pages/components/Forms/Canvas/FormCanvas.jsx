import React, { useEffect, useState } from 'react';
import { dataBorders } from '../../../api/dataBorders';
import {
    Column,
    Flex,
    FlexItems,
    Items,
    Items3,
    Items6,
} from '../../Styled/divs/Styled';
import { Title } from '../../Styled/fonts/Styled';
import { FiChevronDown, FiDownloadCloud } from 'react-icons/fi';
import { dataStretchers } from '../../../api/dataStretchers';
import { dataFloaters } from '../../../api/dataFloaters';
import { storage } from '../../../../firebase/config';
import { ref, uploadBytesResumable } from 'firebase/storage';
import Image from 'next/image';
import Instructions from '../../Instructions';
import { Button, BtnBlack } from '../../Styled/buttons/Styled';

const FormCanvas = ({
    setIsBorder,
    isBorder,
    isFloaters,
    isStretchers,
    setStretchers,
    setIsFloaters,
    qty,
    wide,
    tall,
    instructions,
    handleChange,
    handleSubmit,
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
                <Title font="Roboto" size="1rem" mr="2rem" w="400">
                    Default: Mirrored
                </Title>
            </Flex>

            {/* TAB - BORDERS - CONTENT */}

            {isOpen && (
                <Items6 mt="2rem" ml="0" mr="0" p="0" color="transparent">
                    {dataBorders.map((data, index) => (
                        <FlexItems
                            key={index}
                            color={`${
                                isBorder === data.title
                                    ? 'var(--off2)'
                                    : 'white'
                            }`}
                            p="1rem"
                            onClick={() => setIsBorder(data.title)}
                        >
                            <Title mb="2rem">{data.title}</Title>
                            <div style={{ margin: '-2rem' }}>
                                <Image
                                    src={data.img} 
                                    alt={data.title}
                                    objectFit="cover"
                                    height={800}
                                    width={800}
                                />
                            </div>
                        </FlexItems>
                    ))}
                </Items6>
            )}

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
                <Title font="Roboto" size="1rem" mr="2rem" w="400">
                    Default: 1.5&quot;
                </Title>
            </Flex>

            {/* TAB - STRETCHER BARS -CONTENT */}

            {isOpenSb && (
                <Items3 mt="2rem" ml="0" mr="0" p="0" color="transparent">
                    {dataStretchers.map((data, index) => (
                        <FlexItems
                            key={index}
                            color={`${
                                isStretchers === data.title
                                    ? 'var(--off2)'
                                    : 'white'
                            }`}
                            onClick={() => setStretchers(data.title)}
                        >
                            <Title style={{ padding: '2rem' }}>
                                {data.title}
                            </Title>
                            <Flex
                                m="0"
                                color="none"
                                width="70%"
                                hMax="8rem"
                                justify="end"
                                justifyMd="end"
                            >
                                <div style={{ margin: '-1rem' }}>
                                    <Image
                                        src={data.img2}
                                        objectFit="contain"
                                        alt={data.title}
                                    />
                                </div>
                            </Flex>
                        </FlexItems>
                    ))}
                </Items3>
            )}

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
                <Title font="Roboto" size="1rem" mr="2rem" w="400">
                    Default: No Floaters
                </Title>
            </Flex>

            {/* TAB - FLOATERSS -CONTENT */}

            {isOpenF && (
                <Items mt="2rem" ml="0" mr="0" p="0" color="transparent">
                    {dataFloaters.map((data, index) => (
                        <FlexItems
                            key={index}
                            p="2rem"
                            color={`${
                                isFloaters === data.title
                                    ? 'var(--off2)'
                                    : 'none'
                            }`}
                            onClick={() => setIsFloaters(data.title)}
                        >
                            <Column m="auto" p="0" align="centre">
                                <span className={data.color}></span>
                                <Title>{data.title}</Title>
                            </Column>
                        </FlexItems>
                    ))}
                </Items>
            )}

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
                <Title font="Roboto" size="1rem" mr="2rem" w="400">
                    Complete to Order
                </Title>
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

            {/* SUBMIT FORM */}
            <Column m="0">
                <BtnBlack onClick={handleSubmit} m="auto">
                    Submit Order
                </BtnBlack>
            </Column>
        </>
    );
};

export default FormCanvas;
