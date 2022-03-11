import { BasicInfoForm } from './BasicInfoForm';
import React, { useEffect, useState } from 'react';
import { Column, Flex, Grid, Items } from './Styled/divs/Styled';
import { Title } from './Styled/fonts/Styled';
import { data } from '../api/dataServices';
import FormCanvas from './FormCanvas';
import { SForm, SInput, SButton } from './Styled/forms/Styled';
import { colRefOrder } from '../firebase';
import { addDoc, serverTimestamp } from 'firebase/firestore';

const Form = () => {
    const [inUseForm, setInUseForm] = useState(null);
    const [isBorder, setIsBorder] = useState(null);
    const [isStretchers, setStretchers] = useState(null);
    const [isFloaters, setIsFloaters] = useState(null);

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
            setInUseForm(null);
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
        medium = inUseForm;
        borders = isBorder;
        stretchers = isStretchers;
        floaters = isFloaters;
        console.log(qty, medium, borders, stretchers, floaters);
    });


    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    return (
        <>
            <Title size="4rem" m="2rem">
                Place an Order
            </Title>
            <SForm onSubmit={handleSubmit}>
                {/* ----------------------------------------------- */}

               <BasicInfoForm   name={name} handleChange={handleChange} email={email}  />

                {/* ----------------------------------------------- */}

                <Items m="0">
                    {data.map((data, index) => (
                        <Flex
                            m="0"
                            key={index}
                            cursor="pointer"
                            p="1rem"
                            justify="center"
                            colorF="var(--accent)"
                            colora="var(--accent)"
                            color="var(--off2)"
                            onClick={() => setInUseForm(data.title)}
                        >
                            <Title font="Roboto" size="1rem" m="0">
                                {data.title}
                            </Title>
                        </Flex>
                    ))}
                </Items>

                {/* ----------------------------------------------- */}

                {inUseForm === 'Canvas' ? (
                    <FormCanvas
                        setIsBorder={setIsBorder}
                        setStretchers={setStretchers}
                        setIsFloaters={setIsFloaters}
                        qty={qty}
                        wide={wide}
                        tall={tall}
                        instructions={instructions}
                        handleChange={handleChange}
                        isBorder={isBorder}
                    />
                ) : inUseForm === 'Framing' ? (
                    <Title mt="4rem">Framing Form</Title>
                ) : inUseForm === 'Paper' ? (
                    <Title mt="4rem">Paper Form</Title>
                ) : inUseForm === 'Aluminum' ? (
                    <Title mt="4rem">Aluminum Form</Title>
                ) : (
                    ''
                )}

                {/* ----------------------------------------------- */}

                <Column m="0">
                    {(email,
                    name,
                    medium,
                    borders,
                    stretchers,
                    floaters,
                    qty,
                    wide,
                    tall) !== '' ? (
                        <SButton type="submit" value="Place Order" />
                    ) : (
                        <SButton type="submit" value="Complete Form" disabled />
                    )}
                </Column>
            </SForm>
        </>
    );
};

export default Form;

