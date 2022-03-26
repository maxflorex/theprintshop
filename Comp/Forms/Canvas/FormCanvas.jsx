import React, { useEffect, useState } from 'react';

import {
    Column,
    Flex,
    FlexItems,
    Items,
    Items3,
    Items6,
} from '../../../Styled/divs/Styled';
import { Title } from '../../../Styled/fonts/Styled';
import { FiChevronDown, FiDownloadCloud } from 'react-icons/fi';

import { storage } from '../../../firebase/config';
import { ref, uploadBytesResumable } from 'firebase/storage';

import Instructions from '../Instructions';
import { Button, BtnBlack } from '../../../Styled/buttons/Styled';
import { dataBorders } from '../../../pages/api/dataBorders';
import { dataStretchers } from '../../../pages/api/dataStretchers';
import { dataFloaters } from '../../../pages/api/dataFloaters';

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
    const [selectedImage, setSelectedImage] = useState(undefined);
    const [imageUrl, setImageUrl] = useState(undefined);
    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);

    let txt =
        selectedImage === undefined ? 'Upload your image' : 'Image Uploaded!';

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
                justifyMd="space-between"
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
                                <img src={data.img} alt={data.title} />
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
                justifyMd="space-between"
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
                                <img
                                    src={data.img2}
                                    alt={data.title}
                                    style={{ width: '50%' }}
                                />
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
                justifyMd="space-between"
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
                justifyMd="space-between"
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
