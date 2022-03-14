import React, { useEffect, useState } from 'react';
import { colRefPaper, storage } from '../../../firebase/config';
import { Column, Flex, Items3 } from '../../Styled/divs/Styled';
import { Title } from '../../Styled/fonts/Styled';
import { FiChevronDown } from 'react-icons/fi';
import { dataPapers } from '../../../api/dataPapers';
import Image from 'next/image';
import { dataFloaters } from '../../../api/dataFloaters';
import { dataMounts } from '../../../api/dataMounts';
import { dataLamination } from '../../../api/dataLamination';
import Instructions from '../../Instructions';
import { ref, uploadBytesResumable } from 'firebase/storage';
import { SButton, SForm } from '../../Styled/forms/Styled';
import { Button } from '../../Styled/buttons/Styled';
import { addDoc, serverTimestamp } from 'firebase/firestore';

const FromPaper = ({ user, myName }) => {
    const [inUseForm, setInUseForm] = useState(null);
    const [isType, setIsType] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMFL, setIsOpenMFL] = useState(false);
    const [isOpenC, setIsOpenC] = useState(false);
    const [isFramed, setIsFramed] = useState('');
    const [isMounted, setIsMounted] = useState('');
    const [isLaminated, setIsLaminated] = useState('');

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
        type: '',
        mounts: '',
        framing: '',
        laminate: '',
        qty: '',
        tall: '',
        wide: '',
        instructions: '',
    });

    // DISTRUCTURE THE STATE VALUES FOR LATER USE
    const {
        name,
        email,
        type,
        mounts,
        framing,
        laminate,
        qty,
        instructions,
        tall,
        wide,
    } = contactInfo;

    // ON SUBMIT EVENT
    const handleSubmit = (e) => {
        e.preventDefault();

        addDoc(colRefPaper, {
            name: name,
            email: email,
            type: type,
            mounts: mounts,
            framing: framing,
            laminate: laminate,
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
                type: '',
                mounts: '',
                framing: '',
                laminate: '',
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
        name = myName;
        mounts = isMounted;
        framing = isFramed;
        laminate = isLaminated;
        type = isType;
        email = user.email;
        console.log(mounts, framing, laminate, type);
        // console.log(qty, medium, borders, stretchers, floaters);
    });

    return (
        <div>
            {/* ----------------------------------------------- */}
            {/* TAB - TYPES */}
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
                    <Title m="2rem">Select Paper Type</Title>
                    <FiChevronDown />
                </Flex>
                <Title font="Roboto" size="1rem" mr="2rem" w="400">
                    Default: Photo Luster
                </Title>
            </Flex>

            {/* TAB - TYPES - CONTENT */}

            {isOpen && (
                <Items3 mt="2rem" ml="0" mr="0" p="0" color="transparent">
                    {dataPapers.map((data, index) => (
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
                            onClick={() => setIsType(data.title)}
                        >
                            <Flex
                                m="auto"
                                color="none"
                                p="0"
                                justify="space-between"
                            >
                                <Title m="1rem">{data.title}</Title>
                                <Title size="1rem" m="1rem" font="Roboto">
                                    {data.finish}
                                </Title>
                            </Flex>
                            <Image
                                src={data.img}
                                objectFit="cover"
                                height={400}
                                width={800}
                            />
                        </Flex>
                    ))}
                </Items3>
            )}
            {/* ----------------------------------------------- */}
            {/* TAB - MFL */}
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
                    <Title m="2rem">Select Mount / Framing / Lamination</Title>
                    <FiChevronDown />
                </Flex>
                <Title font="Roboto" size="1rem" mr="2rem" w="400">
                    Default: None
                </Title>
            </Flex>

            {/* TAB - MFL - CONTENT */}

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
                        <Title mb="2rem"> Select Frames</Title>
                        {dataFloaters.map((data, index) => (
                            <Flex
                                mr="0"
                                ml="0"
                                key={index}
                                cursor="pointer"
                                colorF="var(--accent)"
                                colora="var(--accent)"
                                className="bg-white"
                                p="1rem"
                                onClick={() => setIsFramed(data.title)}
                            >
                                <Flex
                                    m="auto"
                                    color="none"
                                    p="0"
                                    justify="space-between"
                                >
                                    <Title m="1rem">{data.title}</Title>
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
                        <Title mb="2rem"> Select Mount</Title>
                        {dataMounts.map((data, index) => (
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
                                onClick={() => setIsMounted(data.title)}
                            >
                                <Flex
                                    m="auto"
                                    color="none"
                                    p="0"
                                    justify="space-between"
                                >
                                    <Title m="1rem">{data.title}</Title>
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
                        <Title mb="2rem"> Select Lamination</Title>
                        {dataLamination.map((data, index) => (
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
                                onClick={() => setIsLaminated(data.title)}
                            >
                                <Flex
                                    m="auto"
                                    color="none"
                                    p="0"
                                    justify="space-between"
                                >
                                    <Title m="1rem">{data.title}</Title>
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

export default FromPaper;
