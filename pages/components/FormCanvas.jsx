import React, { useEffect, useState } from 'react';
import { dataBorders } from '../api/dataBorders';
import { Column, Flex, Items, Items3, Items6, Row } from './Styled/divs/Styled';
import { Title } from './Styled/fonts/Styled';
import { SInput, STextArea } from './Styled/forms/Styled';
import { FiChevronDown, FiDownloadCloud } from 'react-icons/fi';
import { dataStretchers } from '../api/dataStretchers';
import { dataFloaters } from '../api/dataFloaters';
import { storage } from '../firebase';

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
    const toggle = () => setIsOpen(!isOpen);

    const [isOpenSb, setIsOpenSb] = useState(false);
    const toggleSb = () => setIsOpenSb(!isOpenSb);

    const [isOpenF, setIsOpenF] = useState(false);
    const toggleF = () => setIsOpenF(!isOpenF);

    const uploadFiles = () => {
        document.getElementById('files').click();
    };

    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);

    let txt = selectedImage === null ? 'Upload your image' : 'Image Uploaded!';

 
    return (
        <>
            {/* ----------------------------------------------- */}
            {/* TAB - BORDERS */}
            <Flex
                m="0"
                p="0 "
                mb="2rem"
                color="none"
                bb="solid var(--off3) 1px"
                radius="0"
                justify="start"
                gap="0"
            >
                <Title m="2rem" cursor="pointer" onClick={toggle}>
                    Select Borders
                </Title>
                <FiChevronDown />
            </Flex>

            {/* TAB - BORDERS - CONTENT */}

            {isOpen && (
                <Items6 mt="2rem" ml="0" mr="0" p="0" color="transparent">
                    {dataBorders.map((data, index) => (
                        <Flex
                            color="white"
                            mr="0"
                            ml="0"
                            gapMd="1rem"
                            key={index}
                            cursor="pointer"
                            onClick={() => setIsBorder(data.title)}
                        >
                            <Title>{data.title}</Title>
                        </Flex>
                    ))}
                </Items6>
            )}

            {/* ----------------------------------------------- */}
            {/* TAB - STRETCHER BARS */}

            <Flex
                m="0"
                p="0 "
                mb="2rem"
                color="none"
                bb="solid var(--off3) 1px"
                radius="0"
                justify="start"
                gap="0"
            >
                <Title m="2rem" cursor="pointer" onClick={toggleSb}>
                    Select Stretchers
                </Title>
                <FiChevronDown />
            </Flex>

            {/* TAB - STRETCHER BARS -CONTENT */}

            {isOpenSb && (
                <Items3 mt="2rem" ml="0" mr="0" p="0" color="transparent">
                    {dataStretchers.map((data, index) => (
                        <Flex
                            color="white"
                            mr="0"
                            ml="0"
                            gapMd="1rem"
                            key={index}
                            cursor="pointer"
                            onClick={() => setStretchers(data.title)}
                        >
                            <Title>{data.title}</Title>
                        </Flex>
                    ))}
                </Items3>
            )}

            {/* ----------------------------------------------- */}
            {/* TAB - FLOATERS */}

            <Flex
                m="0"
                p="0 "
                mb="2rem"
                color="none"
                bb="solid var(--off3) 1px"
                radius="0"
                justify="start"
                gap="0"
            >
                <Title m="2rem" cursor="pointer" onClick={toggleF}>
                    Select Floaters
                </Title>
                <FiChevronDown />
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
                color="var(--off2)"
                p="2rem"
                mt="2rem"
                mb="0"
                gap="4rem"
                mMd="0"
            >
                <Flex color="none" m="0" p="0" align="flex-start" gapMd="1rem">
                    <div>
                        <label htmlFor="qty">
                            <Title
                                mb="1rem"
                                mt="2"
                                font="Roboto"
                                size="1rem"
                                align="left"
                            >
                                Quantity:
                            </Title>
                        </label>
                        <SInput
                            type="number"
                            name="qty"
                            value={qty}
                            min="1"
                            max="200"
                            onChange={handleChange}
                            placeholder="Qty"
                            required
                            w="80%"
                            p="1rem"
                        />
                    </div>
                    <div>
                        <label htmlFor="wide">
                            <Title mb="1rem" mt="2" font="Roboto" size="1rem">
                                Width:
                            </Title>
                        </label>
                        <SInput
                            type="number"
                            name="wide"
                            value={wide}
                            min="1"
                            max="200"
                            onChange={handleChange}
                            placeholder='0'
                            required
                            p="1.6rem"
                        />
                    </div>
                    <div>
                        <label htmlFor="tall">
                            <Title mb="1rem" mt="2" font="Roboto" size="1rem">
                                Height:
                            </Title>
                        </label>
                        <SInput
                            type="number"
                            name="tall"
                            value={tall}
                            min="1"
                            max="200"
                            onChange={handleChange}
                            placeholder='0'
                            required
                            p="1.6rem"
                        />
                    </div>
                </Flex>
                <Column p="0" m="0">
                    <Flex color="none" m="0" gap="2rem">
                        <label>
                            <Title mb="1rem" mt="2rem" align="right">
                                {txt}
                            </Title>
                        </label>

                        <div>
                            <FiDownloadCloud
                                style={{
                                    width: '4rem',
                                    height: '4rem',
                                    border: 'none',
                                    outline: 'none',
                                    cursor: 'pointer',
                                }}
                                onClick={uploadFiles}
                            />
                            <input
                                type="file"
                                id="files"
                                name="files"
                                accept="image/png, image/jpeg"
                                style={{ display: 'none' }}
                                onChange={(e) =>
                                    setSelectedImage(e.target.files[0])
                                }
                            />
                        </div>
                    </Flex>
                    <Column m="0" p="0" color="none">
                        <img
                            src={imageUrl}
                            alt={selectedImage}
                            style={{ maxHeight: '8rem', maxWidth: '8rem', margin: 'auto' }}
                        />
                        <Title font="Roboto" size="1rem">
                            {selectedImage === null ? '' : selectedImage.name}
                        </Title>
                    </Column>
                </Column>
                <Flex color="none" m="0" p="0">
                    <label htmlFor="qty">
                        <Title mb="1rem" mt="2rem">
                            Aditional Details / Description / Instructions
                        </Title>
                    </label>
                    <STextArea
                        rows="8"
                        cols="1000"
                        name="instructions"
                        value={instructions}
                        onChange={handleChange}
                        placeholder="Send a message"
                    />
                </Flex>
            </Flex>
        </>
    );
};

export default FormCanvas;
