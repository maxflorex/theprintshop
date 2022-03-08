import React, { useEffect, useState } from 'react';
import { Column, Flex, Grid, Items4 } from './Styled/divs/Styled';
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
            boders: borders,
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
            <SForm onSubmit={handleSubmit}>
                {/* ----------------------------------------------- */}

                <Grid gap="2rem">
                    <SInput
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        required
                    />
                    <SInput
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                </Grid>

                {/* ----------------------------------------------- */}

                <Items4 mt="2rem" mb="2rem">
                    {data.map((data, index) => (
                        <Flex
                            m="0"
                            p="2rem"
                            colorH="var(--off3)"
                            color="var(--off2)"
                            key={index}
                            cursor="pointer"
                            p="1rem"
                            justify="center"
                            onClick={() => setInUseForm(data.title)}
                        >
                            <Title font="Roboto" size="1rem" m="0">
                                {data.title}
                            </Title>
                        </Flex>
                    ))}
                </Items4>

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
                        <SButton type="submit" value='Place Order'/>
                    ) : (
                        <SButton
                            type="submit"
                            value="Complete Form"
                            disabled
                        />
                    )}
                </Column>
            </SForm>
        </>
    );
};

export default Form;
