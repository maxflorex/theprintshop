import { BasicInfoForm } from './BasicInfoForm';
import React, { useEffect, useState } from 'react';
import { Column, Flex, Grid, Items } from './Styled/divs/Styled';
import { Title } from './Styled/fonts/Styled';
import { data } from '../api/dataServices';
import FormCanvas from './Forms/FormCanvas';
import { SForm, SInput, SButton } from './Styled/forms/Styled';
import { colRefOrder } from '../firebase';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import FormFraming from './Forms/FormFraming';
import FromPaper from './Forms/FromPaper';
import FormAluminum from './Forms/FormAluminum';
import { Button } from './Styled/buttons/Styled';

const Form = ({ user }) => {
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
        email = user.email;
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

                <BasicInfoForm
                    name={name}
                    handleChange={handleChange}
                    email={email}
                    user={user}
                />

                {/* ----------------------------------------------- */}
                {/* TABS MEDIUM */}

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
                {/* TABS MEDIUM CONTENT */}
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
                    <FormFraming />
                ) : inUseForm === 'Paper' ? (
                    <FromPaper user={user} />
                ) : inUseForm === 'Aluminum' ? (
                    <FormAluminum />
                ) : (
                    ''
                )}

                {/* ----------------------------------------------- */}
                {/* SUBMIT FORM */}
                <Column m="0">
                    {/* {(email,
                    name,
                    medium,
                    borders,
                    stretchers,
                    floaters,
                    qty,
                    wide,
                    tall) !== '' ? ( */}
                    <Button onClick={handleChange} value="Place Order" />
                    {/* ) : (
                        <SButton type="submit" value="Complete Form" disabled />
                    )} */}
                </Column>
            </SForm>
        </>
    );
};

export default Form;
