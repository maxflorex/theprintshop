import React from 'react';
import { Column, Flex, Grid } from './Styled/divs/Styled';
import { SForm, SInput, SOption, SSelect } from './Styled/forms/Styled';

const Form = () => {
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
                <Flex color="none" mt="2rem" ml="0" mr="0" p="0">
                    <SSelect
                        id="fselect"
                        name="fselect"
                        value="Media Type"
                        w="100vw"
                    >
                        <SOption value={0} disabled selected>
                            Please Choose...
                        </SOption>
                        <SOption value="1">Canvas</SOption>
                        <SOption value="2">Paper</SOption>
                        <SOption value="3">Aluminum</SOption>
                        <SOption value="4">Framing</SOption>
                    </SSelect>
                </Flex>
            </SForm>
        </Column>
    );
};

export default Form;
