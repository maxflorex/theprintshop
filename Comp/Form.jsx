import BasicInfoForm from './Forms/BasicInfoForm';
import React, { useEffect, useState } from 'react';
import { Column, Flex, FlexItems, Grid, Items } from '../Styled/divs/Styled';
import { Title } from '../Styled/fonts/Styled';
import { data } from '../pages/api/dataServices';
import FormCanvas from './Forms/Canvas/FormCanvas';
import { SForm, SInput, SButton } from '../Styled/forms/Styled';
import { colRefOrder } from '../firebase/config';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import FormFraming from './Forms/Framing/FormFraming';
import FormPaper from './Forms/Paper/FormPaper';
import FormAluminum from './Forms/Aluminum/FormAluminum';

const Form = ({ user }) => {
    const [inUseForm, setInUseForm] = useState(undefined);
    const [isBorder, setIsBorder] = useState(undefined);
    const [isStretchers, setStretchers] = useState(undefined);
    const [isFloaters, setIsFloaters] = useState(undefined);
    const [formName, setFormName] = useState('');

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // FORM VALUE STATES
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        medium: '',
        borders: '',
        stretchers: '',
        floaters: '',
        qty: '',
        instructions: '',
        wide: '',
        tall: '',
    });

    // DISTRUCTURE THE STATE VALUES FOR LATER USE
    const {
        name,
        email,
        medium,
        borders,
        stretchers,
        floaters,
        qty,
        instructions,
        tall,
        wide,
    } = contactInfo;

    // ON SUBMIT EVENT
    const handleSubmit = (e) => {
        e.preventDefault();

        addDoc(colRefOrder, {
            name: name,
            email: email,
            medium: medium,
            borders: borders,
            stretchers: stretchers,
            floaters: floaters,
            qty: qty,
            tall: tall,
            wide: wide,
            instructions: instructions,
            createdAt: serverTimestamp(),
        }).then(() => {
            alert('Message sent!');
            setInUseForm(undefined);
            setFormName('');
            setContactInfo({
                name: '',
                email: '',
                medium: '',
                borders: '',
                stretchers: '',
                floaters: '',
                qty: '',
                instructions: '',
                wide: '',
                tall: '',
            });
        });
    };

    // ON CHANGE EVENT
    const handleChange = (e) => {
        setContactInfo({
            ...contactInfo,
            [e.target.name]: e.target.value,
        });
    };

    // USE EFFECT

    useEffect(() => {
        name = formName;
        medium = inUseForm;
        borders = isBorder;
        stretchers = isStretchers;
        floaters = isFloaters;
        email = user.email;
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    return (
        <>
            <Title size="4rem" sizeSm='3rem' m="2rem">
                Place an Order
            </Title>
            <SForm>
                {/* ----------------------------------------------- */}

                <BasicInfoForm
                    handleChange={handleChange}
                    email={email}
                    user={user}
                    setFormName={setFormName}
                    formName={formName}
                />

                {/* ----------------------------------------------- */}
                {/* TABS MEDIUM */}

                <Items m="0">
                    {data.map((data, index) => (
                        <FlexItems
                            key={index}
                            p="1rem"
                            color={`${
                                inUseForm === data.title
                                    ? 'var(--off2)'
                                    : 'white'
                            }`}
                            onClick={() => setInUseForm(data.title)}
                        >
                            <Title m="0">{data.title}</Title>
                        </FlexItems>
                    ))}
                </Items>

                {/* ----------------------------------------------- */}
                {/* TABS MEDIUM CONTENT */}
                {inUseForm === 'Canvas' ? (
                    <FormCanvas
                        setIsBorder={setIsBorder}
                        isBorder={isBorder}
                        setStretchers={setStretchers}
                        isStretchers={isStretchers}
                        setIsFloaters={setIsFloaters}
                        isFloaters={isFloaters}
                        qty={qty}
                        wide={wide}
                        tall={tall}
                        instructions={instructions}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        setInUseForm={setInUseForm}
                    />
                ) : inUseForm === 'Framing' ? (
                    <FormFraming
                        user={user}
                        setFormName={setFormName}
                        formName={formName}
                        setInUseForm={setInUseForm}
                    />
                ) : inUseForm === 'Paper' ? (
                    <FormPaper
                        user={user}
                        setFormName={setFormName}
                        formName={formName}
                        setInUseForm={setInUseForm}
                    />
                ) : inUseForm === 'Aluminum' ? (
                    <FormAluminum
                        user={user}
                        setFormName={setFormName}
                        formName={formName}
                        setInUseForm={setInUseForm}
                    />
                ) : (
                    ''
                )}
            </SForm>
        </>
    );
};

export default Form;
