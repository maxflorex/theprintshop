import React, { useEffect, useState } from 'react';
import { colRefFraming, colRefPaper, storage } from '../../../firebase/config';
import { Column, Flex, Items3, Row } from '../../Styled/divs/Styled';
import { Title } from '../../Styled/fonts/Styled';
import { FiChevronDown } from 'react-icons/fi';
import Image from 'next/image';
import Instructions from '../../Instructions';
import { ref, uploadBytesResumable } from 'firebase/storage';
import { SButton, SForm } from '../../Styled/forms/Styled';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { dataFraming } from '../../../api/dataFraming';

const FormFraming = ({ user }) => {
    const [inUseForm, setInUseForm] = useState(null);
    const [isColor, setIsColor] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMFL, setIsOpenMFL] = useState(false);
    const [isOpenC, setIsOpenC] = useState(false);
    const [isGlass, setIsGlass] = useState('');
    const [isMoulding, setIsMoulding] = useState('');
    const [isMat, setIsMat] = useState('');
    const [isMatW, setIsMatW] = useState('');

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

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // FORM VALUE STATES
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        color: '',
        moulding: '',
        glass: '',
        mat: '',
        matw: '',
        qty: '',
        tall: '',
        wide: '',
        instructions: '',
    });

    // DISTRUCTURE THE STATE VALUES FOR LATER USE
    const {
        name,
        email,
        color,
        moulding,
        glass,
        mat,
        matw,
        qty,
        instructions,
        tall,
        wide,
    } = contactInfo;

    // ON SUBMIT EVENT
    const handleSubmit = (e) => {
        e.preventDefault();

        addDoc(colRefFraming, {
            name: name,
            email: email,
            color: color,
            moulding: moulding,
            glass: glass,
            mat: mat,
            matw: matw,
            qty: qty,
            tall: tall,
            wide: wide,
            instructions: instructions,
            createdAt: serverTimestamp(),
        }).then(() => {
            alert('Message sent!');
            setInUseForm(null);
            setContactInfo({
                name: '',
                email: '',
                color: '',
                moulding: '',
                glass: '',
                mat: '',
                matw: '',
                qty: '',
                tall: '',
                wide: '',
                instructions: '',
            });
        });
    };

    // ON CHANGE EVENT
    const hamdleChange = (e) => {
        setContactInfo({
            ...contactInfo,
            [e.target.name]: e.target.value,
        });
    };

    // USE EFFECT
    useEffect(() => {
        moulding = isMoulding;
        glass = isGlass;
        mat = isMat;
        matw = isMatW;
        color = isColor;
        email = user.email;
        console.log(moulding, glass, mat, color);
        // console.log(qty, medium, borders, stretchers, floaters);
    });

    console.log(dataFraming[0].color);

    return (
        <div>
            {/* ----------------------------------------------- */}
            {/* TAB - COLORS & SIZE */}
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
                    <Title m="2rem">Select Framing Color & Size</Title>
                    <FiChevronDown />
                </Flex>
                <Title font="Roboto" size="1rem" mr="2rem" w="400">
                    Default: None
                </Title>
            </Flex>

            {/* TAB - COLORS & SIZE - CONTENT */}

            {isOpen && (
                <Flex m="2rem" p="0" color="transparent" gap="4rem">
                    <Items3 mt="2rem" ml="0" mr="0" p="0" color="transparent">
                        {dataFraming[0].color.map((data, index) => (
                            <Flex
                                color="transparent"
                                mr="0"
                                ml="0"
                                gapMd="1rem"
                                key={index}
                                cursor="pointer"
                                colorF="var(--accent)"
                                colora="var(--accent)"
                                colorH="var(--off2)"
                                p="1rem"
                                onClick={() => setIsColor(data.color)}
                            >
                                <Column
                                    m="auto"
                                    p="0"
                                    align="centre"
                                    color="none"
                                >
                                    <Image src={data.frame} />
                                    <Title>{data.color}</Title>
                                </Column>
                            </Flex>
                        ))}
                    </Items3>
                    <Items3 m="auto" p="0" color="transparent">
                        {dataFraming[2].moulding.map((data, index) => (
                            <Flex
                                color="transparent"
                                mr="0"
                                ml="0"
                                gapMd="1rem"
                                key={index}
                                cursor="pointer"
                                colorF="var(--accent)"
                                colora="var(--accent)"
                                colorH="var(--off2)"
                                p="1rem"
                                onClick={() => setIsMoulding(data.title)}
                            >
                                <Column
                                    m="auto"
                                    p="0"
                                    align="centre"
                                    color="none"
                                >
                                    <Image src={data.img} />
                                    <Title>{data.title}</Title>
                                </Column>
                            </Flex>
                        ))}
                    </Items3>
                </Flex>
            )}
            {/* ----------------------------------------------- */}
            {/* TAB - GLASS & MATING */}
            <Flex
                color="none"
                m="0"
                p="0"
                bb="solid var(--off3) 1px"
                radius="0"
                colorH="var(--off2)"
                cursor="pointer"
                onClick={() => setIsOpenMFL(!isOpenMFL)}
            >
                <Flex
                    m="0"
                    p="0 "
                    mb="2rem"
                    color="none"
                    justify="start"
                    gap="0"
                >
                    <Title m="2rem">Select Glass & Mating</Title>
                    <FiChevronDown />
                </Flex>
                <Title font="Roboto" size="1rem" mr="2rem" w="400">
                    Default: None
                </Title>
            </Flex>

            {/* TAB - GLASS & MATING - CONTENT */}

            {isOpenMFL && (
                <Items3 mt="2rem" ml="0" mr="0" p="0" color="transparent">
                    {/* #1 */}
                    <Column
                        m="0"
                        color="none"
                        justify="center"
                        gap="1rem"
                        p="2rem"
                    >
                        <Title mb="2rem">Select Glass Type</Title>
                        {dataFraming[1].glass.map((data, index) => (
                            <Flex
                                mr="0"
                                ml="0"
                                key={index}
                                cursor="pointer"
                                colorF="var(--accent)"
                                colora="var(--accent)"
                                className="bg-white"
                                p="1rem"
                                onClick={() => setIsGlass(data.reflection)}
                            >
                                <Flex
                                    m="auto"
                                    color="none"
                                    p="0"
                                    justify="space-between"
                                >
                                    <Title m="1rem">{data.title}</Title>
                                    <Title m="1rem" font="Roboto" size="1rem">
                                        {data.reflection}
                                    </Title>
                                </Flex>
                            </Flex>
                        ))}
                    </Column>
                    {/* #2 */}
                    <Column
                        m="0"
                        color="none"
                        justify="center"
                        gap="1rem"
                        p="2rem"
                    >
                        <Title mb="2rem"> Select Matting</Title>
                        {dataFraming[3].mat.map((data, index) => (
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
                                onClick={() => setIsMat(data.color)}
                            >
                                <Flex
                                    m="auto"
                                    color="none"
                                    p="0"
                                    justify="space-between"
                                >
                                    <Title m="1rem">{data.color}</Title>
                                </Flex>
                            </Flex>
                        ))}
                    </Column>
                    {/* #3 */}
                    <Column
                        m="0"
                        color="none"
                        justify="center"
                        gap="1rem"
                        p="2rem"
                    >
                        <Title mb="2rem"> Select Matting Width</Title>
                        {dataFraming[3].size.map((data, index) => (
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
                                onClick={() => setIsMatW(data.width)}
                            >
                                <Flex
                                    m="auto"
                                    color="none"
                                    p="0"
                                    justify="space-between"
                                >
                                    <Title m="1rem">{data.width}</Title>
                                </Flex>
                            </Flex>
                        ))}
                    </Column>
                </Items3>
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
                <Title font="Roboto" size="1rem" mr="2rem" w="400">
                    Complete to Order
                </Title>
            </Flex>

            {isOpenC && (
                <Instructions
                    qty={qty}
                    handleChange={hamdleChange}
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
            <Column m="0">
                <SButton onClick={handleSubmit} value="Place Order" />
            </Column>
        </div>
    );
};

export default FormFraming;
