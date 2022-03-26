import React, { useEffect, useState } from 'react';
import { colRefPaper, storage } from '../../../firebase/config';
import { Column, Flex, FlexItems, Items3 } from '../../../Styled/divs/Styled';
import { Title } from '../../../Styled/fonts/Styled';
import { FiChevronDown } from 'react-icons/fi';

import Instructions from '../Instructions';
import { ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { BtnBlack } from '../../../Styled/buttons/Styled';
import { dataPapers } from '../../../pages/api/dataPapers';
import { dataFloaters } from '../../../pages/api/dataFloaters';
import { dataMounts } from '../../../pages/api/dataMounts';
import { dataLamination } from '../../../pages/api/dataLamination';

const FromPaper = ({ user, myName, setInUseForm, formName, setFormName }) => {
    const [isType, setIsType] = useState( undefined);
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
    const [selectedImage, setSelectedImage] = useState( undefined);
    const [imageUrl, setImageUrl] = useState( undefined);
    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);

    let txt = selectedImage ===  undefined ? 'Upload your image' : 'Image Uploaded!';

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
            setInUseForm( undefined);
            setFormName('');
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
        name = formName;
        mounts = isMounted;
        framing = isFramed;
        laminate = isLaminated;
        type = isType;
        email = user.email;
    });

    return (
        <div>
            {/* ----------------------------------------------- */}
            <Flex
                color="none"
                m="0"
                p="0"
                bb="solid var(--off3) 1px"
                radius="0"
                colorH="var(--off2)"
                cursor="pointer"
                justifyMd='space-between'
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
                        <FlexItems
                            key={index}
                            color={`${
                                isType === data.title ? 'var(--off2)' : 'white'
                            }`}
                            p="1rem"
                            onClick={() => setIsType(data.title)}
                        >
                            <Title m="1rem">{data.title}</Title>
                            <Title size="1rem" m="1rem" font="Roboto">
                                {data.finish}
                            </Title>

                            <img alt={data.title} src={data.img} style={{height: '10rem', width: '100%'}} />
                        </FlexItems>
                    ))}
                </Items3>
            )}
            {/* ----------------------------------------------- */}

            <Flex
                color="none"
                m="0"
                p="0"
                bb="solid var(--off3) 1px"
                radius="0"
                colorH="var(--off2)"
                cursor="pointer"
                justifyMd='space-between'
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
                <Items3
                    mt="2rem"
                    ml="0"
                    mr="0"
                    p="0"
                    color="transparent"
                    gap="0"
                >
                    {/* #1 */}
                    <Column m="0" color="none" gap="1rem" p="2rem">
                        <Title mb="2rem"> Select Frames</Title>
                        {dataFloaters.map((data, index) => (
                            <FlexItems
                                key={index}
                                color={`${
                                    isFramed === data.title
                                        ? 'var(--off2)'
                                        : 'white'
                                }`}
                                p="2rem"
                                onClick={() => setIsFramed(data.title)}
                            >
                                <Title>{data.title}</Title>
                            </FlexItems>
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
                            <FlexItems
                                key={index}
                                color={`${
                                    isMounted === data.title
                                        ? 'var(--off2)'
                                        : 'white'
                                }`}
                                p="2rem"
                                onClick={() => setIsMounted(data.title)}
                            >
                                <Title>{data.title}</Title>
                            </FlexItems>
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
                            <FlexItems
                                key={index}
                                color={`${
                                    isLaminated === data.title
                                        ? 'var(--off2)'
                                        : 'white'
                                }`}
                                p="2rem"
                                onClick={() => setIsLaminated(data.title)}
                            >
                                <Title>{data.title}</Title>
                            </FlexItems>
                        ))}
                    </Column>
                </Items3>
            )}
            {/* ----------------------------------------------- */}
            <Flex
                color="none"
                m="0"
                p="0"
                bb="solid var(--off3) 1px"
                radius="0"
                colorH="var(--off2)"
                cursor="pointer"
                justifyMd='space-between'
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
                <BtnBlack onClick={handleSubmit} m="auto">
                    Submit Order
                </BtnBlack>
            </Column>
        </div>
    );
};

export default FromPaper;
