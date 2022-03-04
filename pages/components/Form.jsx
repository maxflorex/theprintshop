import React, { useState } from 'react';
import { Column, Flex, Grid } from './Styled/divs/Styled';

import { Title } from './Styled/fonts/Styled';
import { data } from '../api/dataServices';
import FormCanvas from './FormCanvas';
import { SForm, SInput } from './Styled/forms/Styled';
import { colRefOrder } from '../firebase';
import { addDoc, serverTimestamp } from 'firebase/firestore';

const Form = () => {
    // const [inUseForm, setInUseForm] = useState('Canvas');

    const [contactInfo, setContactInfo] = useState({ name: '', email: '' });

    // const empty = contactInfo({ name: '', email: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        addDoc(colRefOrder, {
            title: contactInfo.name,
            email: contactInfo.email,
            createdAt: serverTimestamp(),
        }).then(() => {
            setContactInfo({ name: '', email: '' });
            alert('Message sent!');
        });
    };

    const handleChange = (e) => {
        setContactInfo({
            ...contactInfo,
            [e.target.name]: e.target.value,
        });
    };

    // console.log(form.target)

    return (
        <Column m="auto">
            {/* <SForm className="nameAndEmail">
                <Grid gap="2rem" gapH="2rem">
                    <SInput
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        // outline='none'
                        colorV="var(--color2)"
                    />
                    <SInput
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                    />
                </Grid>
                <Flex
                    p="0"
                    color="transparent"
                    mt="0"
                    mb="0"
                    borderb="solid 1px var(--off2)"
                    radius="0"
                >
                    {data.map((data, index) => (
                        <Flex
                            mt="2rem"
                            mb="2rem"
                            p="2rem"
                            colorH="var(--off2)"
                            color="transparent"
                            key={index}
                            cursor="pointer"
                            onClick={() => setInUseForm(index)}
                        >
                            <Title font="Roboto" size="1rem" m="0">
                                {data.title}
                            </Title>
                        </Flex>
                    ))}
                </Flex>
                {inUseForm === 0 ? (
                    <FormCanvas />
                ) : inUseForm === 1 ? (
                    <Title mt="4rem">Framing Form</Title>
                ) : inUseForm === 2 ? (
                    <Title mt="4rem">Paper Form</Title>
                ) : inUseForm === 3 ? (
                    <Title mt="4rem">Aluminum Form</Title>
                ) : (
                    ''
                )}
                <Flex color="transparent">
                    <SInput
                        type="submit"
                        w="auto"
                        m="auto"
                        colorH="var(--color)"
                        cursor="pointer"
                    />
                </Flex>
            </SForm> */}
            <form onSubmit={handleSubmit} id="orderForm">
                <Column>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="name"
                        value={contactInfo.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="email"
                        value={contactInfo.email}
                        onChange={handleChange}
                    />

                    {contactInfo.name === '' || contactInfo.email === '' ? (
                        <button disabled>
                            {contactInfo.name === '' && contactInfo.email === ''
                                ? 'Type Order'
                                : 'Typing '}
                        </button>
                    ) : (
                        <button>Add new entry</button>
                    )}
                </Column>
            </form>
        </Column>
    );
};

export default Form;
