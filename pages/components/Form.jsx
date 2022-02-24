import React, { useState } from 'react';
import { Column, Flex, Grid } from './Styled/divs/Styled';

import { Title } from './Styled/fonts/Styled';
import { data } from '../api/dataServices';
import FormCanvas from './FormCanvas';
import { SForm, SInput } from './Styled/forms/Styled';

const Form = () => {
    const [inUseForm, setInUseForm] = useState('Canvas');

    console.log(inUseForm);

    return (
        <Column m="auto">
            <SForm>
                <Grid gap="2rem" gapH="2rem">
                    <SInput
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="Name"
                        // outline='none'
                        colorV="var(--color2)"
                    />
                    <SInput
                        type="text"
                        id="femail"
                        name="femail"
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
                <Flex color='transparent'>
                    <SInput
                        type="submit"
                        id="femail"
                        name="femail"
                        placeholder="Email"
                        w="auto"
                        m="auto"
                        colorH='var(--color)'
                        cursor='pointer'
                    />
                </Flex>
            </SForm>
        </Column>
    );
};

export default Form;
