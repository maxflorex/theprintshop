import React, { useEffect, useState } from 'react';
import { colRefAluminum, storage } from '../../../firebase/config';
import { Column, Flex, FlexItems, Items3, Row } from '../../Styled/divs/Styled';
import { Para, Title } from '../../Styled/fonts/Styled';
import { FiChevronDown } from 'react-icons/fi';
import Image from 'next/image';
import Instructions from '../../Instructions';
import { ref, uploadBytesResumable } from 'firebase/storage';
import { SButton, SForm } from '../../Styled/forms/Styled';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { dataFraming } from '../../../api/dataFraming';
import { dataAluminum } from '../../../api/dataAluminum';
import { BtnBlack } from '../../Styled/buttons/Styled';

const FormAluminum = ({ user, setInUseForm, formName, setFormName }) => {
    const [isFinish, setIsFinish] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMFL, setIsOpenMFL] = useState(false);
    const [isOpenC, setIsOpenC] = useState(false);
    const [isInset, setIsInset] = useState('');

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
        finish: '',
        inset: '',
        qty: '',
        tall: '',
        wide: '',
        instructions: '',
    });

    // DISTRUCTURE THE STATE VALUES FOR LATER USE
    const { name, email, finish, inset, qty, instructions, tall, wide } =
        contactInfo;

    // ON SUBMIT EVENT
    const handleSubmit = (e) => {
        // e.preventDefault();

        addDoc(colRefAluminum, {
            name: name,
            email: email,
            finish: finish,
            inset: inset,
            qty: qty,
            tall: tall,
            wide: wide,
            instructions: instructions,
            createdAt: serverTimestamp(),
        }).then(() => {
            alert('Message sent!');
            setFormName('');
            setInUseForm(null);
            setContactInfo({
                name: '',
                email: '',
                finish: '',
                inset: '',
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
        inset = isInset;
        finish = isFinish;
        email = user.email;
    });

    console.log(dataFraming[0].color);

    return (
        <div>
            {/* TAB - FINISH*/}

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
                    <Title m="2rem">Select Surface Finish</Title>
                    <FiChevronDown />
                </Flex>
                <Title font="Roboto" size="1rem" mr="2rem" w="400">
                    Default: None
                </Title>
            </Flex>

            {/* TAB - FINISH CONTENT */}

            {isOpen && (
                <div>
                    <Row
                        m="auto"
                        color="none"
                        justify="center"
                        gap="2rem"
                        p="2rem"
                        width="75%"
                    >
                        {dataAluminum[0].surface.map((data, index) => (
                            <FlexItems
                                key={index}
                                color={`${
                                    isFinish === data.title
                                        ? 'var(--off2)'
                                        : 'white'
                                }`}
                                onClick={() => setIsFinish(data.title)}
                            >
                                <Title m="1rem">{data.title}</Title>
                                <Image src={data.img} />
                            </FlexItems>
                        ))}
                    </Row>
                </div>
            )}

            {/* TAB - INSET FRAME */}

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
                    <Title m="2rem">Select Hanging Option</Title>
                    <FiChevronDown />
                </Flex>
                <Title font="Roboto" size="1rem" mr="2rem" w="400">
                    Default: None
                </Title>
            </Flex>

            {/* TAB - INSET FRAME - CONTENT */}

            {isOpenMFL && (
                <div>
                    <Row
                        m="auto"
                        color="none"
                        justify="center"
                        gap="2rem"
                        p="2rem"
                        width="75%"
                    >
                        {dataAluminum[1].inset.map((data, index) => (
                            <FlexItems
                                p="2rem"
                                color={`${
                                    isInset === data.title
                                        ? 'var(--off2)'
                                        : 'none'
                                }`}
                                key={index}
                                onClick={() => setIsInset(data.title)}
                            >
                                <Title m="1rem">{data.title}</Title>
                                <Image src={data.img} />
                            </FlexItems>
                        ))}
                    </Row>
                </div>
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

export default FormAluminum;
