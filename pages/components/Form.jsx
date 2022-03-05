import React, { useState } from 'react';
import { Column, Flex, Grid } from './Styled/divs/Styled';
import { Title } from './Styled/fonts/Styled';
import { data } from '../api/dataServices';
import FormCanvas from './FormCanvas';
import { SForm, SInput, SButton } from './Styled/forms/Styled';
import { colRefOrder } from '../firebase';
import { addDoc, serverTimestamp } from 'firebase/firestore';

const Form = () => {
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // FORM VALUE STATES
    const [contactInfo, setContactInfo] = useState({ name: '', email: '' });

    // DISTRUCTURE THE STATE VALUES FOR LATER USE
    const { name, email } = contactInfo;

    // ON SUBMIT EVENT
    const handleSubmit = (e) => {
        e.preventDefault();

        addDoc(colRefOrder, {
            title: name,
            email: email,
            createdAt: serverTimestamp(),
        }).then(() => {
            setContactInfo({ name: '', email: '' });
            alert('Message sent!');
        });
    };

    // ON CHANGE EVENT
    const handleChange = (e) => {
        setContactInfo({
            ...contactInfo,
            [e.target.name]: e.target.value,
        });
    };

    const empty = '';

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    return (
        <>
            <SForm onSubmit={handleSubmit}>
                <Grid gap="2rem">
                    <SInput
                        type="text"
                        placeholder="Name"
                        name='name'
                        value={name}
                        onChange={handleChange}
                        required
                    />
                    <SInput
                        type="email"
                        placeholder="Email"
                        name= 'email'
                        value={email}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Column m='0'>
                    <SButton
                        type="submit"
                    />
                </Column>

                {/* <Flex
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
                </Flex> */}

                {/* {inUseForm === 0 ? (
                    <FormCanvas />
                ) : inUseForm === 1 ? (
                    <Title mt="4rem">Framing Form</Title>
                ) : inUseForm === 2 ? (
                    <Title mt="4rem">Paper Form</Title>
                ) : inUseForm === 3 ? (
                    <Title mt="4rem">Aluminum Form</Title>
                ) : (
                    ''
                )} */}
            </SForm>

            {/* <form onSubmit={handleSubmit}
                <Column>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="name"
                        value={name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="email"
                        value={email}
                        onChange={handleChange}
                    />

                    {
                        (name,
                        email === empty ? (
                            <button disabled>
                                {name || email === !empty
                                    ? 'Typing...'
                                    : 'Type new order'}
                            </button>
                        ) : (
                            <button>Send new order</button>
                        ))
                    }
                </Column>
            </form> */}
        </>
    );
};

export default Form;
